import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  BookOpen,
  Layers,
  Target,
  AlertCircle,
  MessageSquare,
  Brain,
  ListChecks,
  Lock,
} from 'lucide-react';
import DOMPurify from 'dompurify';
import type { ComponentId, LearningResource, KeyTerm } from '../data/types';
import { components } from '../data/components';
import { SpecTable, ComparisonTable } from './SpecTable';
import { learningResources } from '../data/learningResources';
import { useFocusTrap } from '../hooks/useFocusTrap';

interface DetailPanelProps {
  componentId: ComponentId;
  visited: Set<ComponentId>;
  onClose: () => void;
  onNavigate: (id: ComponentId) => void;
}

type TabKey = 'overview' | 'learning' | 'sales' | 'specs';

interface TabDef {
  key: TabKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DIFFICULTY_COLORS: Record<string, string> = {
  basic: 'bg-blue-500/20 text-black border-blue-500/30',
  intermediate: 'bg-purple-500/20 text-black border-purple-500/30',
  advanced: 'bg-amber-500/20 text-black border-amber-500/30',
};

const LAYER_META = [
  { key: 'fundamentals' as const, title: 'Fundamentos', desc: 'O que é, propósito e impacto' },
  { key: 'technicalDeepDive' as const, title: 'Aprofundamento Técnico', desc: 'Como funciona internamente' },
  { key: 'commercial' as const, title: 'Aplicações Comerciais', desc: 'Diferenciais competitivos' },
  { key: 'troubleshooting' as const, title: 'Diagnóstico', desc: 'Problemas comuns e soluções' },
];

const LAYER_ACCENT = [
  'border-l-blue-500',
  'border-l-purple-500',
  'border-l-green-500',
  'border-l-amber-500',
];

export function DetailPanel({ componentId, visited, onClose, onNavigate }: DetailPanelProps) {
  const comp = components.find((c) => c.id === componentId);
  const idx = components.findIndex((c) => c.id === componentId);
  const prev = idx > 0 ? components[idx - 1] : null;
  const next = idx < components.length - 1 ? components[idx + 1] : null;
  const resource = learningResources[componentId];

  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const focusTrapRef = useFocusTrap(true);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y;

    // swipe direito (dx > 0) > avança | swipe esquerdo (dx < 0) > fecha
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) {
        onClose();
      } else if (dx > 0 && next) {
        onNavigate(next.id);
      }
    }
    touchStartRef.current = null;
  };

  // Resetar a aba e o scroll ao trocar de componente
  useEffect(() => {
    setActiveTab('overview');
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [componentId]);

  // Resetar scroll ao trocar de aba
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [activeTab, scrollRef]);

  if (!comp) return null;

  const tabs: TabDef[] = [
    { key: 'overview', label: 'Visão Geral', icon: ChevronRight },
    ...(resource ? [{ key: 'learning', label: 'Aprendizado', icon: Layers }] : []),
    ...(comp.salesPitch ? [{ key: 'sales', label: 'Vendas', icon: Lightbulb }] : []),
    ...(comp.specs || comp.comparison ? [{ key: 'specs', label: 'Especificações', icon: ListChecks }] : []),
  ] as TabDef[];

  return (
    <motion.aside
      key={`panel-${componentId}`}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 240, damping: 28 }}
      className="glass-panel flex flex-col fixed top-0 left-0 h-full w-full md:w-[540px] lg:w-[576px] z-50 shadow-2xl overflow-x-hidden bg-draft-paper text-black"
      role="dialog"
      aria-label={comp.detailTitle}
      ref={focusTrapRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header do painel */}
      <div className="flex justify-between items-center p-5 border-b border-slate-700/50 bg-[#FFFFFF] backdrop-blur-xl">
        <div className="flex items-center space-x-4 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] flex items-center justify-center border border-slate-600 shadow-inner shrink-0">
            <img
              src={`/icones/${idx + 1}.png`}
              alt={comp.label}
              className="w-6 h-6 object-contain"
              draggable={false}
            />
          </div>
          <h3 className="text-xl font-bold text-black truncate">{comp.label}</h3>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {visited.has(componentId) && (
            <span className="flex items-center gap-1 text-sm text-success mr-1">
              <CheckCircle2 className="w-4 h-4" />
            </span>
          )}
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-black transition-all w-9 h-9 flex items-center justify-center rounded-full hover:bg-red-500/20 hover:text-red-500"
            aria-label="Fechar painel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navegação prev/next */}
      <div className="flex items-center justify-between gap-2 px-5 py-2.5 border-b border-slate-700/50 bg-[#FFFFFF]">
        <button
          onClick={() => prev && onNavigate(prev.id as ComponentId)}
          disabled={!prev}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-black hover:text-[#00ced1] disabled:opacity-30 disabled:cursor-not-allowed transition-colors min-w-0"
        >
          <ChevronLeft className="w-4 h-4 flex-shrink-0" />
          <span className="truncate hidden sm:block max-w-[120px]">{prev?.label}</span>
        </button>
        <span className="text-xs text-black font-mono shrink-0">
          {String(idx + 1).padStart(2, '0')} / {String(components.length).padStart(2, '0')}
        </span>
        <button
          onClick={() => next && onNavigate(next.id as ComponentId)}
          disabled={!next}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-black hover:text-[#00ced1] disabled:opacity-30 disabled:cursor-not-allowed transition-colors min-w-0"
        >
          <span className="truncate hidden sm:block max-w-[120px]">{next?.label}</span>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
        </button>
      </div>

      {/* Abas */}
      <div className="flex border-b border-slate-700/50 bg-[#FFFFFF]">
        {tabs.map((tab) => {
          const TabIcon = tab.icon;
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 px-2 text-xs font-bold transition-colors relative ${
                active ? 'text-[#3cb371]' : 'text-black hover:text-slate-700'
              }`}
              aria-pressed={active}
            >
              <TabIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{tab.label}</span>
              {active && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#800000]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Conteúdo rolavel por aba */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 lg:p-6 bg-draft-paper">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${componentId}-${activeTab}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            {activeTab === 'overview' && <OverviewTab comp={comp} />}
            {activeTab === 'learning' && resource && <LearningTab resource={resource} />}
            {activeTab === 'sales' && <SalesTab comp={comp} />}
            {activeTab === 'specs' && <SpecsTab comp={comp} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-slate-700/50 bg-[#FFFFFF] text-xs font-semibold text-slate-500 text-center uppercase tracking-wider flex items-center justify-center gap-1">
        <Lock className="w-3 h-3" /> Material de Uso Interno e Confidencial
      </div>
    </motion.aside>
  );
}

/* ---------- Aba: Visão Geral ---------- */
function OverviewTab({ comp }: { comp: (typeof components)[number] }) {
  return (
    <>
      <div className="text-[#4169e1] font-bold mb-3 flex items-center border-b border-slate-700/80 pb-2 text-base">
        <ChevronRight className="mr-2 text-slate-500 w-4 h-4" />
        Introdução
      </div>
      <p className="text-black leading-relaxed text-sm p-4 bg-brand-500/10 border-l-4 border-brand-500 rounded-xl">
        {comp.intro}
      </p>

      <div className="flex flex-col gap-4 pt-2">
        {comp.sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-[#FFFFFF] p-4 rounded-xl border border-slate-700/50 shadow-sm"
          >
            <h4 className="text-[#4169e1] font-bold mb-2 flex items-center border-b border-slate-700/80 pb-1.5 text-base">
              <ChevronRight className="mr-2 text-slate-500 w-3.5 h-3.5" />
              {section.heading}
            </h4>
            <div
              className="text-black text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.body) }}
            />
            {section.bullets && (
              <ul className="space-y-2 mt-3">
                {section.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-2.5 text-black text-sm"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="p-3 bg-[#FFFFFF] rounded-xl border border-slate-700/50 flex items-start gap-2.5">
        <Lightbulb className="w-4 h-4 text-[#ff6347] flex-shrink-0 mt-0.5" />
        <p className="text-xs text-slate-500">
          Use as teclas{' '}
          <kbd className="px-1.5 py-0.5 bg-slate-900 rounded text-xs font-mono border border-slate-700 text-white">←</kbd>{' '}
          <kbd className="px-1.5 py-0.5 bg-slate-900 rounded text-xs font-mono border border-slate-700 text-white">→</kbd> para
          navegar entre componentes e{' '}
          <kbd className="px-1.5 py-0.5 bg-slate-900 rounded text-xs font-mono border border-slate-700 text-white">ESC</kbd> para
          fechar.
        </p>
      </div>
    </>
  );
}

/* ---------- Aba: Aprendizado ---------- */
function LearningTab({ resource }: { resource: LearningResource }) {
  return (
    <>
      {/* Camadas de Aprendizado */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <Layers className="w-4 h-4 text-brand-400" />
          <h3 className="text-base font-semibold text-black">Camadas de Aprendizado</h3>
        </div>
        <div className="space-y-3">
          {LAYER_META.map((layer, lIdx) => {
            const items = resource.learningLayers[layer.key];
            if (!items || items.length === 0) return null;
            return (
              <div
                key={layer.key}
                className={`pl-4 pr-3 py-3 rounded-r-xl bg-[#FFFFFF] border-l-4 ${LAYER_ACCENT[lIdx % LAYER_ACCENT.length]}`}
              >
                <h4 className="text-sm font-semibold text-black mb-0.5">{layer.title}</h4>
                <p className="text-xs text-slate-500 mb-2">{layer.desc}</p>
                <ul className="space-y-1.5">
                  {items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-sm text-black">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Glossário */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-brand-400" />
          <h3 className="text-base font-semibold text-black">Glossário Técnico</h3>
        </div>
        <div className="grid grid-cols-1 gap-2.5">
        {resource.keyTerms.map((kt: KeyTerm, kIdx: number) => (
            <div key={kIdx} className="p-3 bg-[#FFFFFF]/60 rounded-lg border border-slate-700/40">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="font-semibold text-black text-sm">{kt.term}</span>
                <span className={`px-1.5 py-0.5 text-xs rounded border ${DIFFICULTY_COLORS[kt.difficulty]}`}>
                  {kt.difficulty}
                </span>
              </div>
              <p className="text-sm text-black">{kt.definition}</p>
              {kt.example && <p className="text-xs text-slate-500 mt-1 italic">{kt.example}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Vantagens Técnicas */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-4 h-4 text-success" />
          <h3 className="text-base font-semibold text-black">Vantagens Técnicas</h3>
        </div>
      <ul className="space-y-2">
        {resource.competitiveAdvantages.map((adv: string, aIdx: number) => (
            <li
              key={aIdx}
              className="flex items-start gap-2.5 p-2.5 bg-[#FFFFFF]/40 rounded-lg border border-success/10"
            >
              <span className="mt-1 w-2 h-2 rounded-full bg-success flex-shrink-0" />
              <span className="text-sm text-black leading-relaxed">{adv}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Objeções */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <AlertCircle className="w-4 h-4 text-[#ff6347]" />
          <h3 className="text-base font-semibold text-black">Objeções Comuns</h3>
        </div>
      <div className="space-y-2.5">
        {resource.objectionHandling.map((obj: { objection: string; response: string; evidence: string }, oIdx: number) => (
            <div
              key={oIdx}
              className="rounded-lg border border-warning/20 overflow-hidden bg-[#FFFFFF]/30"
            >
              <div className="p-3">
                <p className="text-sm font-medium text-[#ff6347] mb-1.5">{obj.objection}</p>
                <p className="text-sm text-black">{obj.response}</p>
                <div className="mt-2 p-2 bg-[#FFFFFF] rounded border-l-2 border-brand-500 text-xs text-slate-500">
                  <strong>Base técnica:</strong> {obj.evidence}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ---------- Aba: Vendas ---------- */
function SalesTab({ comp }: { comp: (typeof components)[number] }) {
  const resource = learningResources[comp.id];

  return (
    <>
      {/* Argumento de Vendas */}
      {comp.salesPitch && (
        <div className="sales-pitch-card p-4 rounded-xl shadow-lg">
          <h4 className="text-[#ff6347] font-bold mb-2 flex items-center text-base relative z-10">
            <Lightbulb className="mr-2 w-4 h-4" /> Argumento de Vendas
          </h4>
          <div
            className="text-black text-sm leading-relaxed relative z-10 font-medium"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comp.salesPitch) }}
          />
        </div>
      )}

      {/* Cenários de Venda */}
      {resource && resource.saleScenarios.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-4 h-4 text-brand-400" />
            <h3 className="text-base font-semibold text-black">Cenários de Venda</h3>
          </div>
          <div className="space-y-3">
            {resource.saleScenarios.map((scenario, sIdx) => (
              <div key={sIdx} className="p-4 bg-[#FFFFFF] rounded-xl border border-slate-700/40">
                <h4 className="text-sm font-medium text-black mb-2.5">{scenario.scenario}</h4>
                <div className="mb-2.5">
                  <p className="text-xs font-medium text-slate-500 mb-1.5">Pitch points:</p>
                  <ul className="space-y-1.5">
                    {scenario.talkingPoints.map((point, pIdx) => (
                      <li key={pIdx} className="text-sm text-slate-700 flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-2.5 bg-brand-500/10 border border-brand-500/20 rounded-lg">
                  <p className="text-xs text-[#4169e1] font-medium">Estratégia de fechamento:</p>
                  <p className="text-sm text-slate-700 mt-0.5">{scenario.closingStrategy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Analogia */}
      {resource && resource.analogies.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Brain className="w-4 h-4 text-purple-400" />
            <h3 className="text-base font-semibold text-black">Analogia para Cliente</h3>
          </div>
          <div className="space-y-3">
            {resource.analogies.map((analogy, anIdx) => (
              <div
                key={anIdx}
                className="p-4 bg-gradient-to-br from-purple-500/10 to-brand-500/10 rounded-xl border border-purple-500/20"
              >
                <p className="text-base font-semibold text-black mb-2">{analogy.title}</p>
                <blockquote className="text-slate-700 italic mb-2.5 border-l-4 border-brand-500 pl-3 py-1 bg-[#FFFFFF]/30 text-sm">
                  “{analogy.customerFacing}”
                </blockquote>
                <p className="text-xs text-slate-500">
                  <span className="font-medium text-black">Explicação técnica:</span>{' '}
                  {analogy.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

/* ---------- Aba: Especificações ---------- */
function SpecsTab({ comp }: { comp: (typeof components)[number] }) {
  return (
    <div className="space-y-6">
      {comp.specs && <SpecTable spec={comp.specs} />}
      {comp.comparison && <ComparisonTable table={comp.comparison} />}
      {!comp.specs && !comp.comparison && (
        <p className="text-slate-600 text-sm text-center py-8">
          Sem especificações tabuladas para este componente.
        </p>
      )}
    </div>
  );
}
