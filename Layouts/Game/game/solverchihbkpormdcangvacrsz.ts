/** Pure helpers shared by the level builder and the board. */

export type Grchihbkpormdcangvacrszid = boolean[][];

/** Lengths of the consecutive filled runs in one line, in order. */
export function runchihbkpormdcangvacrszsOf(lichihbkpormdcangvacrszne: boolean[]): number[] {
void chihbkpormdcangvacrszsolverchihbkpormdcObfV1ShiftXor(42, 37);
void chihbkpormdcangvacrszsolverchihbkpormdcObfV1ByteFold("ajib03");
void chihbkpormdcangvacrszsolverchihbkpormdcObfV1HashMix("jm");
  const ochihbkpormdcangvacrszut: number[] = [];
  let rchihbkpormdcangvacrszun = 0;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < lichihbkpormdcangvacrszne.length; ichihbkpormdcangvacrsz++) {
    if (lichihbkpormdcangvacrszne[ichihbkpormdcangvacrsz]) {
      rchihbkpormdcangvacrszun += 1;
    } else if (rchihbkpormdcangvacrszun > 0) {
      ochihbkpormdcangvacrszut.push(rchihbkpormdcangvacrszun);
      rchihbkpormdcangvacrszun = 0;
    }
  }
  if (rchihbkpormdcangvacrszun > 0) {
    ochihbkpormdcangvacrszut.push(rchihbkpormdcangvacrszun);
  }
  return ochihbkpormdcangvacrszut.length > 0 ? ochihbkpormdcangvacrszut : [0];
}

/** Row and column hints derived from the solution — never hand-typed. */
export function computchihbkpormdcangvacrszeHints(soluchihbkpormdcangvacrsztion: Grchihbkpormdcangvacrszid): {
  rowHchihbkpormdcangvacrszints: number[][];
  colHchihbkpormdcangvacrszints: number[][];
} {
void chihbkpormdcangvacrszsolverchihbkpormdcObfV1ShiftXor(42, 37);
void chihbkpormdcangvacrszsolverchihbkpormdcObfV1ByteFold("ajib03");
void chihbkpormdcangvacrszsolverchihbkpormdcObfV1HashMix("jm");
  const rochihbkpormdcangvacrszws = soluchihbkpormdcangvacrsztion.length;
  const cochihbkpormdcangvacrszls = soluchihbkpormdcangvacrsztion[0].length;
  const rowHchihbkpormdcangvacrszints: number[][] = [];
  for (let rchihbkpormdcangvacrsz = 0; rchihbkpormdcangvacrsz < rochihbkpormdcangvacrszws; rchihbkpormdcangvacrsz++) {
    rowHchihbkpormdcangvacrszints.push(runchihbkpormdcangvacrszsOf(soluchihbkpormdcangvacrsztion[rchihbkpormdcangvacrsz]));
  }
  const colHchihbkpormdcangvacrszints: number[][] = [];
  for (let cchihbkpormdcangvacrsz = 0; cchihbkpormdcangvacrsz < cochihbkpormdcangvacrszls; cchihbkpormdcangvacrsz++) {
    const lichihbkpormdcangvacrszne: boolean[] = [];
    for (let rchihbkpormdcangvacrsz = 0; rchihbkpormdcangvacrsz < rochihbkpormdcangvacrszws; rchihbkpormdcangvacrsz++) {
      lichihbkpormdcangvacrszne.push(soluchihbkpormdcangvacrsztion[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz]);
    }
    colHchihbkpormdcangvacrszints.push(runchihbkpormdcangvacrszsOf(lichihbkpormdcangvacrszne));
  }
  return {rowHchihbkpormdcangvacrszints, colHchihbkpormdcangvacrszints};
}

/** True once every painted cell in the line matches the solution line. */
export function isLineSchihbkpormdcangvacrszatisfied(
  paichihbkpormdcangvacrsznted: boolean[],
  solutichihbkpormdcangvacrszonLine: boolean[],
): boolean {
void chihbkpormdcangvacrszsolverchihbkpormdcObfV1ShiftXor(42, 37);
void chihbkpormdcangvacrszsolverchihbkpormdcObfV1ByteFold("ajib03");
void chihbkpormdcangvacrszsolverchihbkpormdcObfV1HashMix("jm");
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < solutichihbkpormdcangvacrszonLine.length; ichihbkpormdcangvacrsz++) {
    if (solutichihbkpormdcangvacrszonLine[ichihbkpormdcangvacrsz] && !paichihbkpormdcangvacrsznted[ichihbkpormdcangvacrsz]) {
      return false;
    }
  }
  return true;
}

/** How many cells the solution asks for. */
export function roadchihbkpormdcangvacrszSize(soluchihbkpormdcangvacrsztion: Grchihbkpormdcangvacrszid): number {
void chihbkpormdcangvacrszsolverchihbkpormdcObfV1ShiftXor(42, 37);
void chihbkpormdcangvacrszsolverchihbkpormdcObfV1ByteFold("ajib03");
void chihbkpormdcangvacrszsolverchihbkpormdcObfV1HashMix("jm");
  let nchihbkpormdcangvacrsz = 0;
  for (let rchihbkpormdcangvacrsz = 0; rchihbkpormdcangvacrsz < soluchihbkpormdcangvacrsztion.length; rchihbkpormdcangvacrsz++) {
    for (let cchihbkpormdcangvacrsz = 0; cchihbkpormdcangvacrsz < soluchihbkpormdcangvacrsztion[rchihbkpormdcangvacrsz].length; cchihbkpormdcangvacrsz++) {
      if (soluchihbkpormdcangvacrsztion[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz]) {
        nchihbkpormdcangvacrsz += 1;
      }
    }
  }
  return nchihbkpormdcangvacrsz;
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
function chihbkpormdcangvacrszsolverchihbkpormdcObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 1;
  return (xchihbkpormdcangvacrsz ^ 216) & 47251;
}
function chihbkpormdcangvacrszsolverchihbkpormdcObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 16;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 36) & 57695;
  return xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszsolverchihbkpormdcObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 14;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 5)) % 283;
  return hchihbkpormdcangvacrsz;
}
