import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X, RotateCcw, CheckCircle2, Award } from 'lucide-react';
import { components } from '../data/components';
import { useFocusTrap } from '../hooks/useFocusTrap';

interface CompletionScreenProps {
  show: boolean;
  onClose: () => void;
  onRestart: () => void;
  onStartQuiz: () => void;
  trainingMins?: number;
  trainingSecs?: number;
}

const CONFETTI_COLORS = ['#14b8a6', '#22c55e', '#2dd4bf', '#eab308'];

const BADGE_TITLES: Record<string, string> = {
  processor: 'SoC Master',
  memory: 'Memory Expert',
  cooling: 'Thermal Pro',
  display: 'Display Guru',
  camera: 'Camera Master',
  battery: 'Battery Pro',
  nfc: 'NFC Specialist',
  durability: 'Durability Shield',
  sensors: 'Sensors Expert',
  connectivity: 'Connectivity Pro',
};

export function CompletionScreen({ show, onClose, onRestart, onStartQuiz, trainingMins = 0, trainingSecs = 0 }: CompletionScreenProps) {
  const focusTrapRef = useFocusTrap(show);
  const formattedTime = `${String(trainingMins).padStart(2, '0')}:${String(trainingSecs).padStart(2, '0')}`;

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
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            className="max-w-lg w-full max-h-[92dvh] overflow-hidden flex flex-col bg-draft-paper rounded-3xl relative text-center border border-slate-700 mx-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 rounded-lg bg-[#FFFFFF] text-black hover:text-[#4169e1] transition-colors z-20 border border-slate-700"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex-1 min-h-0 overflow-y-auto scrollbar-hide overscroll-contain">
              {/* Confetti */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full pointer-events-none"
                  style={{
                    background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
                    left: `${8 + i * 7}%`,
                    top: '10%',
                  }}
                  animate={{ y: [0, 450], opacity: [1, 0], rotate: [0, 360] }}
                  transition={{
                    duration: 1.5 + (i % 5) * 0.2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              ))}

              <div className="p-5 sm:p-6 md:p-8 pb-3 sm:pb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 12 }}
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#FFFFFF] rounded-full mb-3 sm:mb-5 border-4 border-black"
                >
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-[#eab308]" />
                </motion.div>

                <h2 className="text-xl sm:text-2xl font-bold text-black mb-1.5 sm:mb-2">Treinamento Concluído!</h2>
                <p className="text-black/80 text-xs sm:text-sm mb-3 sm:mb-5">
                  Parabéns! Você explorou todos os componentes técnicos de um smartphone.
                </p>

                <div className="bg-[#FFFFFF] rounded-2xl border border-slate-700 p-3 sm:p-5 mb-3 sm:mb-5">
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="text-center">
                      <span className="text-3xl sm:text-4xl font-bold text-[#4169e1]">100%</span>
                      <span className="block text-[10px] sm:text-xs text-black/70 mt-0.5">concluído</span>
                    </div>
                    <div className="w-px h-8 sm:h-10 bg-slate-700" />
                    <div className="text-center">
                      <span className="text-xl sm:text-2xl font-bold text-black font-mono">{formattedTime}</span>
                      <span className="block text-[10px] sm:text-xs text-black/70 mt-0.5">tempo</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-left mb-2.5 sm:mb-3">
                    {components.map((comp, i) => (
                      <motion.div
                        key={comp.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className="flex items-center gap-1.5 text-xs sm:text-sm text-black"
                      >
                        <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 flex-shrink-0">
                          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                        </span>
                        <span className="truncate">{comp.label.split(' (')[0]}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="border-t border-slate-700/60 pt-2 sm:pt-3">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-black bg-[#eab308]">
                        <Award className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-black" />
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold text-black uppercase tracking-wide">Conquistas</span>
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {components.map((comp) => (
                        <span
                          key={comp.id}
                          className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full bg-[#FFFFFF] border-2 border-black text-[10px] sm:text-xs font-medium text-black"
                        >
                          <span className="inline-flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-black bg-[#eab308]">
                            <Award className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-black" />
                          </span>
                          {BADGE_TITLES[comp.id] || comp.label.split(' (')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-black/70 text-xs sm:text-sm mb-3 sm:mb-5">
                  Você agora possui conhecimento técnico sólido sobre o funcionamento de smartphones e os
                  argumentos de vendas de cada componente.
                </p>
              </div>
            </div>

            <div className="p-3 sm:p-5 border-t border-slate-700/50 bg-[#FFFFFF] shrink-0">
              <div className="flex flex-col sm:flex-row gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onRestart}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#FFFFFF] text-black font-medium rounded-xl border border-slate-700 hover:border-[#00ced1] transition-colors text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  Refazer Treinamento
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onStartQuiz}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#4169e1] text-white font-semibold rounded-xl hover:bg-[#2444b4] transition-colors text-sm"
                >
                  Fazer Quiz
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="flex-1 py-2 bg-[#FFFFFF] text-black font-medium rounded-xl border border-slate-700 hover:border-[#00ced1] transition-colors text-sm"
                >
                  Continuar Explorando
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
