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
            className="max-w-2xl w-full max-h-[88dvh] overflow-y-auto bg-draft-paper rounded-3xl p-6 sm:p-8 md:p-12 relative border border-slate-700 mx-auto"
          >
            <button
              onClick={onStart}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#FFFFFF] text-black hover:text-[#4169e1] transition-colors border border-slate-700"
              aria-label="Fechar introdução"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-14 h-14 bg-[#FFFFFF] rounded-2xl border-2 border-black">
                <Smartphone className="w-7 h-7 text-[#4169e1]" />
              </div>
              <div>
                <p className="text-black/70 text-sm font-medium uppercase tracking-wide">
                  Treinamento Técnico
                </p>
                <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight">
                  Arquitetura de um Smartphone
                </h1>
              </div>
            </div>

            <p className="text-black/80 text-base leading-relaxed mb-6">
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
              <p className="text-sm font-semibold text-black mb-3">
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
                  className="flex items-center gap-3 text-black text-sm"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4169e1]/10 text-[#4169e1] text-xs font-mono font-bold flex items-center justify-center">
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
              className="w-full py-4 bg-[#4169e1] text-white font-semibold rounded-xl hover:bg-[#2444b4] transition-colors text-lg shadow-lg"
            >
              Iniciar Treinamento →
            </motion.button>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-black/70">
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
    <div className="flex items-center gap-3 p-3 bg-[#FFFFFF] rounded-xl border border-slate-700">
      <span className="text-[#4169e1] flex-shrink-0">{icon}</span>
      <div>
        <p className="text-black text-sm font-medium">{title}</p>
        <p className="text-black/70 text-xs">{desc}</p>
      </div>
    </div>
  );
}
