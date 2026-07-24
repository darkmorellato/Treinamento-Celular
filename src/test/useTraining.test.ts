import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useTraining } from '../hooks/useTraining';
import { ALL_COMPONENT_IDS } from '../data/types';

describe('useTraining', () => {
  it('starts with intro shown and zero progress', () => {
    const { result } = renderHook(() => useTraining());

    expect(result.current.showIntro).toBe(true);
    expect(result.current.showCompletion).toBe(false);
    expect(result.current.progress).toBe(0);
    expect(result.current.selectedId).toBeNull();
    expect(result.current.visited.size).toBe(0);
  });

  it('marks component as visited and increases progress', () => {
    const { result } = renderHook(() => useTraining());

    act(() => {
      result.current.selectComponent(ALL_COMPONENT_IDS[0]);
    });

    expect(result.current.visited.has(ALL_COMPONENT_IDS[0])).toBe(true);
    expect(result.current.progress).toBeGreaterThan(0);
  });

  it('does not decrease progress when selecting same component', () => {
    const { result } = renderHook(() => useTraining());
    const id = ALL_COMPONENT_IDS[0];

    act(() => {
      result.current.selectComponent(id);
    });
    const progressAfterFirst = result.current.progress;

    act(() => {
      result.current.selectComponent(id);
    });

    expect(result.current.progress).toBe(progressAfterFirst);
  });

  it('closes panel without changing visited set', () => {
    const { result } = renderHook(() => useTraining());
    const initialSize = result.current.visited.size;

    act(() => {
      result.current.closePanel();
    });

    expect(result.current.selectedId).toBeNull();
    expect(result.current.visited.size).toBe(initialSize);
  });

  it('restarts training state', () => {
    const { result } = renderHook(() => useTraining());

    act(() => {
      result.current.hideIntro();
      result.current.selectComponent(ALL_COMPONENT_IDS[0]);
      result.current.selectComponent(ALL_COMPONENT_IDS[1]);
    });

    act(() => {
      result.current.restart();
    });

    expect(result.current.visited.size).toBe(0);
    expect(result.current.showIntro).toBe(true);
    expect(result.current.showCompletion).toBe(false);
    expect(result.current.selectedId).toBeNull();
  });
});
