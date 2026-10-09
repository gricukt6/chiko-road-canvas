import React, {useCallback, useMemo, useState} from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from './PrimaryButton';
import PuzzleTile from './PuzzleTile';
import type {TileState} from './PuzzleTile';
import {THEME} from '../constants/theme';

const {width: SCREEN_W} = Dimensions.get('window');
const CARD_W = Math.min(SCREEN_W - 40, 360);
const MINI = 3;
const MINI_TILE = 56;

/** The two cells the first step asks for, as a run of 2 in the middle row. */
const TARGETS = [
  {r: 1, c: 0},
  {r: 1, c: 1},
];

function freshBoard(): TileState[][] {
  const out: TileState[][] = [];
  for (let r = 0; r < MINI; r++) {
    const row: TileState[] = [];
    for (let c = 0; c < MINI; c++) {
      row.push('empty');
    }
    out.push(row);
  }
  out[1][2] = 'nest';
  return out;
}

type Props = {
  onDone: () => void;
};

/** Two interactive steps, rendered as a full-bleed overlay state. */
export default function TutorialPanel({onDone}: Props) {
  const [step, setStep] = useState(0);
  const [cells, setCells] = useState<TileState[][]>(freshBoard);
  const [painted, setPainted] = useState(0);
  const [marked, setMarked] = useState(0);

  const onCellPress = useCallback(
    (r: number, c: number) => {
      setCells(prev => {
        if (prev[r][c] !== 'empty') {
          return prev;
        }
        const next = prev.map(row => row.slice());
        const wanted = TARGETS.some(t => t.r === r && t.c === c);
        if (step === 0) {
          if (!wanted) {
            return prev;
          }
          next[r][c] = 'road';
          setPainted(n => n + 1);
        } else {
          next[r][c] = 'marked';
          setMarked(n => n + 1);
        }
        return next;
      });
    },
    [step],
  );

  const stepDone = step === 0 ? painted >= TARGETS.length : marked >= 1;

  const copy = useMemo(() => {
    if (step === 0) {
      return {
        title: 'FILL THE ROAD',
        body:
          'The hint 2 means two road tiles in that line. Paint both tiles left of the nest.',
        cta: 'NEXT STEP',
      };
    }
    return {
      title: 'MARK THE EMPTY',
      body:
        'Switch to MARK and flag a tile you are sure is empty. Marks cost a move but never a mistake.',
      cta: 'GOT IT',
    };
  }, [step]);

  const advance = useCallback(() => {
    if (step === 0) {
      setStep(1);
      return;
    }
    onDone();
  }, [onDone, step]);

  const dots = [0, 1];

  return (
    <View style={styles.root}>
      <View style={styles.scrim} />
      <View style={styles.card}>
        <Text style={styles.title}>{copy.title}</Text>
        <Text style={styles.body}>{copy.body}</Text>

        <View style={styles.boardWrap}>
          <View style={styles.hintCol}>
            <View style={styles.hintSlot} />
            <View style={styles.hintSlot}>
              <Text style={styles.hint}>2</Text>
            </View>
            <View style={styles.hintSlot} />
          </View>
          <View style={styles.board}>
            {cells.map((row, r) => (
              <View key={r} style={styles.boardRow}>
                {row.map((state, c) => (
                  <PuzzleTile
                    key={c}
                    state={state}
                    size={MINI_TILE}
                    r={r}
                    c={c}
                    onPress={onCellPress}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.dots}>
          {dots.map(i => (
            <View
              key={i}
              style={[styles.dot, i === step ? styles.dotOn : styles.dotOff]}
            />
          ))}
        </View>

        <View style={[styles.ctaWrap, stepDone ? null : styles.ctaIdle]}>
          <PrimaryButton
            label={copy.cta}
            onPress={stepDone ? advance : onDone}
          />
        </View>

        <Pressable
          accessibilityRole="button"
          style={styles.skip}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          onPress={onDone}>
          <Text style={styles.skipLabel}>SKIP</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.colors.woodDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrim: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(58,42,24,0.82)',
  },
  card: {
    width: CARD_W,
    borderRadius: 26,
    backgroundColor: THEME.colors.surface,
    borderWidth: 2,
    borderColor: THEME.colors.rim,
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 24,
    shadowOffset: {width: 0, height: 12},
    elevation: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 1.2,
    color: THEME.colors.textPrimary,
  },
  body: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: THEME.colors.textSecondary,
  },
  boardWrap: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: THEME.colors.tray,
    borderWidth: 3,
    borderColor: THEME.colors.woodEdge,
  },
  hintCol: {
    width: 26,
  },
  hintSlot: {
    height: MINI_TILE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hint: {
    fontSize: 14,
    fontWeight: '800',
    color: THEME.colors.textOnDark,
  },
  board: {
    flexDirection: 'column',
  },
  boardRow: {
    flexDirection: 'row',
  },
  dots: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotOn: {
    backgroundColor: THEME.colors.gold,
  },
  dotOff: {
    backgroundColor: 'rgba(138,115,85,0.30)',
  },
  ctaWrap: {
    marginTop: 16,
    width: '100%',
  },
  ctaIdle: {
    opacity: 0.6,
  },
  skip: {
    marginTop: 8,
    height: 44,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipLabel: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    color: THEME.colors.textSecondary,
  },
});
