import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THEME} from '../constants/theme';

type Props = {
  earned: number;
  size?: number;
  total?: number;
};

/** Star glyph is in the safe set — it renders on the Roboto fallback. */
export default function StarRow({earned, size = 14, total = 3}: Props) {
  const stars: number[] = [];
  for (let i = 0; i < total; i++) {
    stars.push(i);
  }
  return (
    <View style={styles.row}>
      {stars.map(i => (
        <Text
          key={i}
          style={[
            styles.star,
            {fontSize: size, lineHeight: size + 4},
            i < earned ? styles.on : styles.off,
          ]}>
          {'★'}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  star: {
    fontWeight: '900',
  },
  on: {
    color: THEME.colors.gold,
    textShadowColor: 'rgba(210,118,31,0.55)',
    textShadowRadius: 6,
    textShadowOffset: {width: 0, height: 1},
  },
  off: {
    color: 'rgba(138,115,85,0.28)',
  },
});
