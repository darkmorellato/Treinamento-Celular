import { motion } from 'framer-motion';
import type { SpecTable as SpecTableType, ComparisonTable as ComparisonTableType } from '../data/types';

export function SpecTable({ spec }: { spec: SpecTableType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="mt-8"
    >
      <h3 className="text-xs font-semibold uppercase tracking-wide text-black mb-4">
        {spec.title}
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-700">
        <table className="w-full text-sm">
          <tbody>
            {spec.rows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-800/20'}>
                <td className="px-4 py-2.5 text-black font-medium w-1/2 align-top">{row.label}</td>
                <td className="px-4 py-2.5 text-black font-mono">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export function ComparisonTable({ table }: { table: ComparisonTableType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.4 }}
      className="mt-8"
    >
      <h3 className="text-xs font-semibold uppercase tracking-wide text-black mb-4">
        {table.title}
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-700">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brand-500/10">
              {table.headers.map((header, idx) => (
                <th
                  key={idx}
                  className={`px-4 py-3 font-semibold text-black ${idx === 0 ? 'text-left' : 'text-center'}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-800/20'}>
                <td className="px-4 py-3 font-mono font-bold text-black whitespace-nowrap">{row.label}</td>
                {row.values.map((value, vIdx) => (
                  <td key={vIdx} className="px-4 py-3 text-black text-center">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
