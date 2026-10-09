import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THEME} from '../constants/theme';

type Props = {
  hints: number[][];
  axis: 'row' | 'col';
  satisfied: boolean[];
  tile: number;
  thickness: number;
};

/** The hint lane along one edge of the tray. Satisfied lines dim out. */
export default function ClueGutter({
  hints,
  axis,
  satisfied,
  tile,
  thickness,
}: Props) {
  const isCol = axis === 'col';
  return (
    <View style={isCol ? styles.colLane : styles.rowLane}>
      {hints.map((line, i) => (
        <View
          key={i}
          style={[
            isCol
              ? {width: tile, height: thickness}
              : {width: thickness, height: tile},
            isCol ? styles.colCell : styles.rowCell,
          ]}>
          {line.map((n, k) => (
            <Text
              key={k}
              style={[
                styles.num,
                satisfied[i] ? styles.done : styles.pending,
              ]}>
              {n}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  colLane: {
    flexDirection: 'row',
  },
  rowLane: {
    flexDirection: 'column',
  },
  colCell: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 4,
  },
  rowCell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 6,
    gap: 5,
  },
  num: {
    fontSize: 11,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 0.2,
    fontVariant: ['tabular-nums' as const],
  },
  pending: {
    color: THEME.colors.woodEdge,
  },
  done: {
    color: 'rgba(138,115,85,0.40)',
  },
});
