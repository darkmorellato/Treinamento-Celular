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
          className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-6"
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
            className="max-w-lg w-full glass-panel rounded-3xl p-6 md:p-8 relative text-center overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors z-20"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Confetti */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
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

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 12 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-brand-500/20 rounded-full mb-5 border-4 border-brand-400/30"
            >
              <Trophy className="w-10 h-10 text-brand-400" />
            </motion.div>

            <h2 className="text-2xl font-bold text-white mb-2">Treinamento Concluído!</h2>
            <p className="text-slate-300 mb-5">
              Parabéns! Você explorou todos os componentes técnicos de um smartphone.
            </p>

            <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-5 mb-5">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-center">
                  <span className="text-4xl font-bold text-success">100%</span>
                  <span className="block text-xs text-slate-400 mt-1">concluído</span>
                </div>
                <div className="w-px h-10 bg-slate-700" />
                <div className="text-center">
                  <span className="text-2xl font-bold text-brand-300 font-mono">{formattedTime}</span>
                  <span className="block text-xs text-slate-400 mt-1">tempo</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-left mb-3">
                {components.map((comp, i) => (
                  <motion.div
                    key={comp.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="truncate">{comp.label.split(' (')[0]}</span>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-slate-700/60 pt-3">
                <div className="flex items-center gap-2 mb-2.5">
                  <Award className="w-4 h-4 text-warning" />
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Conquistas</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {components.map((comp) => (
                    <span
                      key={comp.id}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-300"
                    >
                      <Award className="w-3 h-3" />
                      {BADGE_TITLES[comp.id] || comp.label.split(' (')[0]}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-5">
              Você agora possui conhecimento técnico sólido sobre o funcionamento de smartphones e os
              argumentos de vendas de cada componente.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onRestart}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-800 text-white font-medium rounded-xl border border-slate-700 hover:border-brand-500/40 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Refazer Treinamento
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStartQuiz}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors"
              >
                Fazer Quiz
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="flex-1 py-2.5 bg-slate-800 text-white font-medium rounded-xl border border-slate-700 hover:border-brand-500/40 transition-colors"
              >
                Continuar Explorando
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
