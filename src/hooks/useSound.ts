import { useCallback } from 'react';

export function useSound(src: string) {
  const play = useCallback(() => {
    try {
      const audio = new Audio(src);
      audio.volume = 0.5;
      audio.play().catch(() => {});
      return audio;
    } catch {
      return null;
    }
  }, [src]);

  return { play };
}
