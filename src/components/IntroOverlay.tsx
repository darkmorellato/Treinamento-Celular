import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Smartphone,
  MousePointerClick,
  GraduationCap,
  Clock,
  Keyboard,
} from 'lucide-react';
import { useFocusTrap } from '../hooks/useFocusTrap';

interface IntroOverlayProps {
  show: boolean;
  onStart: () => void;
}

export function IntroOverlay({ show, onStart }: IntroOverlayProps) {
  const focusTrapRef = useFocusTrap(show);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={focusTrapRef}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 180, damping: 20 }}
            className="max-w-2xl w-full glass-panel rounded-3xl p-8 md:p-12 relative"
          >
            <button
              onClick={onStart}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Fechar introdução"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-14 h-14 bg-brand-500/10 rounded-2xl border border-brand-500/30">
                <Smartphone className="w-7 h-7 text-brand-400" />
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">
                  Treinamento Técnico
                </p>
                <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Arquitetura de um Smartphone
                </h1>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Bem-vindo(a)! Este treinamento interativo explica o funcionamento técnico de um
              smartphone e seus componentes principais, com argumentos de vendas integrados.
              Explore cada parte do dispositivo clicando nos marcadores numerados do diagrama.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <FeatureCard
                icon={<MousePointerClick className="w-5 h-5" />}
                title="Interativo"
                desc="Clique nos hotspots do diagrama"
              />
              <FeatureCard
                icon={<GraduationCap className="w-5 h-5" />}
                title="8 Tópicos"
                desc="Componentes essenciais"
              />
              <FeatureCard
                icon={<Clock className="w-5 h-5" />}
                title="~20 min"
                desc="Duração estimada"
              />
            </div>

            <div className="space-y-2 mb-8">
              <p className="text-sm font-semibold text-slate-300 mb-3">
                O que você vai aprender:
              </p>
              {[
                'Processador (SoC) e arquitetura ARM',
                'Memória RAM & Armazenamento (LPDDR5X / UFS)',
                'Câmara de Vapor (dissipação térmica)',
                'Tela OLED/LTPO e taxa de atualização',
                'Módulo de câmera e sensores CMOS',
                'Bateria e carregamento rápido',
                'Conectividade NFC e pagamentos',
                'Durabilidade e certificações IP',
              ].map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="flex items-center gap-3 text-slate-300 text-sm"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-500/10 text-brand-400 text-xs font-mono flex items-center justify-center">
                    {i + 1}
                  </span>
                  {topic}
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStart}
              className="w-full py-4 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors text-lg shadow-lg shadow-brand-500/30"
            >
              Iniciar Treinamento →
            </motion.button>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
              <Keyboard className="w-4 h-4" />
              <span>Dica: use as teclas ← → para navegar e ESC para fechar o painel</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700">
      <span className="text-brand-400 flex-shrink-0">{icon}</span>
      <div>
        <p className="text-white text-sm font-medium">{title}</p>
        <p className="text-slate-500 text-xs">{desc}</p>
      </div>
    </div>
  );
}
