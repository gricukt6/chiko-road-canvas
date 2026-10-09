import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CheckCircle2, Paintbrush, XCircle} from 'lucide-react-native';
import Confetti from '../components/Confetti';
import GrainField from '../components/GrainField';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';
import SecondaryButton from '../components/SecondaryButton';
import StarRow from '../components/StarRow';
import {RESULT_GRAIN, TOTAL_LEVELS} from '../constants/config';
import type {RoundResult} from '../game/scoring';
import {THEME} from '../constants/theme';

const {width: W, height: H} = Dimensions.get('window');

const GRAIN_TINTS = [
  'rgba(138,115,85,0.07)',
  'rgba(244,198,75,0.09)',
  'rgba(99,185,108,0.07)',
];

type Props = {
  result: RoundResult;
  onAgain: () => void;
  onNext: () => void;
  onMenu: () => void;
};

type RowProps = {label: string; value: string; accent: string};

function ScoreRow({label, value, accent}: RowProps) {
  return (
    <View style={styles.scoreRow}>
      <Text style={styles.scoreLabel}>{label}</Text>
      <Text style={[styles.scoreValue, {color: accent}]}>{value}</Text>
    </View>
  );
}

export default function ResultScreen({
  result,
  onAgain,
  onNext,
  onMenu,
}: Props) {
  const won = result.outcome === 'win';
  const badge = useRef(new Animated.Value(0.6)).current;
  const fade = useRef(new Animated.Value(0)).current;
  const hasNext = won && result.levelId < TOTAL_LEVELS;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(badge, {
        toValue: 1,
        tension: 50,
        friction: 6,
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 320,
        useNativeDriver: true,
      }),
    ]).start();
  }, [badge, fade]);

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={won ? THEME.gradients.win : THEME.gradients.lose}
        style={StyleSheet.absoluteFill}
      />
      <View
        style={[
          styles.blob,
          won ? styles.blobWin : styles.blobLose,
        ]}
      />
      <View style={styles.blobLow} />
      <GrainField
        width={W}
        height={H}
        count={RESULT_GRAIN}
        seed={0x3f91cd}
        tints={GRAIN_TINTS}
      />
      {won ? <Confetti /> : null}

      <ScreenHeader
        title={'CANVAS ' + result.levelId}
        subtitle={result.difficulty}
        transparent
        right={
          <Text style={styles.headerStat}>
            {result.levelId} / {TOTAL_LEVELS}
          </Text>
        }
      />

      <View style={styles.body}>
        <Animated.View
          pointerEvents="none"
          style={{opacity: fade, transform: [{scale: badge}]}}>
          <LinearGradient
            colors={
              won ? THEME.gradients.verdictWin : THEME.gradients.verdictLose
            }
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.medallion}>
            {won ? (
              <CheckCircle2 size={52} color="#FFFFFF" strokeWidth={2.2} />
            ) : (
              <XCircle size={52} color="#FFFFFF" strokeWidth={2.2} />
            )}
          </LinearGradient>
        </Animated.View>

        <Text style={styles.headline}>
          {won ? 'MAP RESTORED!' : 'OUT OF ROAD'}
        </Text>

        <View style={styles.starWrap}>
          <StarRow earned={result.stars} size={34} />
        </View>

        <View style={styles.card}>
          <ScoreRow
            label="TAPS USED"
            value={result.movesUsed + ' / ' + result.moveBudget}
            accent={THEME.colors.sky}
          />
          <View style={styles.divider} />
          <ScoreRow
            label="MISTAKES"
            value={result.mistakes + ' / 3'}
            accent={THEME.colors.terracotta}
          />
          <View style={styles.divider} />
          <ScoreRow
            label="ACCURACY"
            value={result.accuracy + '%'}
            accent={THEME.colors.meadow}
          />
          <View style={styles.divider} />
          <ScoreRow
            label="ROAD PAINTED"
            value={result.painted + ' / ' + result.roadLength}
            accent={THEME.colors.woodEdge}
          />
        </View>
      </View>

      <View style={styles.ctaZone}>
        {hasNext ? (
          <PrimaryButton
            label="NEXT CANVAS"
            onPress={onNext}
            renderIcon={(size, color) => (
              <Paintbrush size={size} color={color} strokeWidth={2.6} />
            )}
          />
        ) : (
          <PrimaryButton
            label="PLAY AGAIN"
            onPress={onAgain}
            renderIcon={(size, color) => (
              <Paintbrush size={size} color={color} strokeWidth={2.6} />
            )}
          />
        )}

        {hasNext ? (
          <View style={styles.secondRow}>
            <SecondaryButton
              label="PLAY AGAIN"
              onPress={onAgain}
              accent={THEME.colors.woodEdge}
              full
            />
          </View>
        ) : null}

        <Pressable
          accessibilityRole="button"
          style={styles.menuBtn}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          onPress={onMenu}>
          <Text style={styles.menuLabel}>MENU</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.colors.canvas,
  },
  blob: {
    position: 'absolute',
    top: 60,
    right: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
  },
  blobWin: {
    backgroundColor: 'rgba(99,185,108,0.14)',
  },
  blobLose: {
    backgroundColor: 'rgba(236,129,71,0.12)',
  },
  blobLow: {
    position: 'absolute',
    bottom: -60,
    left: -70,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(244,198,75,0.12)',
  },
  headerStat: {
    fontSize: 14,
    fontWeight: '800',
    color: THEME.colors.woodEdge,
    fontVariant: ['tabular-nums' as const],
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  medallion: {
    width: 108,
    height: 108,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.45)',
    shadowColor: '#8A5A22',
    shadowOpacity: 0.3,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 10},
    elevation: 10,
  },
  headline: {
    marginTop: 18,
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 1.5,
    textAlign: 'center',
    color: THEME.colors.textPrimary,
  },
  starWrap: {
    marginTop: 12,
  },
  card: {
    marginTop: 20,
    width: '100%',
    backgroundColor: THEME.colors.surface,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: THEME.colors.rim,
    paddingHorizontal: 18,
    paddingVertical: 8,
    shadowColor: '#8A5A22',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 6},
    elevation: 6,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 11,
  },
  scoreLabel: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: THEME.colors.textSecondary,
  },
  scoreValue: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.4,
    fontVariant: ['tabular-nums' as const],
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(185,119,43,0.16)',
  },
  ctaZone: {
    paddingHorizontal: 20,
    paddingBottom: 26,
  },
  secondRow: {
    marginTop: 12,
  },
  menuBtn: {
    marginTop: 10,
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    color: THEME.colors.textSecondary,
  },
});
