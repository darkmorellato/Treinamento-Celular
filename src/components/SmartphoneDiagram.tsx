import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { ComponentId } from '../data/types';
import { components } from '../data/components';

interface HotspotDef {
  id: ComponentId;
  label: string;
  x: number;
  y: number;
}

const HOTSPOTS: HotspotDef[] = [
  { id: 'processor', label: 'Processador (SoC)', x: 62, y: 15 },
  { id: 'memory', label: 'Memória RAM & Armazenamento', x: 62.5, y: 24.5 },
  { id: 'cooling', label: 'Câmara de Vapor (Resfriamento)', x: 62, y: 35 },
  { id: 'display', label: 'Tela (OLED/LTPO)', x: 38.5, y: 38 },
  { id: 'camera', label: 'Módulo de Câmera', x: 55, y: 12.5 },
  { id: 'battery', label: 'Bateria & Carregamento', x: 59.5, y: 58 },
  { id: 'nfc', label: 'Conectividade (NFC)', x: 59.5, y: 37.5 },
  { id: 'durability', label: 'Durabilidade (IP Rating)', x: 31.5, y: 43 },
  { id: 'sensors', label: 'Sensores & Biometria', x: 45, y: 28 },
  { id: 'connectivity', label: 'Conectividade Ampliada', x: 62, y: 45 },
];

interface SmartphoneDiagramProps {
  onHotspotClick: (id: ComponentId) => void;
  selectedId: ComponentId | null;
  visited: Set<ComponentId>;
}

const HOTSPOT_INDEX: Record<string, number> = HOTSPOTS.reduce<Record<string, number>>((acc, item, _idx) => {
  acc[item.id] = components.findIndex((c) => c.id === item.id);
  return acc;
}, {});

export function SmartphoneDiagram({ onHotspotClick, selectedId, visited }: SmartphoneDiagramProps) {
  const [hovered, setHovered] = useState<HotspotDef | null>(null);
  const [justVisitedId, setJustVisitedId] = useState<ComponentId | null>(null);
  const prevSelectedRef = useRef<ComponentId | null>(null);
  const justVisitedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (selectedId === null) {
      prevSelectedRef.current = null;
    } else if (prevSelectedRef.current !== selectedId) {
      setJustVisitedId(selectedId);
      if (justVisitedTimer.current) clearTimeout(justVisitedTimer.current);
      justVisitedTimer.current = setTimeout(() => setJustVisitedId(null), 700);
      prevSelectedRef.current = selectedId;
    }
    return () => {
      if (justVisitedTimer.current) clearTimeout(justVisitedTimer.current);
    };
  }, [selectedId]);

  return (
    <div className="blueprint-container w-full max-w-full overflow-hidden">
      <div className="blueprint-wrapper w-full max-w-full">
        <svg
          viewBox="0 0 800 650"
          className="block"
          role="img"
          aria-label="Planta de engenharia técnica de um smartphone (vistas frontal, interna e inferior)"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Esquerda: Vista Frontal (Tela) */}
          <g transform="translate(120, 50)" stroke="#2B2D42" strokeWidth="1.5" fill="none">
            <rect x="0" y="0" width="220" height="460" rx="35" strokeWidth="2" />
            <rect x="6" y="6" width="208" height="448" rx="29" strokeOpacity="0.7" />
            <rect x="12" y="12" width="196" height="436" rx="24" fill="rgba(43, 45, 66, 0.03)" strokeWidth="1" />
            <rect x="65" y="20" width="90" height="24" rx="12" fill="#F5F3EB" stroke="#2B2D42" />
            <circle cx="85" cy="32" r="5" fill="rgba(43, 45, 66, 0.08)" />
            <circle cx="135" cy="32" r="3" fill="rgba(43, 45, 66, 0.08)" />
            <rect x="25" y="60" width="170" height="100" rx="10" strokeDasharray="4 4" opacity="0.35" />
            <circle cx="45" cy="80" r="10" opacity="0.35" />
            <path d="M 65 75 L 150 75 M 65 85 L 120 85" strokeWidth="1" opacity="0.35" />
            <path d="M -2 100 L -2 140" strokeWidth="3" strokeLinecap="round" />
            <path d="M -2 150 L -2 190" strokeWidth="3" strokeLinecap="round" />
            <path d="M 222 120 L 222 170" strokeWidth="3" strokeLinecap="round" />
            <text x="110" y="500" fill="#0fabee" stroke="none" fontFamily="monospace" fontSize="14" fontWeight="bold" textAnchor="middle" letterSpacing="1">
              VISTA FRONTAL (DISPLAY)
            </text>
          </g>

          {/* Direita: Vista Interna (Componentes) */}
          <g transform="translate(460, 50)" stroke="#2B2D42" strokeWidth="1.5" fill="none">
            <rect x="0" y="0" width="220" height="460" rx="35" strokeWidth="2" />
            <rect x="6" y="6" width="208" height="448" rx="29" strokeOpacity="0.7" />
            <path
              d="M 15 15 L 205 15 L 205 180 L 130 180 L 130 240 L 15 240 Z"
              fill="rgba(43, 45, 66, 0.04)"
              strokeDasharray="3 3"
            />

            {/* Módulo de Câmera (Tripla) */}
            <rect x="15" y="20" width="85" height="100" rx="15" strokeWidth="2" />
            <circle cx="40" cy="45" r="14" />
            <circle cx="40" cy="45" r="6" strokeWidth="0.5" />
            <circle cx="75" cy="45" r="10" />
            <circle cx="58" cy="85" r="12" />
            <circle cx="80" cy="70" r="4" fill="#2B2D42" opacity="0.25" />

            {/* Sistema de Resfriamento (Vapor Chamber) */}
            <path
              d="M 110 25 L 195 25 L 195 120 L 110 120 Z"
              fill="rgba(43, 45, 66, 0.04)"
              stroke="#2B2D42"
              strokeDasharray="2 2"
              strokeWidth="1"
            />
            <path d="M 110 25 L 195 120 M 195 25 L 110 120" stroke="rgba(43, 45, 66, 0.12)" strokeWidth="1" />

            {/* Processador SoC */}
            <rect x="115" y="30" width="75" height="75" rx="5" strokeWidth="2" fill="#F5F3EB" />
            <rect x="120" y="35" width="65" height="65" rx="3" fill="rgba(43, 45, 66, 0.05)" />
            <text x="152" y="65" fill="#2B2D42" stroke="none" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">
              SoC
            </text>

            {/* Chips de Memória (RAM/ROM) */}
            <rect x="115" y="110" width="45" height="20" rx="2" strokeWidth="1.5" fill="rgba(43, 45, 66, 0.04)" />
            <text x="137" y="123" fill="#2B2D42" stroke="none" fontFamily="monospace" fontSize="8" textAnchor="middle">
              RAM
            </text>
            <rect x="165" y="110" width="25" height="35" rx="2" strokeWidth="1.5" fill="rgba(43, 45, 66, 0.04)" />
            <text
              x="177"
              y="128"
              fill="#2B2D42"
              stroke="none"
              fontFamily="monospace"
              fontSize="8"
              textAnchor="middle"
              transform="rotate(-90 177 128)"
            >
              ROM
            </text>

            {/* Bobina de Carregamento sem fio / NFC */}
            <circle cx="110" cy="210" r="25" strokeDasharray="2 2" strokeWidth="1.5" />
            <circle cx="110" cy="210" r="20" strokeDasharray="2 2" strokeWidth="1.5" />
            <circle cx="110" cy="210" r="15" strokeDasharray="2 2" strokeWidth="1.5" />

            {/* Bateria Grande */}
            <rect x="25" y="260" width="115" height="175" rx="8" fill="rgba(43, 45, 66, 0.04)" strokeWidth="2" />
            <text
              x="82"
              y="340"
              fill="#2B2D42"
              stroke="none"
              fontFamily="monospace"
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
              transform="rotate(-90 82 340)"
            >
              Li-Ion 5000mAh
            </text>

            {/* Motor de Vibração */}
            <rect x="150" y="380" width="50" height="30" rx="4" strokeDasharray="2 2" />
            <text x="175" y="398" fill="#2B2D42" stroke="none" fontFamily="monospace" fontSize="8" textAnchor="middle">
              TAPTIC
            </text>

            {/* Caixa Acústica */}
            <rect x="25" y="440" width="170" height="15" rx="5" opacity="0.5" />

            <text x="110" y="500" fill="#de8211" stroke="none" fontFamily="monospace" fontSize="14" fontWeight="bold" textAnchor="middle" letterSpacing="1">
              VISTA INTERNA (HARDWARE)
            </text>
          </g>

          {/* Base: Vista Inferior (Conectores) */}
          <g transform="translate(290, 560)" stroke="#2B2D42" strokeWidth="1.5" fill="none">
            <rect x="0" y="0" width="220" height="26" rx="8" strokeWidth="2" />
            <rect x="90" y="7" width="40" height="12" rx="4" strokeWidth="1.5" />
            <rect x="95" y="11" width="30" height="4" rx="2" fill="rgba(43, 45, 66, 0.12)" />
            <circle cx="75" cy="13" r="2.5" />
            <circle cx="145" cy="13" r="2.5" />
            <path d="M 25 13 L 55 13 M 165 13 L 195 13" strokeWidth="4" strokeDasharray="2 4" strokeLinecap="round" />
            <text x="110" y="45" fill="#157a2b" stroke="none" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">
              INFERIOR (I/O)
            </text>
          </g>
        </svg>

        {/* Hotspots sobre o blueprint */}
        <div className="absolute inset-0">
          {HOTSPOTS.map((spot, _idx) => {
            const isSelected = selectedId === spot.id;
            const isVisited = visited.has(spot.id);
            const isJustVisited = justVisitedId === spot.id;

            const bg = isSelected
              ? 'var(--color-brand-500)'
              : isJustVisited
                ? 'var(--color-warning)'
                : isVisited
                  ? 'var(--color-brand-700)'
                  : 'var(--color-brand-500)';
            const borderColor = isJustVisited ? 'var(--color-warning)' : '#fdfafadf';

            return (
              <motion.button
                key={spot.id}
                className="absolute flex items-center justify-center rounded-full font-bold cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 text-white-300"
                style={{
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                  width: 'clamp(20px, 3.5vw, 28px)',
                  height: 'clamp(20px, 3.5vw, 28px)',
                  backgroundColor: bg,
                  border: `2px solid ${borderColor}`,
                  boxShadow: isSelected
                    ? '0 0 25px rgb(212, 216, 235)'
                    : '0 0 15px rgba(70, 70, 72, 0.8)',
                  transform: 'translate(-50%, -50%)',
                  zIndex: isSelected ? 20 : 10,
                  fontSize: 'clamp(10px, 1.6vw, 13px)',
                  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: isSelected ? 1.3 : 1 }}
                whileHover={{ scale: isSelected ? 1.35 : 1.15 }}
                transition={{ delay: 0.4 + (HOTSPOT_INDEX[spot.id] ?? 0) * 0.07, type: 'spring', stiffness: 300, damping: 18 }}
                onMouseEnter={() => setHovered(spot)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(spot)}
                onBlur={() => setHovered(null)}
                onClick={() => onHotspotClick(spot.id)}
                aria-label={`Explorar componente: ${spot.label}`}
              >
                {String((HOTSPOT_INDEX[spot.id] ?? 0) + 1).padStart(2, '0')}
                {isVisited && (
                  <span
                    className="absolute -right-1 -top-1 flex items-center justify-center rounded-full text-[9px] font-bold"
                    style={{
                      backgroundColor: isJustVisited ? '#eab308' : '#22c55e',
                      color: '#FFFFFF',
                      width: 'clamp(12px, 2vw, 16px)',
                      height: 'clamp(12px, 2vw, 16px)',
                    }}
                  >
                    ✓
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Hover tooltip */}
      {hovered && (
        <div
          className="absolute left-1/2 top-2 -translate-x-1/2 px-4 py-2 rounded-lg whitespace-nowrap pointer-events-none z-30"
          style={{
            backgroundColor: 'rgba(244, 245, 248, 0.98)',
            color: '#e8ecef',
            fontSize: '0.875rem',
            border: '1px solid rgba(8, 32, 69, 0.8)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          }}
        >
          <span style={{ color: '#4a80ec', fontWeight: 600 }}>{hovered.label}</span>
          <span style={{ color: '#26262e', marginLeft: '0.5rem', fontSize: '0.75rem' }}>— clique para explorar</span>
        </div>
      )}
    </div>
  );
}
