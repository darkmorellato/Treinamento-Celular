import { motion } from 'framer-motion';
import {
  Cpu,
  Camera,
  BatteryCharging,
  Smartphone,
  Wifi,
  Shield,
  MemoryStick,
  Snowflake,
  Check,
  Fingerprint,
  Radio,
} from 'lucide-react';
import { components } from '../data/components';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Camera,
  BatteryCharging,
  Smartphone,
  Wifi,
  Shield,
  MemoryStick,
  Snowflake,
  Fingerprint,
  Radio,
};

interface SidebarProps {
  selectedId: import('../data/types').ComponentId | null;
  visited: Set<import('../data/types').ComponentId>;
  onSelect: (id: import('../data/types').ComponentId) => void;
}

export function Sidebar({ selectedId, visited, onSelect }: SidebarProps) {
  return (
    <nav
      className="w-64 lg:w-72 flex-shrink-0 p-4 lg:p-6 h-full overflow-y-auto bg-slate-900/60 border-r border-slate-700/50 scrollbar-hide"
      aria-label="Lista de componentes"
    >
      <h2 className="text-slate-400 text-sm font-semibold uppercase tracking-wide mb-4">
        Componentes
      </h2>
      <ul className="space-y-2">
        {components.map((comp, idx) => {
          const Icon = ICONS[comp.icon] ?? Cpu;
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
                    ? 'bg-brand-500/10 border-brand-500 text-white'
                    : isVisited
                      ? 'bg-slate-800 border-success/30 text-white'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-brand-500/40 hover:text-white'
                }`}
              >
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0 ${
                    isSelected
                      ? 'bg-brand-500 text-white'
                      : isVisited
                        ? 'bg-success/20 text-success'
                        : 'bg-slate-900 text-brand-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-xs font-mono">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium truncate">{comp.label}</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate mt-0.5">{comp.shortDesc}</p>
                </div>
                {isVisited && (
                  <span className="flex-shrink-0">
                    <Check className="w-4 h-4 text-success" />
                  </span>
                )}
              </motion.button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
