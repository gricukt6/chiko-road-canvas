import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {Target} from 'lucide-react-native';
import {THEME} from '../constants/theme';

type Props = {
  goal: string;
  moves: number;
};

function movesColor(moves: number): string {
  if (moves <= 3) {
    return THEME.colors.terracotta;
  }
  if (moves <= 8) {
    return THEME.colors.gold;
  }
  return THEME.colors.meadow;
}

/** Goal on the left, live move counter on the right. */
export default function ObjectiveStrip({goal, moves}: Props) {
  const pulse = useRef(new Animated.Value(1)).current;
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    Animated.sequence([
      Animated.timing(pulse, {
        toValue: 1.18,
        duration: 110,
        useNativeDriver: true,
      }),
      Animated.timing(pulse, {
        toValue: 1,
        duration: 110,
        useNativeDriver: true,
      }),
    ]).start();
  }, [moves, pulse]);

  return (
    <View style={styles.strip}>
      <Target size={18} color={THEME.colors.woodEdge} strokeWidth={2.4} />
      <Text style={styles.goal} numberOfLines={1}>
        {goal}
      </Text>
      <View style={styles.counter}>
        <Text style={styles.caption}>MOVES</Text>
        <Animated.View
          pointerEvents="none"
          style={{transform: [{scale: pulse}]}}>
          <Text style={[styles.value, {color: movesColor(moves)}]}>
            {moves}
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  strip: {
    marginHorizontal: 16,
    marginTop: 10,
    minHeight: 48,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: THEME.colors.glass,
    borderWidth: 1,
    borderColor: THEME.colors.hairline,
  },
  goal: {
    flex: 1,
    fontSize: 12.5,
    fontWeight: '700',
    letterSpacing: 0.6,
    color: THEME.colors.textPrimary,
  },
  counter: {
    alignItems: 'flex-end',
    minWidth: 54,
  },
  caption: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: THEME.colors.textSecondary,
  },
  value: {
    fontSize: 18,
    fontWeight: '900',
    fontVariant: ['tabular-nums' as const],
  },
});
