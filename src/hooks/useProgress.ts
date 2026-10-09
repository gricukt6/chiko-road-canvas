import {useCallback, useMemo, useState} from 'react';
import {TOTAL_LEVELS} from '../constants/config';
import type {RoundResult} from '../game/scoring';

export type Progress = {
  unlocked: number;
  stars: number[];
  bestAccuracy: number;
};

function freshStars(): number[] {
  const out: number[] = [];
  for (let i = 0; i < TOTAL_LEVELS; i++) {
    out.push(0);
  }
  return out;
}

/** In-memory campaign progress — no native storage dependency is added. */
export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => ({
    unlocked: 1,
    stars: freshStars(),
    bestAccuracy: 0,
  }));

  const record = useCallback((r: RoundResult) => {
    setProgress(p => {
      const stars = p.stars.slice();
      const idx = r.levelId - 1;
      if (idx >= 0 && idx < stars.length && r.stars > stars[idx]) {
        stars[idx] = r.stars;
      }
      const unlocked =
        r.outcome === 'win' && r.levelId >= p.unlocked
          ? Math.min(TOTAL_LEVELS, p.unlocked + 1)
          : p.unlocked;
      return {
        unlocked,
        stars,
        bestAccuracy: Math.max(p.bestAccuracy, r.accuracy),
      };
    });
  }, []);

  const cleared = useMemo(
    () => progress.stars.filter(s => s > 0).length,
    [progress.stars],
  );

  return {progress, record, cleared};
}
