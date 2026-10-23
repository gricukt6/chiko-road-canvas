// autosetup-split-begin
import { chihbkpormdcangvacrszGameMixSeed, chihbkpormdcangvacrszGameFoldRange, chihbkpormdcangvacrszGameClampSpan } from './scoringchihbkpormdcangvacrszPart01';
// autosetup-split-end

export type Outchihbkpormdcangvacrszcome = 'win' | 'lose';

export type RoundchihbkpormdcangvacrszResult = {
  outcome: Outchihbkpormdcangvacrszcome;
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
export function starchihbkpormdcangvacrszsFor(
  outchihbkpormdcangvacrszcome: Outchihbkpormdcangvacrszcome,
  movechihbkpormdcangvacrszsLeft: number,
  moveBchihbkpormdcangvacrszudget: number,
  mistchihbkpormdcangvacrszakes: number,
): number {
void chihbkpormdcangvacrszscoringchihbkpormdObfV1ShiftXor(17, 80);
void chihbkpormdcangvacrszscoringchihbkpormdObfV1ByteFold("dopi");
  if (outchihbkpormdcangvacrszcome === 'lose') {
    return 0;
  }
  if (mistchihbkpormdcangvacrszakes === 0 && movechihbkpormdcangvacrszsLeft >= moveBchihbkpormdcangvacrszudget * 0.25) {
    return 3;
  }
  if (movechihbkpormdcangvacrszsLeft > 0 && mistchihbkpormdcangvacrszakes <= 1) {
    return 2;
  }
  return 1;
}

/** Share of taps that landed on the road, as a whole percentage. */
export function accurchihbkpormdcangvacrszacyFor(movechihbkpormdcangvacrszsUsed: number, mistchihbkpormdcangvacrszakes: number): number {
void chihbkpormdcangvacrszscoringchihbkpormdObfV1ShiftXor(17, 80);
void chihbkpormdcangvacrszscoringchihbkpormdObfV1ByteFold("dopi");
  if (movechihbkpormdcangvacrszsUsed <= 0) {
    return 0;
  }
  const gochihbkpormdcangvacrszod = Math.max(0, movechihbkpormdcangvacrszsUsed - mistchihbkpormdcangvacrszakes);
  return Math.round((gochihbkpormdcangvacrszod / movechihbkpormdcangvacrszsUsed) * 100);
}

export const EMPTY_chihbkpormdcangvacrszRESULT: RoundchihbkpormdcangvacrszResult = {
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

/* autosetup-game-stamp:v1 */
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszscoringchihbkpormdObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 4;
  return (xchihbkpormdcangvacrsz ^ 211) & 25259;
}
function chihbkpormdcangvacrszscoringchihbkpormdObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 14;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 6) & 43936;
  return xchihbkpormdcangvacrsz;
}
