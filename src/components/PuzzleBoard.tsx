import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import ClueGutter from './ClueGutter';
import PuzzleTile from './PuzzleTile';
import type {TileState} from './PuzzleTile';
import type {Level} from '../game/levels';
import {THEME} from '../constants/theme';

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get('window');

/**
 * Frame maths (CLAUDE.md #4): the tray's own padding and border are part of
 * the width, so the tiles can never stick out of the rounded frame.
 */
const PAD = 6;
const BORDER = 3;
export const BOARD_FRAME = PAD + BORDER;
export const CLUE = 52;
const BOARD_MAX_W = Math.min(SCREEN_W - 32, 380);
const BOARD_MAX_H = Math.min(SCREEN_H - 116 - 64 - 208 - 28, 420);

export function tileSizeFor(rows: number, cols: number): number {
  const byWidth = (BOARD_MAX_W - 2 * BOARD_FRAME - CLUE) / cols;
  const byHeight = (BOARD_MAX_H - 2 * BOARD_FRAME - CLUE) / rows;
  return Math.max(22, Math.floor(Math.min(byWidth, byHeight)));
}

type Props = {
  level: Level;
  cells: TileState[][];
  rowDone: boolean[];
  colDone: boolean[];
  onCellPress: (r: number, c: number) => void;
};

export default function PuzzleBoard({
  level,
  cells,
  rowDone,
  colDone,
  onCellPress,
}: Props) {
  const tile = tileSizeFor(level.rows, level.cols);
  const boardW = CLUE + tile * level.cols + 2 * BOARD_FRAME;
  const boardH = CLUE + tile * level.rows + 2 * BOARD_FRAME;

  return (
    <View style={[styles.tray, {width: boardW, height: boardH}]}>
      <View style={styles.highlight} />
      <View style={styles.topRow}>
        <View style={{width: CLUE, height: CLUE}} />
        <View style={[styles.gutter, {height: CLUE}]}>
          <ClueGutter
            hints={level.colHints}
            axis="col"
            satisfied={colDone}
            tile={tile}
            thickness={CLUE}
          />
        </View>
      </View>

      <View style={styles.bodyRow}>
        <View style={[styles.gutter, {width: CLUE}]}>
          <ClueGutter
            hints={level.rowHints}
            axis="row"
            satisfied={rowDone}
            tile={tile}
            thickness={CLUE}
          />
        </View>
        <View style={styles.grid}>
          {cells.map((row, r) => (
            <View key={r} style={styles.gridRow}>
              {row.map((state, c) => (
                <PuzzleTile
                  key={c}
                  state={state}
                  size={tile}
                  r={r}
                  c={c}
                  onPress={onCellPress}
                />
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tray: {
    padding: PAD,
    borderWidth: BORDER,
    borderColor: THEME.colors.woodEdge,
    borderRadius: 18,
    backgroundColor: THEME.colors.tray,
    shadowColor: '#6B4A24',
    shadowOpacity: 0.3,
    shadowRadius: 14,
    shadowOffset: {width: 0, height: 7},
    elevation: 9,
    overflow: 'hidden',
  },
  highlight: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.38)',
  },
  topRow: {
    flexDirection: 'row',
  },
  bodyRow: {
    flexDirection: 'row',
  },
  gutter: {
    backgroundColor: 'rgba(255,255,255,0.50)',
    borderRadius: 10,
  },
  grid: {
    flexDirection: 'column',
  },
  gridRow: {
    flexDirection: 'row',
  },
});
