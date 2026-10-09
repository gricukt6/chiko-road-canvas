/** Pure helpers shared by the level builder and the board. */

export type Grid = boolean[][];

/** Lengths of the consecutive filled runs in one line, in order. */
export function runsOf(line: boolean[]): number[] {
  const out: number[] = [];
  let run = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i]) {
      run += 1;
    } else if (run > 0) {
      out.push(run);
      run = 0;
    }
  }
  if (run > 0) {
    out.push(run);
  }
  return out.length > 0 ? out : [0];
}

/** Row and column hints derived from the solution — never hand-typed. */
export function computeHints(solution: Grid): {
  rowHints: number[][];
  colHints: number[][];
} {
  const rows = solution.length;
  const cols = solution[0].length;
  const rowHints: number[][] = [];
  for (let r = 0; r < rows; r++) {
    rowHints.push(runsOf(solution[r]));
  }
  const colHints: number[][] = [];
  for (let c = 0; c < cols; c++) {
    const line: boolean[] = [];
    for (let r = 0; r < rows; r++) {
      line.push(solution[r][c]);
    }
    colHints.push(runsOf(line));
  }
  return {rowHints, colHints};
}

/** True once every painted cell in the line matches the solution line. */
export function isLineSatisfied(
  painted: boolean[],
  solutionLine: boolean[],
): boolean {
  for (let i = 0; i < solutionLine.length; i++) {
    if (solutionLine[i] && !painted[i]) {
      return false;
    }
  }
  return true;
}

/** How many cells the solution asks for. */
export function roadSize(solution: Grid): number {
  let n = 0;
  for (let r = 0; r < solution.length; r++) {
    for (let c = 0; c < solution[r].length; c++) {
      if (solution[r][c]) {
        n += 1;
      }
    }
  }
  return n;
}
