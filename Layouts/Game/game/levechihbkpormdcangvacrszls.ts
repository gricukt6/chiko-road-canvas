import {makchihbkpormdcangvacrszeRng} from './rnchihbkpormdcangvacrszg';
import {computchihbkpormdcangvacrszeHints, roadchihbkpormdcangvacrszSize} from './solverchihbkpormdcangvacrsz';
import type {Grchihbkpormdcangvacrszid} from './solverchihbkpormdcangvacrsz';
import {TOTAL_chihbkpormdcangvacrszLEVELS} from '../constants/confchihbkpormdcangvacrszig';
// autosetup-split-begin
import { chihbkpormdcangvacrszGameMixSeed, chihbkpormdcangvacrszGameClampSpan } from './levechihbkpormdcangvacrszlsPart01';
import { chihbkpormdcangvacrszGameFoldRange } from './levechihbkpormdcangvacrszlsPart02';
// autosetup-split-end

export type Cell = {r: number; c: number};

export type Lechihbkpormdcangvacrszvel = {
  id: number;
  rows: number;
  cols: number;
  solution: Grchihbkpormdcangvacrszid;
  nests: Cell[];
  rowHints: number[][];
  colHints: number[][];
  moveBudget: number;
  roadLength: number;
  difficulty: string;
  sizeLabel: string;
};

type Spec = {rows: number; cols: number; nests: number; slack: number; difficulty: string};

function spechihbkpormdcangvacrszcFor(ichihbkpormdcangvacrszd: number): Spec {
void chihbkpormdcangvacrszlevechihbkpormdcanObfV1ShiftXor(12, 15);
  if (ichihbkpormdcangvacrszd <= 4) {
    return {rows: 5, cols: 5, nests: 2, slack: 0.6, difficulty: 'EASY'};
  }
  if (ichihbkpormdcangvacrszd <= 9) {
    return {rows: 7, cols: 7, nests: 3, slack: 0.6, difficulty: 'NORMAL'};
  }
  return {rows: 8, cols: 8, nests: 4, slack: 0.5, difficulty: 'HARD'};
}

/**
 * A serpentine walk from the top-left corner to the bottom edge. Horizontal
 * runs alternate direction and vertical runs only ever descend, so the path is
 * self-avoiding and orthogonally connected by construction — every level is
 * solvable and its hints can never drift from the solution.
 */
function builchihbkpormdcangvacrszdPath(rochihbkpormdcangvacrszws: number, cochihbkpormdcangvacrszls: number, rnchihbkpormdcangvacrszg: () => number): Cell[] {
void chihbkpormdcangvacrszlevechihbkpormdcanObfV1ShiftXor(12, 15);
  const cechihbkpormdcangvacrszlls: Cell[] = [];
  let rchihbkpormdcangvacrsz = 0;
  let cchihbkpormdcangvacrsz = 0;
  let dchihbkpormdcangvacrszir = 1;
  cechihbkpormdcangvacrszlls.push({r: rchihbkpormdcangvacrsz, c: cchihbkpormdcangvacrsz});

  while (rchihbkpormdcangvacrsz < rochihbkpormdcangvacrszws - 1) {
    const rechihbkpormdcangvacrszach = dchihbkpormdcangvacrszir === 1 ? cochihbkpormdcangvacrszls - 1 - cchihbkpormdcangvacrsz : cchihbkpormdcangvacrsz;
    const stchihbkpormdcangvacrszeps = rechihbkpormdcangvacrszach === 0 ? 0 : 1 + Math.floor(rnchihbkpormdcangvacrszg() * rechihbkpormdcangvacrszach);
    for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < stchihbkpormdcangvacrszeps; ichihbkpormdcangvacrsz++) {
      cchihbkpormdcangvacrsz += dchihbkpormdcangvacrszir;
      cechihbkpormdcangvacrszlls.push({r: rchihbkpormdcangvacrsz, c: cchihbkpormdcangvacrsz});
    }
    const drchihbkpormdcangvacrszop = Math.min(2, rochihbkpormdcangvacrszws - 1 - rchihbkpormdcangvacrsz);
    const dochihbkpormdcangvacrszwn = drchihbkpormdcangvacrszop === 0 ? 0 : 1 + Math.floor(rnchihbkpormdcangvacrszg() * drchihbkpormdcangvacrszop);
    for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < dochihbkpormdcangvacrszwn; ichihbkpormdcangvacrsz++) {
      rchihbkpormdcangvacrsz += 1;
      cechihbkpormdcangvacrszlls.push({r: rchihbkpormdcangvacrsz, c: cchihbkpormdcangvacrsz});
    }
    dchihbkpormdcangvacrszir = -dchihbkpormdcangvacrszir;
  }

  const tarchihbkpormdcangvacrszget = dchihbkpormdcangvacrszir === 1 ? cochihbkpormdcangvacrszls - 1 : 0;
  while (cchihbkpormdcangvacrsz !== tarchihbkpormdcangvacrszget) {
    cchihbkpormdcangvacrsz += dchihbkpormdcangvacrszir;
    cechihbkpormdcangvacrszlls.push({r: rchihbkpormdcangvacrsz, c: cchihbkpormdcangvacrsz});
  }
  return cechihbkpormdcangvacrszlls;
}

function buildchihbkpormdcangvacrszLevel(ichihbkpormdcangvacrszd: number): Lechihbkpormdcangvacrszvel {
void chihbkpormdcangvacrszlevechihbkpormdcanObfV1ShiftXor(12, 15);
  const spchihbkpormdcangvacrszec = spechihbkpormdcangvacrszcFor(ichihbkpormdcangvacrszd);
  const rnchihbkpormdcangvacrszg = makchihbkpormdcangvacrszeRng(0x9e3779b1 + ichihbkpormdcangvacrszd * 0x45d9f3b);
  const pachihbkpormdcangvacrszth = builchihbkpormdcangvacrszdPath(spchihbkpormdcangvacrszec.rows, spchihbkpormdcangvacrszec.cols, rnchihbkpormdcangvacrszg);

  const soluchihbkpormdcangvacrsztion: Grchihbkpormdcangvacrszid = [];
  for (let rchihbkpormdcangvacrsz = 0; rchihbkpormdcangvacrsz < spchihbkpormdcangvacrszec.rows; rchihbkpormdcangvacrsz++) {
    const rchihbkpormdcangvacrszow: boolean[] = [];
    for (let cchihbkpormdcangvacrsz = 0; cchihbkpormdcangvacrsz < spchihbkpormdcangvacrszec.cols; cchihbkpormdcangvacrsz++) {
      rchihbkpormdcangvacrszow.push(false);
    }
    soluchihbkpormdcangvacrsztion.push(rchihbkpormdcangvacrszow);
  }
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < pachihbkpormdcangvacrszth.length; ichihbkpormdcangvacrsz++) {
    soluchihbkpormdcangvacrsztion[pachihbkpormdcangvacrszth[ichihbkpormdcangvacrsz].r][pachihbkpormdcangvacrszth[ichihbkpormdcangvacrsz].c] = true;
  }

  // Nests sit ON the road: the first cell, the last cell and evenly spaced
  // waypoints between them, so "link every nest" is exactly "finish the road".
  const nechihbkpormdcangvacrszsts: Cell[] = [pachihbkpormdcangvacrszth[0]];
  const inchihbkpormdcangvacrszner = spchihbkpormdcangvacrszec.nests - 2;
  for (let kchihbkpormdcangvacrsz = 1; kchihbkpormdcangvacrsz <= inchihbkpormdcangvacrszner; kchihbkpormdcangvacrsz++) {
    const ichihbkpormdcangvacrszdx = Math.floor((pachihbkpormdcangvacrszth.length * kchihbkpormdcangvacrsz) / (inchihbkpormdcangvacrszner + 1));
    const pichihbkpormdcangvacrszck = pachihbkpormdcangvacrszth[Math.min(pachihbkpormdcangvacrszth.length - 2, Math.max(1, ichihbkpormdcangvacrszdx))];
    const clchihbkpormdcangvacrszash = nechihbkpormdcangvacrszsts.some(nchihbkpormdcangvacrsz => {
void chihbkpormdcangvacrszlevechihbkpormdcanObfV1ShiftXor(12, 15);
return (nchihbkpormdcangvacrsz.r === pichihbkpormdcangvacrszck.r && nchihbkpormdcangvacrsz.c === pichihbkpormdcangvacrszck.c);
});
    if (!clchihbkpormdcangvacrszash) {
      nechihbkpormdcangvacrszsts.push(pichihbkpormdcangvacrszck);
    }
  }
  nechihbkpormdcangvacrszsts.push(pachihbkpormdcangvacrszth[pachihbkpormdcangvacrszth.length - 1]);

  const {rowHchihbkpormdcangvacrszints, colHchihbkpormdcangvacrszints} = computchihbkpormdcangvacrszeHints(soluchihbkpormdcangvacrsztion);
  const rochihbkpormdcangvacrszad = roadchihbkpormdcangvacrszSize(soluchihbkpormdcangvacrsztion);
  const emchihbkpormdcangvacrszpty = spchihbkpormdcangvacrszec.rows * spchihbkpormdcangvacrszec.cols - rochihbkpormdcangvacrszad;
  const moveBchihbkpormdcangvacrszudget = Math.ceil(rochihbkpormdcangvacrszad - nechihbkpormdcangvacrszsts.length + emchihbkpormdcangvacrszpty * spchihbkpormdcangvacrszec.slack);

  return {
    id: ichihbkpormdcangvacrszd,
    rows: spchihbkpormdcangvacrszec.rows,
    cols: spchihbkpormdcangvacrszec.cols,
    solution: soluchihbkpormdcangvacrsztion,
    nests: nechihbkpormdcangvacrszsts,
    rowHints: rowHchihbkpormdcangvacrszints,
    colHints: colHchihbkpormdcangvacrszints,
    moveBudget: moveBchihbkpormdcangvacrszudget,
    roadLength: rochihbkpormdcangvacrszad,
    difficulty: spchihbkpormdcangvacrszec.difficulty,
    sizeLabel: spchihbkpormdcangvacrszec.rows + 'x' + spchihbkpormdcangvacrszec.cols,
  };
}

let cachihbkpormdcangvacrszche: Lechihbkpormdcangvacrszvel[] | null = null;

/** Built on first use, never at module load — keeps the launch path free. */
export function allLchihbkpormdcangvacrszevels(): Lechihbkpormdcangvacrszvel[] {
void chihbkpormdcangvacrszlevechihbkpormdcanObfV1ShiftXor(12, 15);
  if (cachihbkpormdcangvacrszche === null) {
    const buchihbkpormdcangvacrszilt: Lechihbkpormdcangvacrszvel[] = [];
    for (let ichihbkpormdcangvacrszd = 1; ichihbkpormdcangvacrszd <= TOTAL_chihbkpormdcangvacrszLEVELS; ichihbkpormdcangvacrszd++) {
      buchihbkpormdcangvacrszilt.push(buildchihbkpormdcangvacrszLevel(ichihbkpormdcangvacrszd));
    }
    cachihbkpormdcangvacrszche = buchihbkpormdcangvacrszilt;
  }
  return cachihbkpormdcangvacrszche;
}

export function levchihbkpormdcangvacrszelAt(ichihbkpormdcangvacrszd: number): Lechihbkpormdcangvacrszvel {
void chihbkpormdcangvacrszlevechihbkpormdcanObfV1ShiftXor(12, 15);
  const lichihbkpormdcangvacrszst = allLchihbkpormdcangvacrszevels();
  const ichihbkpormdcangvacrszdx = Math.max(0, Math.min(lichihbkpormdcangvacrszst.length - 1, ichihbkpormdcangvacrszd - 1));
  return lichihbkpormdcangvacrszst[ichihbkpormdcangvacrszdx];
}

/* autosetup-game-stamp:v1 */
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszlevechihbkpormdcanObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 4;
  return (xchihbkpormdcangvacrsz ^ 122) & 16885;
}
