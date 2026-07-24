import { useEffect } from 'react';
import { Play } from 'lucide-react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

export function AudioPlayer({ src }: { src: string }) {
  const { isPlaying, togglePlay, play, currentTime, duration, formatTime, isLoading } = useAudioPlayer(src);

  // Tentar autoplay ao montar. Navegadores podem bloquear se não houver gesto.
  useEffect(() => {
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      play().catch(() => {});
    };
    start();
    document.addEventListener('pointerdown', start, { once: true });
    document.addEventListener('keydown', start, { once: true });
    return () => {
      document.removeEventListener('pointerdown', start);
      document.removeEventListener('keydown', start);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      {/* Disco de vinil */}
      <button
        onClick={togglePlay}
        disabled={isLoading}
        aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
        aria-pressed={isPlaying}
        style={{
          position: 'relative',
          width: '64px',
          height: '64px',
          border: 'none',
          padding: 0,
          background: 'transparent',
          cursor: isLoading ? 'wait' : 'pointer',
          flexShrink: 0,
        }}
      >
        {isLoading ? (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '2px solid rgba(45, 212, 191, 0.3)',
              borderTopColor: '#2dd4bf',
              animation: 'vinyl-spin 1s linear infinite',
            }}
          />
        ) : (
          <>
            {/* Sulcos/grooves do disco */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background:
                  'radial-gradient(circle at center, #0f172a 0 18%, #1e293b 18.5% 20%, #0f172a 20.5% 24%, #1e293b 24.5% 26%, #0f172a 26.5% 31%, #1e293b 31.5% 33%, #0f172a 33.5% 39%, #1e293b 39.5% 41%, #0f172a 41.5% 48%, #1e293b 48.5% 50%, #0f172a 50.5% 100%)',
                boxShadow:
                  '0 4px 14px rgba(0,0,0,0.6), inset 0 0 0 2px rgba(148,163,184,0.2)',
                animation: isPlaying ? 'vinyl-spin 4s linear infinite' : 'none',
                transformOrigin: 'center',
              }}
            />
            {/* Rótulo central (label) */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '22px',
                height: '22px',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #14b8a6, #0f766e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 10px rgba(20,184,166,0.6)',
              }}
            >
              {/* Furo central */}
              <div
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: '#0b1120',
                }}
              />
            </div>
            {/* Ícone de play quando pausado */}
            {!isPlaying && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(11,17,32,0.55)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <Play
                  size={20}
                  fill="#2dd4bf"
                  strokeWidth={0}
                  style={{ marginLeft: '2px', color: '#2dd4bf' }}
                />
              </div>
            )}
          </>
        )}
      </button>

      {/* Texto lateral */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
          maxWidth: '180px',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#f8fafc',
            letterSpacing: '0.04em',
            lineHeight: 1.2,
          }}
        >
          {isPlaying ? 'Tocando' : 'Pausado'}
        </span>
        <span
          style={{
            fontSize: '0.625rem',
            fontFamily: 'ui-monospace, monospace',
            color: '#64748b',
          }}
        >
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
        {/* Mini progresso (anel do vinil) */}
        <div
          style={{
            width: '100%',
            height: '3px',
            borderRadius: '2px',
            background: '#1e293b',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #14b8a6, #2dd4bf)',
              borderRadius: '2px',
              transition: 'width 0.1s linear',
            }}
          />
        </div>
      </div>

      {/* Animacao de giro do vinil */}
      <style>{`
        @keyframes vinyl-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
