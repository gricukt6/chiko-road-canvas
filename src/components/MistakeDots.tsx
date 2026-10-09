import React from 'react';
import {StyleSheet, View} from 'react-native';
import {THEME} from '../constants/theme';

type Props = {
  used: number;
  total: number;
};

export default function MistakeDots({used, total}: Props) {
  const dots: number[] = [];
  for (let i = 0; i < total; i++) {
    dots.push(i);
  }
  return (
    <View style={styles.row}>
      {dots.map(i => (
        <View
          key={i}
          style={[styles.dot, i < used ? styles.spent : styles.left]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  spent: {
    backgroundColor: THEME.colors.terracotta,
  },
  left: {
    backgroundColor: 'rgba(138,115,85,0.25)',
  },
});
