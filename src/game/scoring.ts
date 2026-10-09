export type Outcome = 'win' | 'lose';

export type RoundResult = {
  outcome: Outcome;
  levelId: number;
  stars: number;
  movesUsed: number;
  moveBudget: number;
  mistakes: number;
  accuracy: number;
  painted: number;
  roadLength: number;
  difficulty: string;
};

/** 3 stars: a quarter of the budget left and a clean sheet. */
export function starsFor(
  outcome: Outcome,
  movesLeft: number,
  moveBudget: number,
  mistakes: number,
): number {
  if (outcome === 'lose') {
    return 0;
  }
  if (mistakes === 0 && movesLeft >= moveBudget * 0.25) {
    return 3;
  }
  if (movesLeft > 0 && mistakes <= 1) {
    return 2;
  }
  return 1;
}

/** Share of taps that landed on the road, as a whole percentage. */
export function accuracyFor(movesUsed: number, mistakes: number): number {
  if (movesUsed <= 0) {
    return 0;
  }
  const good = Math.max(0, movesUsed - mistakes);
  return Math.round((good / movesUsed) * 100);
}

export const EMPTY_RESULT: RoundResult = {
  outcome: 'lose',
  levelId: 1,
  stars: 0,
  movesUsed: 0,
  moveBudget: 0,
  mistakes: 0,
  accuracy: 0,
  painted: 0,
  roadLength: 0,
  difficulty: 'EASY',
};
