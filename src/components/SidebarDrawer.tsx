import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Sidebar } from './Sidebar';
import type { ComponentId } from '../data/types';

interface SidebarDrawerProps {
  selectedId: ComponentId | null;
  visited: Set<ComponentId>;
  onSelect: (id: ComponentId) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function SidebarDrawer({ selectedId, visited, onSelect, isOpen, onClose }: SidebarDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-72 sm:w-80 z-50 lg:hidden"
            aria-label="Lista de componentes (mobile)"
          >
            <div className="flex justify-between items-center p-4 border-b border-slate-700/50 bg-slate-800/90 backdrop-blur-xl">
              <h2 className="text-slate-400 text-sm font-semibold uppercase tracking-wide">
                Componentes
              </h2>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-500/20 hover:text-red-400"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-full overflow-y-auto bg-slate-900/95 backdrop-blur-md scrollbar-hide">
              <Sidebar selectedId={selectedId} visited={visited} onSelect={(id) => { onSelect(id); onClose(); }} />
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
