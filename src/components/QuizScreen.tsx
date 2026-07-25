import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, CheckCircle2, RotateCcw, BookOpen } from 'lucide-react';
import type { QuizQuestion } from '../data/quizQuestions';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { components } from '../data/components';

interface QuizScreenProps {
  questions: QuizQuestion[];
  onClose: () => void;
  onRestartTraining: () => void;
}

type QuizStatus = 'active' | 'result' | 'analysis';

interface ComponentStat {
  id: string;
  label: string;
  total: number;
  correct: number;
}

export function QuizScreen({ questions, onClose, onRestartTraining }: QuizScreenProps) {
  const idxState = useState(0);
  const selectedState = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const focusTrapRef = useFocusTrap(true);
  const [status, setStatus] = useState<QuizStatus>('active');

  const currentIndex = idxState[0];
  const setCurrentIndex = idxState[1];
  const selectedOption = selectedState[0];
  const setSelectedOption = selectedState[1];

  const current = questions[currentIndex];

  const progress = useMemo(() => Math.round(((currentIndex) / questions.length) * 100), [currentIndex, questions.length]);
  const totalQuestions = questions.length;
  const score = useMemo(() => questions.reduce((acc, q, idx) => acc + (answers[idx] === q.correctIndex ? 1 : 0), 0), [questions, answers]);
  const scorePercent = Math.round((score / totalQuestions) * 100);

  const componentStats = useMemo<ComponentStat[]>(() => {
    const map = new Map<string, { label: string; total: number; correct: number }>();
    questions.forEach((q, idx) => {
      const comp = components.find((c) => c.id === q.componentId);
      const label = comp?.label.split(' (')[0] || q.componentId;
      const existing = map.get(q.componentId) || { label, total: 0, correct: 0 };
      existing.total += 1;
      if (answers[idx] === q.correctIndex) {
        existing.correct += 1;
      }
      map.set(q.componentId, existing);
    });
    return Array.from(map.entries()).map(([id, data]) => ({ id, ...data }));
  }, [questions, answers]);

  const weakPoints = useMemo(() => componentStats.filter((c) => c.correct / c.total < 0.7), [componentStats]);

  const motivationalMessage = useMemo(() => {
    const pct = scorePercent;
    if (pct >= 90) return 'Excelente! Você domina o conteúdo.';
    if (pct >= 70) return 'Bom trabalho! Revise os pontos fracos para chegar à excelência.';
    if (pct >= 50) return 'Razoável. Focamos nos pontos abaixo para melhorar.';
    return 'É importante revisar o treinamento antes de tentar novamente.';
  }, [scorePercent]);

  const handleAnswer = (optionIndex: number) => {
    if (selectedOption !== null) return;

    setSelectedOption(optionIndex);
    setAnswers(prev => ({ ...prev, [currentIndex]: optionIndex }));
  };

  const handleFinish = () => setStatus('analysis');

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers({});
    setStatus('active');
  };

  return (
    <motion.div
      className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={focusTrapRef}
        className="max-w-[58rem] w-full max-h-[92dvh] overflow-hidden flex flex-col bg-draft-paper rounded-3xl p-5 sm:p-6 md:p-8 relative border border-slate-700 mx-auto"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 180, damping: 20 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-black">Quiz</h2>
            <p className="text-[11px] text-black/70 mt-0.5">
              {status === 'analysis' ? 'Análise de desempenho' : status === 'result' ? 'Resultado final' : `Questão ${currentIndex + 1} de ${totalQuestions}`}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#FFFFFF] text-black hover:text-[#4169e1] transition-colors border border-slate-700"
            aria-label="Fechar quiz"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {status === 'active' && (
          <div className="mb-4">
            <div className="w-full h-2 rounded bg-slate-700/50 overflow-hidden">
              <motion.div
                className="h-full rounded bg-[#4169e1]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-black/70 mt-1">
              <span>Progresso do Quiz</span>
              <span>{progress}%</span>
            </div>
          </div>
        )}

        <div className="flex-1 -mx-1 px-1">
        <AnimatePresence mode="wait">
          {status === 'analysis' ? (
              <motion.div
                key="quiz-analysis"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-2"
              >
                <div className="text-center py-1">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#4169e1]/20 border border-[#4169e1] mb-1">
                    <BookOpen className="w-4 h-4 text-[#4169e1]" />
                  </div>
                  <h3 className="text-base font-bold text-black mb-0.5">Análise de desempenho</h3>
                  <p className="text-black/80 text-xs mb-1">{motivationalMessage}</p>
                  <div className="inline-flex items-baseline justify-center px-3 py-1 rounded-lg bg-[#FFFFFF] border border-slate-700">
                    <span className="text-xl font-bold text-[#4169e1]">{scorePercent}</span>
                    <span className="text-black/70 ml-1 text-xs">% de acerto</span>
                  </div>
                  <p className="text-black/70 text-[11px] mt-0.5">
                    Você acertou <span className="text-[#4169e1] font-bold">{score}</span> de <span className="font-bold text-black">{totalQuestions}</span> questões.
                  </p>
                </div>

                <div className="bg-[#FFFFFF] rounded-lg border border-slate-700 p-2">
                  <div className="flex items-center gap-1 mb-1">
                    <BookOpen className="w-3 h-3 text-[#4169e1]" />
                    <h4 className="text-[11px] font-semibold text-black uppercase tracking-wide">Desempenho por componente</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1">
                    {componentStats.map((c) => {
                      const pct = Math.round((c.correct / c.total) * 100);
                      const isWeak = pct < 70;
                      return (
                        <div key={c.id} className="flex flex-col gap-0.5">
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="text-[11px] text-black truncate">{c.label}</span>
                            <span className={`text-[11px] font-bold tabular-nums ${isWeak ? 'text-[#ff6347]' : 'text-[#4169e1]'}`}>
                              {pct}%
                            </span>
                          </div>
                          <div className="w-full h-1 rounded bg-slate-700/50 overflow-hidden">
                            <motion.div
                              className={`h-full rounded ${isWeak ? 'bg-[#ff6347]' : 'bg-[#4169e1]'}`}
                              initial={{ width: '0%' }}
                              animate={{ width: `${pct}%` }}
                              transition={{ duration: 0.4 }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {weakPoints.length > 0 && (
                  <div className="bg-[#ff6347]/10 rounded-lg border border-[#ff6347]/20 p-2">
                    <div className="flex items-center gap-1 mb-1">
                      <BookOpen className="w-3 h-3 text-[#ff6347]" />
                      <h4 className="text-[11px] font-semibold text-[#ff6347] uppercase tracking-wide">Pontos para revisar</h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {weakPoints.map((c) => (
                        <span key={c.id} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFFFFF] border border-[#ff6347]/30 text-[11px] font-medium text-[#ff6347]">
                          {c.label} — {Math.round((c.correct / c.total) * 100)}%
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-black/70 mt-1">
                      Dica: volte aos módulos destacados no treinamento e revise os cenários de venda antes de refazer o quiz.
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-1.5">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={handleRestartQuiz}
                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-[#FFFFFF] text-black text-sm font-medium rounded-lg border border-slate-700 hover:border-[#4169e1] transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Refazer Quiz
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={onRestartTraining}
                    className="flex-1 py-1.5 bg-[#4169e1] text-white text-sm font-semibold rounded-lg hover:bg-[#2444b4] transition-colors"
                  >
                    Refazer Treinamento
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={onClose}
                    className="flex-1 py-1.5 bg-[#FFFFFF] text-black text-sm font-medium rounded-lg border border-slate-700 hover:border-[#4169e1] transition-colors"
                  >
                    Fechar
                  </motion.button>
                </div>
              </motion.div>
          ) : current ? (
              <motion.div
                key={`question-${current.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#4169e1]/10 text-[#4169e1] text-sm font-bold border border-[#4169e1]/20 shrink-0 mt-0.5">
                      {currentIndex + 1}
                    </span>
                    <p className="text-base sm:text-lg text-black font-medium leading-relaxed">{current.question}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {current.options.map((option: string, idx: number) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === current.correctIndex;

                    const baseClasses = 'w-full text-left p-4 rounded-xl border transition-colors';
                    const stateClasses = selectedOption === null
                      ? 'bg-[#FFFFFF] border-slate-700 text-black hover:border-[#4169e1]'
                      : isCorrect
                        ? 'border-[#4169e1] bg-[#4169e1]/10 text-[#4169e1]'
                        : isSelected
                          ? 'border-[#ff6347] bg-[#ff6347]/10 text-[#ff6347]'
                          : 'bg-[#FFFFFF] border-slate-700 text-black/60';

                    return (
                      <motion.button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={selectedOption !== null}
                        className={`${baseClasses} ${stateClasses} disabled:cursor-default`}
                        whileHover={selectedOption === null ? { scale: 1.01 } : undefined}
                        whileTap={selectedOption === null ? { scale: 0.99 } : undefined}
                      >
                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#4169e1]/10 text-xs font-bold text-[#4169e1]">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="text-sm sm:text-base text-black">{option}</span>
                          {selectedOption !== null && isCorrect && <CheckCircle2 className="w-5 h-5 text-[#4169e1] ml-auto" />}
                          {selectedOption !== null && isSelected && !isCorrect && <span className="ml-auto text-[#ff6347] text-xs font-bold">Errado</span>}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                  {selectedOption !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between pt-2"
                    >
                      <div className="text-sm text-black/80">
                        {selectedOption === current.correctIndex ? (
                          <span className="text-[#4169e1]">Correto!</span>
                        ) : (
                          <span className="text-[#ff6347]">
                            Incorreto. A resposta correta é: <span className="text-black font-semibold">{current.options[current.correctIndex]}</span>
                          </span>
                        )}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={currentIndex < questions.length - 1 ? handleNext : handleFinish}
                        className="flex items-center gap-2 px-4 py-2.5 bg-[#4169e1] text-white font-semibold rounded-xl hover:bg-[#2444b4] transition-colors"
                      >
                        {currentIndex < questions.length - 1 ? (
                          <>Próxima <ChevronRight className="w-4 h-4" /></>
                        ) : (
                          <>Concluir <CheckCircle2 className="w-4 h-4" /></>
                        )}
                      </motion.button>
                    </motion.div>
                  )}
            </motion.div>
          ) : null}
        </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
