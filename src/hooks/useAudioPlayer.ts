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
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.5);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeAudio = useCallback(() => {
    if (isInitialized && audioRef.current?.src === src) return;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }

    audioRef.current = new Audio(src);
    audioRef.current.volume = volume;
    audioRef.current.loop = true;

    audioRef.current.addEventListener('loadedmetadata', () => {
      setDuration(audioRef.current?.duration || 0);
      setIsLoading(false);
    });

    audioRef.current.addEventListener('timeupdate', () => {
      setCurrentTime(audioRef.current?.currentTime || 0);
    });

    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    audioRef.current.addEventListener('play', () => setIsPlaying(true));
    audioRef.current.addEventListener('pause', () => setIsPlaying(false));

    setIsInitialized(true);
  }, [src, volume, isInitialized]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current.load();
        audioRef.current = null;
        setIsInitialized(false);
      }
    };
  }, []);

  const togglePlay = useCallback(async () => {
    initializeAudio();
    
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
    } catch {
      // Silently handle playback errors
    }
  }, [initializeAudio, isPlaying]);

  const play = useCallback(async () => {
    initializeAudio();
    if (audioRef.current && !isPlaying) {
      try {
        await audioRef.current.play();
      } catch {
        // Silently handle playback errors
      }
    }
  }, [initializeAudio, isPlaying]);

  const pause = useCallback(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const setVolume = useCallback((newVolume: number) => {
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
