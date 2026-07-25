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
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
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
            className="max-w-2xl w-full max-h-[92dvh] flex flex-col bg-draft-paper rounded-3xl p-4 sm:p-6 md:p-8 relative border border-slate-700 mx-auto overflow-y-auto overscroll-contain scrollbar-hide"
          >
            <button
              onClick={onStart}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#FFFFFF] text-black hover:text-[#4169e1] transition-colors border border-slate-700 z-10"
              aria-label="Fechar introdução"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3 sm:mb-5">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#FFFFFF] rounded-2xl border-2 border-black shrink-0">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-7 text-[#4169e1]" />
              </div>
              <div className="min-w-0">
                <p className="text-black/70 text-[11px] sm:text-xs font-medium uppercase tracking-wide leading-tight">
                  Treinamento Técnico
                </p>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black leading-tight">
                  Arquitetura de um Smartphone
                </h1>
              </div>
            </div>

            <p className="text-black/80 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5">
              Bem-vindo(a)! Este treinamento interativo explica o funcionamento técnico de um
              smartphone e seus componentes principais, com argumentos de vendas integrados.
              Explore cada parte do dispositivo clicando nos marcadores numerados do diagrama.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-6">
              <FeatureCard
                icon={<MousePointerClick className="w-4 h-4 sm:w-5 sm:h-5" />}
                title="Interativo"
                desc="Clique nos hotspots do diagrama"
              />
              <FeatureCard
                icon={<GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />}
                title="8 Tópicos"
                desc="Componentes essenciais"
              />
              <FeatureCard
                icon={<Clock className="w-4 h-4 sm:w-5 sm:h-5" />}
                title="~20 min"
                desc="Duração estimada"
              />
            </div>

            <div className="flex-1 min-h-0 space-y-1 sm:space-y-1.5 mb-3 sm:mb-6">
              <p className="text-xs sm:text-sm font-semibold text-black mb-1.5 sm:mb-2">
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
                  className="flex items-center gap-2.5 sm:gap-3 text-black text-xs sm:text-sm"
                >
                  <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#4169e1]/10 text-[#4169e1] text-[10px] sm:text-xs font-mono font-bold flex items-center justify-center">
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
              className="w-full py-2.5 sm:py-3 bg-[#4169e1] text-white font-semibold rounded-xl hover:bg-[#2444b4] transition-colors text-sm sm:text-base shadow-lg shrink-0"
            >
              Iniciar Treinamento →
            </motion.button>

            <div className="mt-2.5 sm:mt-4 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-black/70 shrink-0">
              <Keyboard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
    <div className="flex items-center gap-3 p-3 bg-[#FFFFFF] rounded-xl border border-slate-700">
      <span className="text-[#4169e1] flex-shrink-0">{icon}</span>
      <div>
        <p className="text-black text-sm font-medium">{title}</p>
        <p className="text-black/70 text-xs">{desc}</p>
      </div>
    </div>
  );
}
