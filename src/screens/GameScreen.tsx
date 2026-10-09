import React, {useEffect, useRef} from 'react';
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ArrowLeft, Lightbulb} from 'lucide-react-native';
import {IMAGES} from '../assets';
import IconButton from '../components/IconButton';
import MistakeDots from '../components/MistakeDots';
import ModeToggle from '../components/ModeToggle';
import ObjectiveStrip from '../components/ObjectiveStrip';
import PuzzleBoard from '../components/PuzzleBoard';
import ScreenHeader from '../components/ScreenHeader';
import SecondaryButton from '../components/SecondaryButton';
import StatCard from '../components/StatCard';
import {MAX_MISTAKES} from '../constants/config';
import type {Level} from '../game/levels';
import type {RoundResult} from '../game/scoring';
import {usePuzzle} from '../hooks/usePuzzle';
import {THEME} from '../constants/theme';

type Props = {
  level: Level;
  onExit: () => void;
  onGameOver: (r: RoundResult) => void;
};

/** G1 classic stack: header, objective strip, board, control panel. */
export default function GameScreen({level, onExit, onGameOver}: Props) {
  const puzzle = usePuzzle(level, onGameOver);
  const shake = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!puzzle.resolving) {
      return;
    }
    Animated.sequence([
      Animated.timing(shake, {toValue: 7, duration: 60, useNativeDriver: true}),
      Animated.timing(shake, {toValue: -7, duration: 60, useNativeDriver: true}),
      Animated.timing(shake, {toValue: 5, duration: 60, useNativeDriver: true}),
      Animated.timing(shake, {toValue: 0, duration: 80, useNativeDriver: true}),
    ]).start();
  }, [puzzle.resolving, shake]);

  const nests = level.nests.length;
  const filled = puzzle.painted;

  return (
    <View style={styles.root}>
      <ImageBackground
        source={IMAGES.bgGame}
        resizeMode="cover"
        style={styles.bg}>
        <LinearGradient
          colors={THEME.gradients.gameScrim}
          style={StyleSheet.absoluteFill}
        />

        <ScreenHeader
          title={'CANVAS ' + level.id}
          subtitle={level.difficulty + ' · ' + level.sizeLabel}
          left={
            <IconButton onPress={onExit} accessibilityLabel="back to menu">
              <ArrowLeft
                size={22}
                color={THEME.colors.woodEdge}
                strokeWidth={2.4}
              />
            </IconButton>
          }
          right={
            <MistakeDots used={puzzle.mistakes} total={MAX_MISTAKES} />
          }
        />

        <ObjectiveStrip
          goal={'LINK ALL ' + nests + ' NESTS'}
          moves={puzzle.movesLeft}
        />

        <View style={styles.boardZone}>
          <Animated.View
            pointerEvents="box-none"
            style={{transform: [{translateX: shake}]}}>
            <PuzzleBoard
              level={level}
              cells={puzzle.cells}
              rowDone={puzzle.rowDone}
              colDone={puzzle.colDone}
              onCellPress={puzzle.onCellPress}
            />
          </Animated.View>
        </View>

        <View style={styles.panel}>
          <ModeToggle mode={puzzle.mode} onChange={puzzle.setMode} />

          <View style={styles.statRow}>
            <View style={styles.statSlot}>
              <StatCard
                value={String(puzzle.movesLeft)}
                label="MOVES LEFT"
                accent={THEME.colors.sky}
              />
            </View>
            <View style={styles.statSlot}>
              <StatCard
                value={filled + '/' + level.roadLength}
                label="ROAD TILES"
                accent={THEME.colors.meadow}
              />
            </View>
            <View style={styles.statSlot}>
              <StatCard
                value={puzzle.mistakes + '/' + MAX_MISTAKES}
                label="MISTAKES"
                accent={THEME.colors.terracotta}
              />
            </View>
          </View>

          <View style={styles.hintRow}>
            <SecondaryButton
              label="HINT"
              onPress={puzzle.useHint}
              accent={THEME.colors.skyDeep}
              disabled={!puzzle.hintReady}
              full
              renderIcon={(size, color) => (
                <Lightbulb size={size} color={color} strokeWidth={2.2} />
              )}
            />
          </View>

          <Text style={styles.footnote}>
            {puzzle.mode === 'paint'
              ? 'TAP A TILE TO PAINT THE ROAD'
              : 'TAP A TILE TO MARK IT EMPTY'}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.colors.canvas,
  },
  bg: {
    flex: 1,
  },
  boardZone: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: THEME.colors.surface,
    borderTopWidth: 2,
    borderTopColor: THEME.colors.rim,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 18,
    shadowColor: '#8A5A22',
    shadowOpacity: 0.2,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: -6},
    elevation: 12,
  },
  statRow: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 10,
  },
  statSlot: {
    flex: 1,
  },
  hintRow: {
    marginTop: 12,
  },
  footnote: {
    marginTop: 10,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    textAlign: 'center',
    color: THEME.colors.textMuted,
  },
});
