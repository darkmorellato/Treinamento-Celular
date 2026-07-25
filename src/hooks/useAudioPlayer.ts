import { useState, useEffect, useRef, useCallback } from 'react';

export interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isLoading: boolean;
}

export interface AudioPlayerActions {
  togglePlay: () => Promise<void>;
  play: () => Promise<void>;
  pause: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  formatTime: (seconds: number) => string;
}

export function useAudioPlayer(src: string): AudioPlayerState & AudioPlayerActions {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const srcRef = useRef(src);
  const stateRef = useRef({ isPlaying: false, currentTime: 0, duration: 0, volume: 0.5, isLoading: false });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.5);
  const [isLoading, setIsLoading] = useState(true);
  const initializedRef = useRef(false);

  const updateState = useCallback((patch: Partial<{ isPlaying: boolean; currentTime: number; duration: number; isLoading: boolean }>) => {
    Object.assign(stateRef.current, patch);
    if ('isPlaying' in patch) setIsPlaying(patch.isPlaying as boolean);
    if ('currentTime' in patch) setCurrentTime(patch.currentTime as number);
    if ('duration' in patch) setDuration(patch.duration as number);
    if ('isLoading' in patch) setIsLoading(patch.isLoading as boolean);
  }, []);

  useEffect(() => {
    srcRef.current = src;
  }, [src]);

  const stopCurrent = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      audioRef.current = null;
    }
    initializedRef.current = false;
    stateRef.current.isPlaying = false;
    stateRef.current.duration = 0;
    stateRef.current.currentTime = 0;
    stateRef.current.isLoading = false;
    setIsPlaying(false);
    setDuration(0);
    setCurrentTime(0);
  }, []);

  const initializeAudio = useCallback(async () => {
    if (initializedRef.current && audioRef.current) {
      return;
    }

    stopCurrent();

    const audio = new Audio(srcRef.current);
    audio.volume = stateRef.current.volume;
    audio.loop = true;
    audio.preload = 'auto';

    const onMeta = () => {
      updateState({ duration: audio.duration || 0, isLoading: false });
      console.debug('[audio] loadedmetadata', audio.duration);
    };
    const onCanPlay = () => {
      updateState({ isLoading: false });
      console.debug('[audio] canplay readyState', audio.readyState);
    };
    const onTime = () => updateState({ currentTime: audio.currentTime || 0 });
    const onEnd = () => updateState({ isPlaying: false });
    const onPlay = () => {
      updateState({ isPlaying: true });
      console.debug('[audio] play');
    };
    const onPause = () => {
      updateState({ isPlaying: false });
      console.debug('[audio] pause');
    };
    const onError = (e: Event) => {
      console.debug('[audio] error', e);
      updateState({ isPlaying: false, isLoading: false });
    };

    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('canplay', onCanPlay);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('ended', onEnd);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('error', onError);

    audioRef.current = audio;
    initializedRef.current = true;

    setTimeout(() => {
      updateState({ isLoading: false });
    }, 5000);
  }, [stopCurrent, updateState]);

  useEffect(() => {
    return () => {
      stopCurrent();
    };
  }, [stopCurrent]);

  const togglePlay = useCallback(async () => {
    console.debug('[audio] togglePlay current src', srcRef.current);
    await initializeAudio();
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (!audio.paused) {
        console.debug('[audio] pausing');
        audio.pause();
      } else {
        console.debug('[audio] attempting play');
        await audio.play();
        console.debug('[audio] play resolved');
      }
    } catch (e) {
      console.debug('[audio] play error', e);
    }
  }, [initializeAudio]);

  const play = useCallback(async () => {
    await initializeAudio();
    const audio = audioRef.current;
    if (!audio || !audio.paused) return;
    try {
      await audio.play();
    } catch (e) {
      console.debug('[audio] play error', e);
    }
  }, [initializeAudio]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (audio && !audio.paused) {
      audio.pause();
    }
  }, []);

  const seek = useCallback((time: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = time;
      updateState({ currentTime: time });
    }
  }, [updateState]);

  const setVolume = useCallback((newVolume: number) => {
    stateRef.current.volume = newVolume;
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, []);

  const formatTime = useCallback((seconds: number): string => {
    if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  return {
    isPlaying,
    currentTime,
    duration,
    volume,
    isLoading,
    togglePlay,
    play,
    pause,
    seek,
    setVolume,
    formatTime,
  };
}
