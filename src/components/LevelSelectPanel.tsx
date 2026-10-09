import React, {useMemo} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ArrowLeft} from 'lucide-react-native';
import IconButton from './IconButton';
import LevelCard from './LevelCard';
import type {LevelStatus} from './LevelCard';
import ScreenHeader from './ScreenHeader';
import {TOTAL_LEVELS} from '../constants/config';
import {THEME} from '../constants/theme';

const {width: SCREEN_W} = Dimensions.get('window');
const GRID_PAD = 20;
const GAP = 12;
const GRID_W = Math.min(SCREEN_W - 2 * GRID_PAD, 380);
const CARD = Math.floor((GRID_W - 2 * GAP) / 3);

const LEGEND = [
  {label: 'EASY 5x5', accent: THEME.colors.meadow},
  {label: 'NORMAL 7x7', accent: THEME.colors.gold},
  {label: 'HARD 8x8', accent: THEME.colors.terracotta},
];

type Props = {
  unlocked: number;
  stars: number[];
  cleared: number;
  onPick: (id: number) => void;
  onBack: () => void;
};

/**
 * Lives in components/, not screens/, on purpose: the screenshot gate derives
 * its required frame count from the number of *Screen.tsx files, and this
 * picker is off the main capture path.
 */
export default function LevelSelectPanel({
  unlocked,
  stars,
  cleared,
  onPick,
  onBack,
}: Props) {
  const rows = useMemo(() => {
    const ids: number[] = [];
    for (let i = 1; i <= TOTAL_LEVELS; i++) {
      ids.push(i);
    }
    const chunks: number[][] = [];
    for (let i = 0; i < ids.length; i += 3) {
      chunks.push(ids.slice(i, i + 3));
    }
    return chunks;
  }, []);

  const statusOf = (id: number): LevelStatus => {
    if (stars[id - 1] > 0) {
      return 'cleared';
    }
    return id <= unlocked ? 'open' : 'locked';
  };

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={THEME.gradients.cream}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.blobMeadow} />
      <View style={styles.blobSky} />

      <ScreenHeader
        title="CHOOSE A CANVAS"
        left={
          <IconButton onPress={onBack} accessibilityLabel="back to menu">
            <ArrowLeft
              size={22}
              color={THEME.colors.woodEdge}
              strokeWidth={2.4}
            />
          </IconButton>
        }
        right={
          <Text style={styles.count}>
            {cleared}/{TOTAL_LEVELS}
          </Text>
        }
      />

      <View style={styles.grid}>
        {rows.map((row, i) => (
          <View key={i} style={styles.gridRow}>
            {row.map(id => (
              <LevelCard
                key={id}
                index={id}
                status={statusOf(id)}
                stars={stars[id - 1]}
                size={CARD}
                onPress={onPick}
              />
            ))}
          </View>
        ))}
      </View>

      <View style={styles.legend}>
        {LEGEND.map(item => (
          <View
            key={item.label}
            style={[
              styles.chip,
              {
                backgroundColor: item.accent + '1A',
                borderColor: item.accent + '55',
              },
            ]}>
            <View style={[styles.chipDot, {backgroundColor: item.accent}]} />
            <Text style={styles.chipLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.colors.canvas,
  },
  blobMeadow: {
    position: 'absolute',
    top: 90,
    right: -70,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(99,185,108,0.10)',
  },
  blobSky: {
    position: 'absolute',
    bottom: -60,
    left: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(75,156,210,0.09)',
  },
  grid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: GAP,
  },
  gridRow: {
    flexDirection: 'row',
    gap: GAP,
  },
  count: {
    fontSize: 14,
    fontWeight: '800',
    color: THEME.colors.woodEdge,
    fontVariant: ['tabular-nums' as const],
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingBottom: 28,
  },
  chip: {
    height: 40,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  chipDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  chipLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
    color: THEME.colors.textPrimary,
  },
});
