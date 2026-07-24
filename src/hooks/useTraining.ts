import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import type { ComponentId } from '../data/types';
import { ALL_COMPONENT_IDS } from '../data/types';
import { components } from '../data/components';

const STORAGE_KEY = 'training-visited';

function loadVisited(): Set<ComponentId> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as ComponentId[];
    return new Set(parsed);
  } catch {
    return new Set();
  }
}

function saveVisited(visited: Set<ComponentId>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(visited)));
  } catch {
    // silently fail
  }
}

export interface TrainingState {
  selectedId: ComponentId | null;
  visited: Set<ComponentId>;
  showIntro: boolean;
  showCompletion: boolean;
  progress: number;
  allVisited: boolean;
  trainingMins: number;
  trainingSecs: number;
}

export interface TrainingActions {
  selectComponent: (id: ComponentId) => void;
  closePanel: () => void;
  navigateTo: (id: ComponentId) => void;
  restart: () => void;
  hideIntro: () => void;
  hideCompletion: () => void;
}

export function useTraining(): TrainingState & TrainingActions {
  const [selectedId, setSelectedId] = useState<ComponentId | null>(null);
  const [visited, setVisited] = useState<Set<ComponentId>>(loadVisited);
  const [showIntro, setShowIntro] = useState(true);
  const [showCompletion, setShowCompletion] = useState(false);
  const [trainingTime, setTrainingTime] = useState({ mins: 0, secs: 0 });
  const startTimeRef = useRef<number>(Date.now());

  const progress = useMemo(
    () =>
      Math.round(
        (ALL_COMPONENT_IDS.filter((id) => visited.has(id)).length /
          ALL_COMPONENT_IDS.length) *
          100
      ),
    [visited]
  );

  const allVisited = progress === 100;

  useEffect(() => {
    saveVisited(visited);
  }, [visited]);

  const markVisited = useCallback((id: ComponentId) => {
    setVisited((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const selectComponent = useCallback(
    (id: ComponentId) => {
      setSelectedId(id);
      markVisited(id);
    },
    [markVisited]
  );

  const closePanel = useCallback(() => {
    setSelectedId(null);
  }, []);

  const navigateTo = useCallback(
    (id: ComponentId) => {
      setSelectedId(id);
      markVisited(id);
    },
    [markVisited]
  );

  const restart = useCallback(() => {
    setVisited(new Set());
    setSelectedId(null);
    setShowCompletion(false);
    setShowIntro(true);
    startTimeRef.current = Date.now();
    setTrainingTime({ mins: 0, secs: 0 });
  }, []);

  const hideIntro = useCallback(() => {
    setShowIntro(false);
  }, []);

  const hideCompletion = useCallback(() => {
    setShowCompletion(false);
  }, []);

  // Show completion screen when all components are visited and intro is hidden
  useEffect(() => {
    if (allVisited && !showIntro) {
      const timer = setTimeout(() => {
        const diff = Math.floor((Date.now() - startTimeRef.current) / 1000);
        setTrainingTime({ mins: Math.floor(diff / 60), secs: diff % 60 });
        setShowCompletion(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [allVisited, showIntro]);

  // Keyboard shortcuts for panel navigation and close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showCompletion) {
          hideCompletion();
        } else if (selectedId) {
          closePanel();
        }
        return;
      }

      if (!selectedId) return;

      const currentIndex = components.findIndex((c) => c.id === selectedId);
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        navigateTo(components[currentIndex - 1].id as ComponentId);
      }
      if (e.key === 'ArrowRight' && currentIndex < components.length - 1) {
        navigateTo(components[currentIndex + 1].id as ComponentId);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedId, showCompletion, closePanel, hideCompletion, navigateTo]);

  return {
    // state
    selectedId,
    visited,
    showIntro,
    showCompletion,
    progress,
    allVisited,
    trainingMins: trainingTime.mins,
    trainingSecs: trainingTime.secs,
    // actions
    selectComponent,
    closePanel,
    navigateTo,
    restart,
    hideIntro,
    hideCompletion,
  };
}

