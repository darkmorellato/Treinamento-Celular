import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, PartyPopper } from "lucide-react";
import { useTraining } from "./hooks/useTraining";
import { SmartphoneDiagram } from "./components/SmartphoneDiagram";
import { DetailPanel } from "./components/DetailPanel";
import { Sidebar } from "./components/Sidebar";
import { SidebarDrawer } from "./components/SidebarDrawer";
import { IntroOverlay } from "./components/IntroOverlay";
import { CompletionScreen } from "./components/CompletionScreen";
import { AudioPlayer } from "./components/AudioPlayer";
import { QuizScreen } from "./components/QuizScreen";
import { getRandomQuizQuestions } from "./data/quizQuestions";

export function App() {
  const {
    selectedId,
    visited,
    showIntro,
    showCompletion,
    progress,
    allVisited,
    trainingMins,
    trainingSecs,
    selectComponent,
    closePanel,
    navigateTo,
    hideIntro,
    hideCompletion,
    restart,
  } = useTraining();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [progressToast, setProgressToast] = useState<string | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<ReturnType<typeof getRandomQuizQuestions>>([]);
  const prevProgressRef = useRef(progress);

  useEffect(() => {
    if (progress > prevProgressRef.current) {
      setProgressToast(`+${progress - prevProgressRef.current}% (${progress}%)`);
      const timer = setTimeout(() => setProgressToast(null), 2000);
      prevProgressRef.current = progress;
      return () => clearTimeout(timer);
    }
    prevProgressRef.current = progress;
  }, [progress]);

  const handleStartQuiz = () => {
    const questions = getRandomQuizQuestions(50);
    setQuizQuestions(questions);
    setQuizOpen(true);
  };

  const handleRestart = () => {
    restart();
  };

  return (
    <div className="flex flex-col h-full font-sans antialiased overflow-x-hidden w-full mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-20 p-2 sm:p-3 shadow-lg border-b bg-[#fdfdfd] border-draft-stroke/40 backdrop-blur-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4 w-full md:w-auto min-w-0">
            <img src="/icones/soc.png" alt="Onboarding Técnico" className="w-10 h-10 shrink-0" />
            <div className="flex-1 min-w-0">
              <h1 className="text-xl md:text-2xl font-bold text-draft-ink tracking-tight truncate">
                Onboarding Técnico
              </h1>
              <p className="text-sm text-draft-subtext font-medium truncate">
                Arquitetura de Dispositivos Móveis
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="w-full md:w-64 bg-[#f8f8f8] p-3 rounded-lg border border-black">
              <div className="flex justify-between text-xs font-semibold text-[#00a86b]">
                <span className="truncate text-[#2B2D42]">Progresso do Estudo</span>
                <span
                  className={
                    allVisited
                      ? "text-[#00a86b] flex items-center gap-1"
                      : "text-[#00a86b]"
                  }
                >
                  {allVisited ? "✓ Completo" : `${progress}%`}
                </span>
              </div>
              <div className="w-full h-1.5 rounded bg-white border border-black/20 overflow-hidden mt-2">
                <motion.div
                  className="h-full rounded bg-[#00a86b]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>

            <button
              onClick={handleRestart}
              className="shrink-0 p-2.5 rounded-xl bg-transparent text-draft-subtext hover:text-draft-ink transition-colors transition-transform hover:scale-110"
              aria-label="Reiniciar estudo"
              title="Reiniciar estudo"
            >
              <img src="/icones/reset.png" alt="Reiniciar estudo" className="w-7 h-7" />
            </button>

            <button
              onClick={handleStartQuiz}
              disabled={!allVisited}
              className="shrink-0 p-2.5 rounded-xl bg-transparent text-draft-subtext hover:text-draft-ink transition-colors transition-transform hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Abrir quiz"
              title={allVisited ? "Fazer quiz" : "Complete o estudo para acessar o quiz"}
            >
              <img src="/icones/quiz.png" alt="Abrir quiz" className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden relative min-h-0 bg-draft-paper">
        {/* Sidebar esquerda (desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="hidden lg:block flex-shrink-0"
        >
          <Sidebar
            selectedId={selectedId}
            visited={visited}
            onSelect={selectComponent}
          />
        </motion.div>

        {/* Área de visualização da planta */}
        <div className="flex-1 p-2 sm:p-3 lg:p-4 overflow-y-auto flex flex-col items-center min-w-0 w-full">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
             className="w-full mb-3 sm:mb-4 lg:mb-5 text-center bg-[#FFFFFF] border border-black p-3 sm:p-5 rounded-2xl"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-3">
              Planta de Engenharia
            </h2>
            <p className="text-draft-subtext text-sm sm:text-base md:text-lg">
              Clique nos marcadores numerados sobre o diagrama do aparelho para estudar as especificações de cada módulo vital.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-full"
          >
            <SmartphoneDiagram
              onHotspotClick={selectComponent}
              selectedId={selectedId}
              visited={visited}
            />
          </motion.div>

          <div className="mt-4 sm:mt-6 text-center text-draft-subtext text-xs sm:text-sm font-medium flex flex-col items-center px-4">
            <span>Desenvolvido e criado por Dark Morellato.</span>
            <span className="mt-1.5 bg-[#FFFFFF] text-draft-accent px-3 py-1 rounded-full text-xs border border-black">
              Miplace 2026
            </span>
          </div>
        </div>

        {/* Detail Panel */}
        <AnimatePresence>
          {selectedId && (
            <DetailPanel
              componentId={selectedId}
              visited={visited}
              onClose={closePanel}
              onNavigate={navigateTo}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Player no canto inferior direito */}
      <div className="fixed bottom-2 sm:bottom-2 right-2 sm:right-4 z-50 bg-[#7f7f7f]/90 p-1.5 sm:p-2 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md scale-75 sm:scale-80">
        <AudioPlayer src="/mog.mp3" />
      </div>

      {/* Overlays */}
      <IntroOverlay show={showIntro} onStart={hideIntro} />
      <CompletionScreen
        show={showCompletion}
        onClose={hideCompletion}
        onRestart={handleRestart}
        onStartQuiz={handleStartQuiz}
        trainingMins={trainingMins}
        trainingSecs={trainingSecs}
      />
      {quizOpen && (
        <QuizScreen
          questions={quizQuestions}
          onClose={() => setQuizOpen(false)}
          onRestartTraining={handleRestart}
        />
      )}

      {/* Mobile sidebar drawer */}
      <SidebarDrawer
        selectedId={selectedId}
        visited={visited}
        onSelect={selectComponent}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-16 left-3 z-30 w-10 h-10 flex items-center justify-center rounded-xl bg-draft-panel/90 text-draft-stroke border border-draft-stroke/50 shadow-lg backdrop-blur-md"
        aria-label="Abrir menu de componentes"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Progress toast */}
      <AnimatePresence>
        {progressToast && (
          <motion.div
            key="progresstoast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-xl bg-draft-panel border border-draft-stroke/40 shadow-xl"
          >
            <PartyPopper className="w-4 h-4 text-draft-accent" />
            <span className="text-sm font-semibold text-draft-ink">{progressToast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

