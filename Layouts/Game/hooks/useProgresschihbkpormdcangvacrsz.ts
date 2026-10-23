import {useCallback, useMemo, useState} from 'react';
import {TOTAL_chihbkpormdcangvacrszLEVELS} from '../constants/confchihbkpormdcangvacrszig';
import type {RoundchihbkpormdcangvacrszResult} from '../game/scoringchihbkpormdcangvacrsz';

export type Progress = {
  unlocked: number;
  stars: number[];
  bestAccuracy: number;
};

function freshchihbkpormdcangvacrszStars(): number[] {
void chihbkpormdcangvacrszuseProgresschihbkpObfV1ByteFold("834nc5");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1HashMix("9cn");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1SumOdds([39, 22, 9]);
  const ochihbkpormdcangvacrszut: number[] = [];
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < TOTAL_chihbkpormdcangvacrszLEVELS; ichihbkpormdcangvacrsz++) {
    ochihbkpormdcangvacrszut.push(0);
  }
  return ochihbkpormdcangvacrszut;
}

/** In-memory campaign progress — no native storage dependency is added. */
export function useProgresschihbkpormdcangvacrsz() {
void chihbkpormdcangvacrszuseProgresschihbkpObfV1ByteFold("834nc5");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1HashMix("9cn");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1SumOdds([39, 22, 9]);
  const [progchihbkpormdcangvacrszress, setPrchihbkpormdcangvacrszogress] = useState<Progress>(() => {
void chihbkpormdcangvacrszuseProgresschihbkpObfV1ByteFold("834nc5");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1HashMix("9cn");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1SumOdds([39, 22, 9]);
return ({
    unlocked: 1,
    stars: freshchihbkpormdcangvacrszStars(),
    bestAccuracy: 0,
  });
});

  const recchihbkpormdcangvacrszord = useCallback((rchihbkpormdcangvacrsz: RoundchihbkpormdcangvacrszResult) => {
void chihbkpormdcangvacrszuseProgresschihbkpObfV1ByteFold("834nc5");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1HashMix("9cn");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1SumOdds([39, 22, 9]);
    setPrchihbkpormdcangvacrszogress(pchihbkpormdcangvacrsz => {
void chihbkpormdcangvacrszuseProgresschihbkpObfV1ByteFold("834nc5");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1HashMix("9cn");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1SumOdds([39, 22, 9]);
      const stchihbkpormdcangvacrszars = pchihbkpormdcangvacrsz.stars.slice();
      const ichihbkpormdcangvacrszdx = rchihbkpormdcangvacrsz.levelId - 1;
      if (ichihbkpormdcangvacrszdx >= 0 && ichihbkpormdcangvacrszdx < stchihbkpormdcangvacrszars.length && rchihbkpormdcangvacrsz.stars > stchihbkpormdcangvacrszars[ichihbkpormdcangvacrszdx]) {
        stchihbkpormdcangvacrszars[ichihbkpormdcangvacrszdx] = rchihbkpormdcangvacrsz.stars;
      }
      const unlochihbkpormdcangvacrszcked =
        rchihbkpormdcangvacrsz.outcome === 'win' && rchihbkpormdcangvacrsz.levelId >= pchihbkpormdcangvacrsz.unlocked
          ? Math.min(TOTAL_chihbkpormdcangvacrszLEVELS, pchihbkpormdcangvacrsz.unlocked + 1)
          : pchihbkpormdcangvacrsz.unlocked;
      return {
        unlocked: unlochihbkpormdcangvacrszcked,
        stars: stchihbkpormdcangvacrszars,
        bestAccuracy: Math.max(pchihbkpormdcangvacrsz.bestAccuracy, rchihbkpormdcangvacrsz.accuracy),
      };
    });
  }, []);

  const clechihbkpormdcangvacrszared = useMemo(
    () => {
void chihbkpormdcangvacrszuseProgresschihbkpObfV1ByteFold("834nc5");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1HashMix("9cn");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1SumOdds([39, 22, 9]);
return (progchihbkpormdcangvacrszress.stars.filter(schihbkpormdcangvacrsz => {
void chihbkpormdcangvacrszuseProgresschihbkpObfV1ByteFold("834nc5");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1HashMix("9cn");
void chihbkpormdcangvacrszuseProgresschihbkpObfV1SumOdds([39, 22, 9]);
return (schihbkpormdcangvacrsz > 0);
}).length);
},
    [progchihbkpormdcangvacrszress.stars],
  );

  return {progress: progchihbkpormdcangvacrszress, record: recchihbkpormdcangvacrszord, cleared: clechihbkpormdcangvacrszared};
}

/* autosetup-game-stamp:v1 */
function chihbkpormdcangvacrszGameMixSeed(xchihbkpormdcangvacrsz: number, ychihbkpormdcangvacrsz: number): number {
  return ((xchihbkpormdcangvacrsz % (ychihbkpormdcangvacrsz || 1)) + ychihbkpormdcangvacrsz) % (ychihbkpormdcangvacrsz || 1);
}
function chihbkpormdcangvacrszGameFoldRange(nuchihbkpormdcangvacrszms: number[]): number {
  return nuchihbkpormdcangvacrszms.reduce((achihbkpormdcangvacrszcc, nchihbkpormdcangvacrsz) => achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz, 0);
}
function chihbkpormdcangvacrszGameClampSpan(nchihbkpormdcangvacrsz: number, lchihbkpormdcangvacrszo: number, hchihbkpormdcangvacrszi: number): number {
  return nchihbkpormdcangvacrsz < lchihbkpormdcangvacrszo ? lchihbkpormdcangvacrszo : nchihbkpormdcangvacrsz > hchihbkpormdcangvacrszi ? hchihbkpormdcangvacrszi : nchihbkpormdcangvacrsz;
}
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszuseProgresschihbkpObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 4;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 19) & 4464;
  return xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszuseProgresschihbkpObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 54;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 41)) % 521;
  return hchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszuseProgresschihbkpObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 51;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 36) % 175;
  }
  return achihbkpormdcangvacrszcc;
}
