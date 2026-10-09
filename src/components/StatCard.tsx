import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THEME} from '../constants/theme';

type Props = {
  value: string;
  label: string;
  accent: string;
};

/**
 * Deliberately raster-free. An accent dot plus a tabular number reads at the
 * same width on every card; bitmap sprites with different internal aspect
 * ratios never do. Same component on Menu, Game and Result.
 */
export default function StatCard({value, label, accent}: Props) {
  return (
    <View style={[styles.card, {borderColor: accent + '55'}]}>
      <View style={[styles.dot, {backgroundColor: accent}]} />
      <Text style={[styles.value, {color: accent}]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderRadius: 14,
    borderWidth: 1,
    backgroundColor: THEME.colors.glass,
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 7,
  },
  value: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.4,
    fontVariant: ['tabular-nums' as const],
  },
  label: {
    marginTop: 3,
    fontSize: 9.5,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: THEME.colors.textSecondary,
  },
});
