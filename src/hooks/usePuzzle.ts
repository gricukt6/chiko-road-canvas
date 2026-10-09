import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import type {TileState} from '../components/PuzzleTile';
import type {PaintMode} from '../components/ModeToggle';
import type {Level} from '../game/levels';
import {accuracyFor, starsFor} from '../game/scoring';
import type {Outcome, RoundResult} from '../game/scoring';
import {
  HINT_COST,
  IDLE_BACKSTOP_MS,
  MAX_MISTAKES,
  RESOLVE_DELAY_MS,
  ROUND_BACKSTOP_MS,
  TILE_FEEDBACK_MS,
} from '../constants/config';

type Snapshot = {
  cells: TileState[][];
  movesLeft: number;
  mistakes: number;
  painted: number;
  resolving: boolean;
};

function initial(level: Level): Snapshot {
  const cells: TileState[][] = [];
  for (let r = 0; r < level.rows; r++) {
    const row: TileState[] = [];
    for (let c = 0; c < level.cols; c++) {
      row.push('empty');
    }
    cells.push(row);
  }
  for (let i = 0; i < level.nests.length; i++) {
    const n = level.nests[i];
    cells[n.r][n.c] = 'nest';
  }
  return {
    cells,
    movesLeft: level.moveBudget,
    mistakes: 0,
    painted: level.nests.length,
    resolving: false,
  };
}

function cloneCells(cells: TileState[][]): TileState[][] {
  return cells.map(row => row.slice());
}

/**
 * Board state for one round. Every value a timer or callback reads lives in a
 * ref, so no handler ever closes over a stale snapshot.
 */
export function usePuzzle(level: Level, onGameOver: (r: RoundResult) => void) {
  const [snap, setSnap] = useState<Snapshot>(() => initial(level));
  const [mode, setMode] = useState<PaintMode>('paint');

  const snapRef = useRef(snap);
  snapRef.current = snap;
  const modeRef = useRef(mode);
  modeRef.current = mode;
  const doneRef = useRef(false);
  const overRef = useRef(onGameOver);
  overRef.current = onGameOver;

  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const capTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resolveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const settleTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const finish = useCallback(
    (outcome: Outcome) => {
      if (doneRef.current) {
        return;
      }
      doneRef.current = true;
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
      if (capTimer.current) {
        clearTimeout(capTimer.current);
      }
      const s = snapRef.current;
      const movesUsed = level.moveBudget - s.movesLeft;
      const result: RoundResult = {
        outcome,
        levelId: level.id,
        stars: starsFor(outcome, s.movesLeft, level.moveBudget, s.mistakes),
        movesUsed,
        moveBudget: level.moveBudget,
        mistakes: s.mistakes,
        accuracy: accuracyFor(movesUsed, s.mistakes),
        painted: s.painted,
        roadLength: level.roadLength,
        difficulty: level.difficulty,
      };
      setSnap(p => ({...p, resolving: true}));
      resolveTimer.current = setTimeout(() => {
        overRef.current(result);
      }, RESOLVE_DELAY_MS);
    },
    [level],
  );

  const armIdle = useCallback(() => {
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
    }
    idleTimer.current = setTimeout(() => finish('lose'), IDLE_BACKSTOP_MS);
  }, [finish]);

  useEffect(() => {
    const timers = settleTimers;
    armIdle();
    capTimer.current = setTimeout(() => finish('lose'), ROUND_BACKSTOP_MS);
    return () => {
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
      if (capTimer.current) {
        clearTimeout(capTimer.current);
      }
      if (resolveTimer.current) {
        clearTimeout(resolveTimer.current);
      }
      timers.current.forEach(t => clearTimeout(t));
      timers.current = [];
    };
  }, [armIdle, finish]);

  const settleWrong = useCallback((r: number, c: number) => {
    const t = setTimeout(() => {
      setSnap(p => {
        if (p.cells[r][c] !== 'wrong') {
          return p;
        }
        const cells = cloneCells(p.cells);
        cells[r][c] = 'marked';
        return {...p, cells};
      });
    }, TILE_FEEDBACK_MS + 260);
    settleTimers.current.push(t);
  }, []);

  const onCellPress = useCallback(
    (r: number, c: number) => {
      if (doneRef.current || snapRef.current.resolving) {
        return;
      }
      const cur = snapRef.current.cells[r][c];
      if (cur === 'nest' || cur === 'road' || cur === 'wrong') {
        return;
      }
      armIdle();

      const isRoad = level.solution[r][c];
      const marking = modeRef.current === 'mark';
      if (marking && cur === 'marked') {
        // Re-marking an already flagged tile changes nothing — don't bill a move.
        return;
      }
      const base = snapRef.current;
      const cells = cloneCells(base.cells);
      let mistakes = base.mistakes;
      let painted = base.painted;

      if (marking) {
        cells[r][c] = 'marked';
      } else if (isRoad) {
        cells[r][c] = 'road';
        painted += 1;
      } else {
        cells[r][c] = 'wrong';
        mistakes += 1;
      }

      const next: Snapshot = {
        ...base,
        cells,
        mistakes,
        painted,
        movesLeft: Math.max(0, base.movesLeft - 1),
      };
      snapRef.current = next;
      setSnap(next);

      if (!marking && !isRoad) {
        settleWrong(r, c);
      }

      if (painted >= level.roadLength) {
        finish('win');
      } else if (mistakes >= MAX_MISTAKES || next.movesLeft <= 0) {
        finish('lose');
      }
    },
    [armIdle, finish, level, settleWrong],
  );

  const useHint = useCallback(() => {
    if (doneRef.current || snapRef.current.resolving) {
      return;
    }
    const base = snapRef.current;
    if (base.movesLeft < HINT_COST) {
      return;
    }
    armIdle();

    let target: {r: number; c: number} | null = null;
    for (let r = 0; r < level.rows && target === null; r++) {
      for (let c = 0; c < level.cols; c++) {
        const st = base.cells[r][c];
        if (level.solution[r][c] && st !== 'road' && st !== 'nest') {
          target = {r, c};
          break;
        }
      }
    }
    if (target === null) {
      return;
    }

    const cells = cloneCells(base.cells);
    cells[target.r][target.c] = 'road';
    const next: Snapshot = {
      ...base,
      cells,
      painted: base.painted + 1,
      movesLeft: Math.max(0, base.movesLeft - HINT_COST),
    };
    snapRef.current = next;
    setSnap(next);

    if (next.painted >= level.roadLength) {
      finish('win');
    } else if (next.movesLeft <= 0) {
      finish('lose');
    }
  }, [armIdle, finish, level]);

  const lines = useMemo(() => {
    const rowDone: boolean[] = [];
    for (let r = 0; r < level.rows; r++) {
      let ok = true;
      for (let c = 0; c < level.cols; c++) {
        if (level.solution[r][c]) {
          const st = snap.cells[r][c];
          if (st !== 'road' && st !== 'nest') {
            ok = false;
            break;
          }
        }
      }
      rowDone.push(ok);
    }
    const colDone: boolean[] = [];
    for (let c = 0; c < level.cols; c++) {
      let ok = true;
      for (let r = 0; r < level.rows; r++) {
        if (level.solution[r][c]) {
          const st = snap.cells[r][c];
          if (st !== 'road' && st !== 'nest') {
            ok = false;
            break;
          }
        }
      }
      colDone.push(ok);
    }
    return {rowDone, colDone};
  }, [level, snap.cells]);

  return {
    cells: snap.cells,
    movesLeft: snap.movesLeft,
    mistakes: snap.mistakes,
    painted: snap.painted,
    resolving: snap.resolving,
    rowDone: lines.rowDone,
    colDone: lines.colDone,
    mode,
    setMode,
    onCellPress,
    useHint,
    hintReady: snap.movesLeft >= HINT_COST && !snap.resolving,
  };
}
