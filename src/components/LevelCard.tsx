import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Lock} from 'lucide-react-native';
import StarRow from './StarRow';
import {THEME} from '../constants/theme';

export type LevelStatus = 'cleared' | 'open' | 'locked';

type Props = {
  index: number;
  status: LevelStatus;
  stars: number;
  size: number;
  onPress: (id: number) => void;
};

/** One tile of the canvas picker — a pressed-in wooden chip. */
export default function LevelCard({
  index,
  status,
  stars,
  size,
  onPress,
}: Props) {
  const locked = status === 'locked';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={'canvas ' + index}
      disabled={locked}
      hitSlop={{top: 4, bottom: 4, left: 4, right: 4}}
      style={[
        styles.card,
        {width: size, height: size},
        locked ? styles.locked : null,
      ]}
      onPress={() => onPress(index)}>
      {locked ? (
        <Lock size={20} color="rgba(138,115,85,0.55)" strokeWidth={2.2} />
      ) : (
        <Text style={styles.num}>{index}</Text>
      )}
      {status === 'cleared' ? (
        <View style={styles.stars}>
          <StarRow earned={stars} size={12} />
        </View>
      ) : null}
      {status === 'open' ? <Text style={styles.fresh}>NEW</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    backgroundColor: THEME.colors.surface,
    borderWidth: 2,
    borderColor: THEME.colors.rim,
    borderTopColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8A5A22',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 5,
  },
  locked: {
    backgroundColor: 'rgba(227,210,174,0.45)',
  },
  num: {
    fontSize: 24,
    fontWeight: '900',
    color: THEME.colors.textPrimary,
    fontVariant: ['tabular-nums' as const],
  },
  stars: {
    marginTop: 6,
  },
  fresh: {
    marginTop: 6,
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 2,
    color: THEME.colors.meadow,
  },
});
