import { motion } from 'framer-motion';
import { components } from '../data/components';

interface SidebarProps {
  selectedId: import('../data/types').ComponentId | null;
  visited: Set<import('../data/types').ComponentId>;
  onSelect: (id: import('../data/types').ComponentId) => void;
}

export function Sidebar({ selectedId, visited, onSelect }: SidebarProps) {
  return (
    <nav
      className="w-64 lg:w-72 flex-shrink-0 p-4 lg:p-6 h-full overflow-y-auto bg-[#F5F3EB] border-r border-[#2B2D42]/10 scrollbar-hide"
      aria-label="Lista de componentes"
    >
      <h2 className="text-[#2B2D42] text-sm font-semibold uppercase tracking-wide mb-2">
        Componentes
      </h2>
      <ul className="space-y-2">
        {components.map((comp, idx) => {
          const isSelected = selectedId === comp.id;
          const isVisited = visited.has(comp.id);

          return (
            <li key={comp.id}>
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(comp.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-colors text-left ${
                  isSelected
                    ? 'bg-[#4169e1]/10 border-[#4169e1] text-[#2B2D42]'
                    : isVisited
                      ? 'bg-[#FFFFFF] border-[#6E9857] text-[#2B2D42] animate-border-glow-green'
                      : 'bg-[#FFFFFF] border-[#2B2D42]/15 text-[#2B2D42] hover:border-[#4169e1]/40'
                }`}
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0 bg-[#FFFFFF]"
                >
                  <img
                    src={`/icones/${idx + 1}.png`}
                    alt={comp.label}
                    className="w-6 h-6 object-contain"
                    draggable={false}
                  />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[#2B2D42] text-xs font-mono font-bold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium truncate text-[#2B2D42]">{comp.label}</span>
                  </div>
                  <p className="text-xs text-[#2B2D42]/70 truncate mt-0.5">{comp.shortDesc}</p>
                </div>
                {isVisited && (
                  <span className="flex-shrink-0 text-[#6E9857] font-bold">✓</span>
                )}
              </motion.button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
