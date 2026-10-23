import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import type {TilechihbkpormdcangvacrszState} from '../components/PchihbkpormdcangvacrszuzzleTile';
import type {PainchihbkpormdcangvacrsztMode} from '../components/ModeTogglechihbkpormdcangvacrsz';
import type {Lechihbkpormdcangvacrszvel} from '../game/levechihbkpormdcangvacrszls';
import {accurchihbkpormdcangvacrszacyFor, starchihbkpormdcangvacrszsFor} from '../game/scoringchihbkpormdcangvacrsz';
import type {Outchihbkpormdcangvacrszcome, RoundchihbkpormdcangvacrszResult} from '../game/scoringchihbkpormdcangvacrsz';
import {
  HINTchihbkpormdcangvacrsz_COST,
  IDLE_BACchihbkpormdcangvacrszKSTOP_MS,
  MAX_MIchihbkpormdcangvacrszSTAKES,
  RESOLVE_chihbkpormdcangvacrszDELAY_MS,
  ROUND_BAchihbkpormdcangvacrszCKSTOP_MS,
  TILE_FEEchihbkpormdcangvacrszDBACK_MS,
} from '../constants/confchihbkpormdcangvacrszig';
// autosetup-split-begin
import { chihbkpormdcangvacrszGameMixSeed, chihbkpormdcangvacrszGameClampSpan } from './usePuzzlchihbkpormdcangvacrszePart01';
import { chihbkpormdcangvacrszGameFoldRange } from './usePuzzlchihbkpormdcangvacrszePart02';
// autosetup-split-end

type Snapshot = {
  cells: TilechihbkpormdcangvacrszState[][];
  movesLeft: number;
  mistakes: number;
  painted: number;
  resolving: boolean;
};

function inichihbkpormdcangvacrsztial(lechihbkpormdcangvacrszvel: Lechihbkpormdcangvacrszvel): Snapshot {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
  const cechihbkpormdcangvacrszlls: TilechihbkpormdcangvacrszState[][] = [];
  for (let rchihbkpormdcangvacrsz = 0; rchihbkpormdcangvacrsz < lechihbkpormdcangvacrszvel.rows; rchihbkpormdcangvacrsz++) {
    const rchihbkpormdcangvacrszow: TilechihbkpormdcangvacrszState[] = [];
    for (let cchihbkpormdcangvacrsz = 0; cchihbkpormdcangvacrsz < lechihbkpormdcangvacrszvel.cols; cchihbkpormdcangvacrsz++) {
      rchihbkpormdcangvacrszow.push('empty');
    }
    cechihbkpormdcangvacrszlls.push(rchihbkpormdcangvacrszow);
  }
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < lechihbkpormdcangvacrszvel.nests.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = lechihbkpormdcangvacrszvel.nests[ichihbkpormdcangvacrsz];
    cechihbkpormdcangvacrszlls[nchihbkpormdcangvacrsz.r][nchihbkpormdcangvacrsz.c] = 'nest';
  }
  return {
    cells: cechihbkpormdcangvacrszlls,
    movesLeft: lechihbkpormdcangvacrszvel.moveBudget,
    mistakes: 0,
    painted: lechihbkpormdcangvacrszvel.nests.length,
    resolving: false,
  };
}

function clonechihbkpormdcangvacrszCells(cechihbkpormdcangvacrszlls: TilechihbkpormdcangvacrszState[][]): TilechihbkpormdcangvacrszState[][] {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
  return cechihbkpormdcangvacrszlls.map(rchihbkpormdcangvacrszow => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
return (rchihbkpormdcangvacrszow.slice());
});
}

/**
 * Board state for one round. Every value a timer or callback reads lives in a
 * ref, so no handler ever closes over a stale snapshot.
 */
export function usePuzzlchihbkpormdcangvacrsze(lechihbkpormdcangvacrszvel: Lechihbkpormdcangvacrszvel, onGamchihbkpormdcangvacrszeOver: (r: RoundchihbkpormdcangvacrszResult) => void) {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
  const [snchihbkpormdcangvacrszap, setchihbkpormdcangvacrszSnap] = useState<Snapshot>(() => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
return (inichihbkpormdcangvacrsztial(lechihbkpormdcangvacrszvel));
});
  const [mochihbkpormdcangvacrszde, setchihbkpormdcangvacrszMode] = useState<PainchihbkpormdcangvacrsztMode>('paint');

  const snachihbkpormdcangvacrszpRef = useRef(snchihbkpormdcangvacrszap);
  snachihbkpormdcangvacrszpRef.current = snchihbkpormdcangvacrszap;
  const modchihbkpormdcangvacrszeRef = useRef(mochihbkpormdcangvacrszde);
  modchihbkpormdcangvacrszeRef.current = mochihbkpormdcangvacrszde;
  const donchihbkpormdcangvacrszeRef = useRef(false);
  const ovechihbkpormdcangvacrszrRef = useRef(onGamchihbkpormdcangvacrszeOver);
  ovechihbkpormdcangvacrszrRef.current = onGamchihbkpormdcangvacrszeOver;

  const idlechihbkpormdcangvacrszTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const capTchihbkpormdcangvacrszimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resolvchihbkpormdcangvacrszeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const settlechihbkpormdcangvacrszTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const finchihbkpormdcangvacrszish = useCallback(
    (outchihbkpormdcangvacrszcome: Outchihbkpormdcangvacrszcome) => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
      if (donchihbkpormdcangvacrszeRef.current) {
        return;
      }
      donchihbkpormdcangvacrszeRef.current = true;
      if (idlechihbkpormdcangvacrszTimer.current) {
        clearTimeout(idlechihbkpormdcangvacrszTimer.current);
      }
      if (capTchihbkpormdcangvacrszimer.current) {
        clearTimeout(capTchihbkpormdcangvacrszimer.current);
      }
      const schihbkpormdcangvacrsz = snachihbkpormdcangvacrszpRef.current;
      const movechihbkpormdcangvacrszsUsed = lechihbkpormdcangvacrszvel.moveBudget - schihbkpormdcangvacrsz.movesLeft;
      const reschihbkpormdcangvacrszult: RoundchihbkpormdcangvacrszResult = {
        outcome: outchihbkpormdcangvacrszcome,
        levelId: lechihbkpormdcangvacrszvel.id,
        stars: starchihbkpormdcangvacrszsFor(outchihbkpormdcangvacrszcome, schihbkpormdcangvacrsz.movesLeft, lechihbkpormdcangvacrszvel.moveBudget, schihbkpormdcangvacrsz.mistakes),
        movesUsed: movechihbkpormdcangvacrszsUsed,
        moveBudget: lechihbkpormdcangvacrszvel.moveBudget,
        mistakes: schihbkpormdcangvacrsz.mistakes,
        accuracy: accurchihbkpormdcangvacrszacyFor(movechihbkpormdcangvacrszsUsed, schihbkpormdcangvacrsz.mistakes),
        painted: schihbkpormdcangvacrsz.painted,
        roadLength: lechihbkpormdcangvacrszvel.roadLength,
        difficulty: lechihbkpormdcangvacrszvel.difficulty,
      };
      setchihbkpormdcangvacrszSnap(pchihbkpormdcangvacrsz => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
return ({...pchihbkpormdcangvacrsz, resolving: true});
});
      resolvchihbkpormdcangvacrszeTimer.current = setTimeout(() => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
        ovechihbkpormdcangvacrszrRef.current(reschihbkpormdcangvacrszult);
      }, RESOLVE_chihbkpormdcangvacrszDELAY_MS);
    },
    [lechihbkpormdcangvacrszvel],
  );

  const armchihbkpormdcangvacrszIdle = useCallback(() => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
    if (idlechihbkpormdcangvacrszTimer.current) {
      clearTimeout(idlechihbkpormdcangvacrszTimer.current);
    }
    idlechihbkpormdcangvacrszTimer.current = setTimeout(() => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
return (finchihbkpormdcangvacrszish('lose'));
}, IDLE_BACchihbkpormdcangvacrszKSTOP_MS);
  }, [finchihbkpormdcangvacrszish]);

  useEffect(() => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
    const timchihbkpormdcangvacrszers = settlechihbkpormdcangvacrszTimers;
    armchihbkpormdcangvacrszIdle();
    capTchihbkpormdcangvacrszimer.current = setTimeout(() => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
return (finchihbkpormdcangvacrszish('lose'));
}, ROUND_BAchihbkpormdcangvacrszCKSTOP_MS);
    return () => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
      if (idlechihbkpormdcangvacrszTimer.current) {
        clearTimeout(idlechihbkpormdcangvacrszTimer.current);
      }
      if (capTchihbkpormdcangvacrszimer.current) {
        clearTimeout(capTchihbkpormdcangvacrszimer.current);
      }
      if (resolvchihbkpormdcangvacrszeTimer.current) {
        clearTimeout(resolvchihbkpormdcangvacrszeTimer.current);
      }
      timchihbkpormdcangvacrszers.current.forEach(tchihbkpormdcangvacrsz => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
return (clearTimeout(tchihbkpormdcangvacrsz));
});
      timchihbkpormdcangvacrszers.current = [];
    };
  }, [armchihbkpormdcangvacrszIdle, finchihbkpormdcangvacrszish]);

  const settlchihbkpormdcangvacrszeWrong = useCallback((rchihbkpormdcangvacrsz: number, cchihbkpormdcangvacrsz: number) => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
    const tchihbkpormdcangvacrsz = setTimeout(() => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
      setchihbkpormdcangvacrszSnap(pchihbkpormdcangvacrsz => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
        if (pchihbkpormdcangvacrsz.cells[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz] !== 'wrong') {
          return pchihbkpormdcangvacrsz;
        }
        const cechihbkpormdcangvacrszlls = clonechihbkpormdcangvacrszCells(pchihbkpormdcangvacrsz.cells);
        cechihbkpormdcangvacrszlls[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz] = 'marked';
        return {...pchihbkpormdcangvacrsz, cells: cechihbkpormdcangvacrszlls};
      });
    }, TILE_FEEchihbkpormdcangvacrszDBACK_MS + 260);
    settlechihbkpormdcangvacrszTimers.current.push(tchihbkpormdcangvacrsz);
  }, []);

  const onCelchihbkpormdcangvacrszlPress = useCallback(
    (rchihbkpormdcangvacrsz: number, cchihbkpormdcangvacrsz: number) => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
      if (donchihbkpormdcangvacrszeRef.current || snachihbkpormdcangvacrszpRef.current.resolving) {
        return;
      }
      const cchihbkpormdcangvacrszur = snachihbkpormdcangvacrszpRef.current.cells[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz];
      if (cchihbkpormdcangvacrszur === 'nest' || cchihbkpormdcangvacrszur === 'road' || cchihbkpormdcangvacrszur === 'wrong') {
        return;
      }
      armchihbkpormdcangvacrszIdle();

      const isRchihbkpormdcangvacrszoad = lechihbkpormdcangvacrszvel.solution[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz];
      const marchihbkpormdcangvacrszking = modchihbkpormdcangvacrszeRef.current === 'mark';
      if (marchihbkpormdcangvacrszking && cchihbkpormdcangvacrszur === 'marked') {
        // Re-marking an already flagged tile changes nothing — don't bill a move.
        return;
      }
      const bachihbkpormdcangvacrszse = snachihbkpormdcangvacrszpRef.current;
      const cechihbkpormdcangvacrszlls = clonechihbkpormdcangvacrszCells(bachihbkpormdcangvacrszse.cells);
      let mistchihbkpormdcangvacrszakes = bachihbkpormdcangvacrszse.mistakes;
      let paichihbkpormdcangvacrsznted = bachihbkpormdcangvacrszse.painted;

      if (marchihbkpormdcangvacrszking) {
        cechihbkpormdcangvacrszlls[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz] = 'marked';
      } else if (isRchihbkpormdcangvacrszoad) {
        cechihbkpormdcangvacrszlls[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz] = 'road';
        paichihbkpormdcangvacrsznted += 1;
      } else {
        cechihbkpormdcangvacrszlls[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz] = 'wrong';
        mistchihbkpormdcangvacrszakes += 1;
      }

      const nechihbkpormdcangvacrszxt: Snapshot = {
        ...bachihbkpormdcangvacrszse,
        cells: cechihbkpormdcangvacrszlls,
        mistakes: mistchihbkpormdcangvacrszakes,
        painted: paichihbkpormdcangvacrsznted,
        movesLeft: Math.max(0, bachihbkpormdcangvacrszse.movesLeft - 1),
      };
      snachihbkpormdcangvacrszpRef.current = nechihbkpormdcangvacrszxt;
      setchihbkpormdcangvacrszSnap(nechihbkpormdcangvacrszxt);

      if (!marchihbkpormdcangvacrszking && !isRchihbkpormdcangvacrszoad) {
        settlchihbkpormdcangvacrszeWrong(rchihbkpormdcangvacrsz, cchihbkpormdcangvacrsz);
      }

      if (paichihbkpormdcangvacrsznted >= lechihbkpormdcangvacrszvel.roadLength) {
        finchihbkpormdcangvacrszish('win');
      } else if (mistchihbkpormdcangvacrszakes >= MAX_MIchihbkpormdcangvacrszSTAKES || nechihbkpormdcangvacrszxt.movesLeft <= 0) {
        finchihbkpormdcangvacrszish('lose');
      }
    },
    [armchihbkpormdcangvacrszIdle, finchihbkpormdcangvacrszish, lechihbkpormdcangvacrszvel, settlchihbkpormdcangvacrszeWrong],
  );

  const usechihbkpormdcangvacrszHint = useCallback(() => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
    if (donchihbkpormdcangvacrszeRef.current || snachihbkpormdcangvacrszpRef.current.resolving) {
      return;
    }
    const bachihbkpormdcangvacrszse = snachihbkpormdcangvacrszpRef.current;
    if (bachihbkpormdcangvacrszse.movesLeft < HINTchihbkpormdcangvacrsz_COST) {
      return;
    }
    armchihbkpormdcangvacrszIdle();

    let tarchihbkpormdcangvacrszget: {r: number; c: number} | null = null;
    for (let rchihbkpormdcangvacrsz = 0; rchihbkpormdcangvacrsz < lechihbkpormdcangvacrszvel.rows && tarchihbkpormdcangvacrszget === null; rchihbkpormdcangvacrsz++) {
      for (let cchihbkpormdcangvacrsz = 0; cchihbkpormdcangvacrsz < lechihbkpormdcangvacrszvel.cols; cchihbkpormdcangvacrsz++) {
        const schihbkpormdcangvacrszt = bachihbkpormdcangvacrszse.cells[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz];
        if (lechihbkpormdcangvacrszvel.solution[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz] && schihbkpormdcangvacrszt !== 'road' && schihbkpormdcangvacrszt !== 'nest') {
          tarchihbkpormdcangvacrszget = {r: rchihbkpormdcangvacrsz, c: cchihbkpormdcangvacrsz};
          break;
        }
      }
    }
    if (tarchihbkpormdcangvacrszget === null) {
      return;
    }

    const cechihbkpormdcangvacrszlls = clonechihbkpormdcangvacrszCells(bachihbkpormdcangvacrszse.cells);
    cechihbkpormdcangvacrszlls[tarchihbkpormdcangvacrszget.r][tarchihbkpormdcangvacrszget.c] = 'road';
    const nechihbkpormdcangvacrszxt: Snapshot = {
      ...bachihbkpormdcangvacrszse,
      cells: cechihbkpormdcangvacrszlls,
      painted: bachihbkpormdcangvacrszse.painted + 1,
      movesLeft: Math.max(0, bachihbkpormdcangvacrszse.movesLeft - HINTchihbkpormdcangvacrsz_COST),
    };
    snachihbkpormdcangvacrszpRef.current = nechihbkpormdcangvacrszxt;
    setchihbkpormdcangvacrszSnap(nechihbkpormdcangvacrszxt);

    if (nechihbkpormdcangvacrszxt.painted >= lechihbkpormdcangvacrszvel.roadLength) {
      finchihbkpormdcangvacrszish('win');
    } else if (nechihbkpormdcangvacrszxt.movesLeft <= 0) {
      finchihbkpormdcangvacrszish('lose');
    }
  }, [armchihbkpormdcangvacrszIdle, finchihbkpormdcangvacrszish, lechihbkpormdcangvacrszvel]);

  const lichihbkpormdcangvacrsznes = useMemo(() => {
void chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(20, 23);
    const rowchihbkpormdcangvacrszDone: boolean[] = [];
    for (let rchihbkpormdcangvacrsz = 0; rchihbkpormdcangvacrsz < lechihbkpormdcangvacrszvel.rows; rchihbkpormdcangvacrsz++) {
      let ochihbkpormdcangvacrszk = true;
      for (let cchihbkpormdcangvacrsz = 0; cchihbkpormdcangvacrsz < lechihbkpormdcangvacrszvel.cols; cchihbkpormdcangvacrsz++) {
        if (lechihbkpormdcangvacrszvel.solution[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz]) {
          const schihbkpormdcangvacrszt = snchihbkpormdcangvacrszap.cells[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz];
          if (schihbkpormdcangvacrszt !== 'road' && schihbkpormdcangvacrszt !== 'nest') {
            ochihbkpormdcangvacrszk = false;
            break;
          }
        }
      }
      rowchihbkpormdcangvacrszDone.push(ochihbkpormdcangvacrszk);
    }
    const colchihbkpormdcangvacrszDone: boolean[] = [];
    for (let cchihbkpormdcangvacrsz = 0; cchihbkpormdcangvacrsz < lechihbkpormdcangvacrszvel.cols; cchihbkpormdcangvacrsz++) {
      let ochihbkpormdcangvacrszk = true;
      for (let rchihbkpormdcangvacrsz = 0; rchihbkpormdcangvacrsz < lechihbkpormdcangvacrszvel.rows; rchihbkpormdcangvacrsz++) {
        if (lechihbkpormdcangvacrszvel.solution[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz]) {
          const schihbkpormdcangvacrszt = snchihbkpormdcangvacrszap.cells[rchihbkpormdcangvacrsz][cchihbkpormdcangvacrsz];
          if (schihbkpormdcangvacrszt !== 'road' && schihbkpormdcangvacrszt !== 'nest') {
            ochihbkpormdcangvacrszk = false;
            break;
          }
        }
      }
      colchihbkpormdcangvacrszDone.push(ochihbkpormdcangvacrszk);
    }
    return {rowDone: rowchihbkpormdcangvacrszDone, colDone: colchihbkpormdcangvacrszDone};
  }, [lechihbkpormdcangvacrszvel, snchihbkpormdcangvacrszap.cells]);

  return {
    cells: snchihbkpormdcangvacrszap.cells,
    movesLeft: snchihbkpormdcangvacrszap.movesLeft,
    mistakes: snchihbkpormdcangvacrszap.mistakes,
    painted: snchihbkpormdcangvacrszap.painted,
    resolving: snchihbkpormdcangvacrszap.resolving,
    rowDone: lichihbkpormdcangvacrsznes.rowDone,
    colDone: lichihbkpormdcangvacrsznes.colDone,
    mode: mochihbkpormdcangvacrszde,
    setMode: setchihbkpormdcangvacrszMode,
    onCellPress: onCelchihbkpormdcangvacrszlPress,
    useHint: usechihbkpormdcangvacrszHint,
    hintReady: snchihbkpormdcangvacrszap.movesLeft >= HINTchihbkpormdcangvacrsz_COST && !snchihbkpormdcangvacrszap.resolving,
  };
}

/* autosetup-game-stamp:v1 */
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszusePuzzlchihbkpormObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 3;
  return (xchihbkpormdcangvacrsz ^ 96) & 17090;
}
