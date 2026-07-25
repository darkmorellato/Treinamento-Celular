import { useEffect, useRef, useCallback } from 'react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

export function AudioPlayer({ src }: { src: string }) {
  const { isPlaying, play, togglePlay, currentTime, duration, formatTime, isLoading } = useAudioPlayer(src);
  const cleanupRef = useRef<(() => void) | null>(null);
  const playInitiatedRef = useRef(false);
  const lastPlayAtRef = useRef(0);
  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;
  const playRef = useRef(play);
  playRef.current = play;

  const preventDragStart = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  useEffect(() => {
    let cancelled = false;
    let fallbackInstalled = false;

    const removeFallback = () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      fallbackInstalled = false;
    };

    const installFallback = () => {
      if (fallbackInstalled) return;
      removeFallback();
      fallbackInstalled = true;
      const onUserGesture = () => {
        if (playInitiatedRef.current) return;
        playInitiatedRef.current = true;
        lastPlayAtRef.current = Date.now();
        removeFallback();
        playRef.current().catch(() => {});
      };
      window.addEventListener('pointerdown', onUserGesture, { once: true, capture: true });
      window.addEventListener('keydown', onUserGesture, { once: true, capture: true });
      cleanupRef.current = () => {
        window.removeEventListener('pointerdown', onUserGesture, { capture: true } as EventListenerOptions);
        window.removeEventListener('keydown', onUserGesture, { capture: true } as EventListenerOptions);
      };
    };

    const tryAutoplay = async () => {
      playInitiatedRef.current = true;
      lastPlayAtRef.current = Date.now();
      try {
        await playRef.current();
        if (cancelled) return;
        if (!isPlayingRef.current) {
          playInitiatedRef.current = false;
          installFallback();
        }
      } catch {
        if (cancelled) return;
        playInitiatedRef.current = false;
        installFallback();
      }
    };

    tryAutoplay();

    return () => {
      cancelled = true;
      removeFallback();
    };
  }, [src]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      <button
        onClick={() => {
          if (Date.now() - lastPlayAtRef.current < 500) {
            return;
          }
          if (!playInitiatedRef.current && !isPlayingRef.current) {
            playInitiatedRef.current = true;
            lastPlayAtRef.current = Date.now();
            play().catch(() => {});
          } else {
            togglePlay().catch(() => {});
          }
        }}
        onDragStart={preventDragStart}
        onDrag={preventDragStart}
        disabled={isLoading}
        aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
        aria-pressed={isPlaying}
        style={{
          position: 'relative',
          width: '72px',
          height: '72px',
          border: '0px solid transparent',
          padding: 0,
          background: 'transparent',
          cursor: isLoading ? 'wait' : 'pointer',
          flexShrink: 0,
          outline: 'none',
          boxShadow: 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          touchAction: 'manipulation',
        }}
      >
        <img
          src="/icones/vinil.png"
          alt="Vinil"
          draggable={false}
          onDragStart={preventDragStart}
          onDrag={preventDragStart}
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '0px solid transparent',
            background: 'transparent',
            boxShadow: 'none',
            outline: 'none',
            filter: 'none',
            transformOrigin: 'center',
            animation: isPlaying ? 'vinyl-spin 1.8s linear infinite' : 'none',
            transition: 'opacity 0.2s ease',
            opacity: 1,
            userSelect: 'none',
            WebkitUserSelect: 'none',
            pointerEvents: 'auto',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '18px',
            height: '18px',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #3b1a04, #1a0800)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.6)',
            pointerEvents: 'none',
          }}
        />
      </button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
          maxWidth: '190px',
        }}
      >
        <span
          style={{
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#f1f5f9',
            letterSpacing: '0.06em',
            lineHeight: 1.2,
          }}
        >
          {isPlaying ? 'Tocando' : 'Pausado'}
        </span>
        <span
          style={{
            fontSize: '0.7rem',
            fontFamily: 'ui-monospace, monospace',
            color: '#cbd5e1',
          }}
        >
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
        <div
          style={{
            width: '100%',
            height: '4px',
            borderRadius: '2px',
            background: 'rgba(255,255,255,0.08)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${isLoading || duration === 0 ? 0 : ((currentTime / duration) * 100)}%`,
              background: 'linear-gradient(90deg, #f97316, #fb923c)',
              borderRadius: '2px',
              transition: 'width 0.1s linear',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes vinyl-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        button:focus-visible, button:focus {
          outline: none;
          border: 0px solid transparent;
          boxShadow: none;
        }
        * {
          -webkit-user-drag: none;
          user-drag: none;
        }
      `}</style>
    </div>
  );
}
