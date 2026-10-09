import {makeRng} from './rng';
import {computeHints, roadSize} from './solver';
import type {Grid} from './solver';
import {TOTAL_LEVELS} from '../constants/config';

export type Cell = {r: number; c: number};

export type Level = {
  id: number;
  rows: number;
  cols: number;
  solution: Grid;
  nests: Cell[];
  rowHints: number[][];
  colHints: number[][];
  moveBudget: number;
  roadLength: number;
  difficulty: string;
  sizeLabel: string;
};

type Spec = {rows: number; cols: number; nests: number; slack: number; difficulty: string};

function specFor(id: number): Spec {
  if (id <= 4) {
    return {rows: 5, cols: 5, nests: 2, slack: 0.6, difficulty: 'EASY'};
  }
  if (id <= 9) {
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
function buildPath(rows: number, cols: number, rng: () => number): Cell[] {
  const cells: Cell[] = [];
  let r = 0;
  let c = 0;
  let dir = 1;
  cells.push({r, c});

  while (r < rows - 1) {
    const reach = dir === 1 ? cols - 1 - c : c;
    const steps = reach === 0 ? 0 : 1 + Math.floor(rng() * reach);
    for (let i = 0; i < steps; i++) {
      c += dir;
      cells.push({r, c});
    }
    const drop = Math.min(2, rows - 1 - r);
    const down = drop === 0 ? 0 : 1 + Math.floor(rng() * drop);
    for (let i = 0; i < down; i++) {
      r += 1;
      cells.push({r, c});
    }
    dir = -dir;
  }

  const target = dir === 1 ? cols - 1 : 0;
  while (c !== target) {
    c += dir;
    cells.push({r, c});
  }
  return cells;
}

function buildLevel(id: number): Level {
  const spec = specFor(id);
  const rng = makeRng(0x9e3779b1 + id * 0x45d9f3b);
  const path = buildPath(spec.rows, spec.cols, rng);

  const solution: Grid = [];
  for (let r = 0; r < spec.rows; r++) {
    const row: boolean[] = [];
    for (let c = 0; c < spec.cols; c++) {
      row.push(false);
    }
    solution.push(row);
  }
  for (let i = 0; i < path.length; i++) {
    solution[path[i].r][path[i].c] = true;
  }

  // Nests sit ON the road: the first cell, the last cell and evenly spaced
  // waypoints between them, so "link every nest" is exactly "finish the road".
  const nests: Cell[] = [path[0]];
  const inner = spec.nests - 2;
  for (let k = 1; k <= inner; k++) {
    const idx = Math.floor((path.length * k) / (inner + 1));
    const pick = path[Math.min(path.length - 2, Math.max(1, idx))];
    const clash = nests.some(n => n.r === pick.r && n.c === pick.c);
    if (!clash) {
      nests.push(pick);
    }
  }
  nests.push(path[path.length - 1]);

  const {rowHints, colHints} = computeHints(solution);
  const road = roadSize(solution);
  const empty = spec.rows * spec.cols - road;
  const moveBudget = Math.ceil(road - nests.length + empty * spec.slack);

  return {
    id,
    rows: spec.rows,
    cols: spec.cols,
    solution,
    nests,
    rowHints,
    colHints,
    moveBudget,
    roadLength: road,
    difficulty: spec.difficulty,
    sizeLabel: spec.rows + 'x' + spec.cols,
  };
}

let cache: Level[] | null = null;

/** Built on first use, never at module load — keeps the launch path free. */
export function allLevels(): Level[] {
  if (cache === null) {
    const built: Level[] = [];
    for (let id = 1; id <= TOTAL_LEVELS; id++) {
      built.push(buildLevel(id));
    }
    cache = built;
  }
  return cache;
}

export function levelAt(id: number): Level {
  const list = allLevels();
  const idx = Math.max(0, Math.min(list.length - 1, id - 1));
  return list[idx];
}
