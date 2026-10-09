import React, {useEffect, useRef} from 'react';
import {Animated, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SPRITES} from '../assets';
import {TILE_FEEDBACK_MS} from '../constants/config';
import {THEME} from '../constants/theme';

export type TileState = 'empty' | 'road' | 'marked' | 'nest' | 'wrong';

type Props = {
  state: TileState;
  size: number;
  r: number;
  c: number;
  onPress: (r: number, c: number) => void;
};

/**
 * One board cell. Feedback is a short transform-only animation (pop on a good
 * paint, shake on a miss) so the window settles again within ~200ms.
 */
function PuzzleTileBase({state, size, r, c, onPress}: Props) {
  const pop = useRef(new Animated.Value(1)).current;
  const nudge = useRef(new Animated.Value(0)).current;
  const prev = useRef<TileState>(state);

  useEffect(() => {
    if (prev.current === state) {
      return;
    }
    const was = prev.current;
    prev.current = state;

    if (state === 'road' && was !== 'nest') {
      pop.setValue(0.88);
      Animated.spring(pop, {
        toValue: 1,
        tension: 160,
        friction: 7,
        useNativeDriver: true,
      }).start();
    } else if (state === 'wrong') {
      Animated.sequence([
        Animated.timing(nudge, {
          toValue: 5,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(nudge, {
          toValue: -5,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(nudge, {
          toValue: 4,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(nudge, {
          toValue: 0,
          duration: TILE_FEEDBACK_MS - 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [nudge, pop, state]);

  const inner = size - 3;
  const locked = state === 'nest';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={'cell ' + (r + 1) + ' ' + (c + 1)}
      disabled={locked}
      style={[styles.press, {width: size, height: size}]}
      onPress={() => onPress(r, c)}>
      <Animated.View
        style={[
          styles.anim,
          {
            width: inner,
            height: inner,
            transform: [{scale: pop}, {translateX: nudge}],
          },
        ]}>
        {state === 'road' || state === 'nest' ? (
          <LinearGradient
            colors={THEME.gradients.road}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={[styles.face, styles.roadFace]}>
            {state === 'nest' ? (
              <Image
                source={SPRITES.nest}
                style={{
                  width: inner - 10,
                  height: inner - 10,
                  resizeMode: 'contain',
                }}
              />
            ) : (
              <View style={styles.gloss} />
            )}
          </LinearGradient>
        ) : (
          <View
            style={[
              styles.face,
              state === 'wrong' ? styles.wrongFace : null,
              state === 'marked' ? styles.markedFace : null,
              state === 'empty' ? styles.emptyFace : null,
            ]}>
            {state === 'marked' ? (
              <Text style={[styles.mark, {fontSize: Math.round(inner * 0.42)}]}>
                {'✗'}
              </Text>
            ) : null}
          </View>
        )}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  anim: {
    borderRadius: 8,
  },
  face: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  emptyFace: {
    backgroundColor: THEME.colors.surface,
    borderWidth: 1,
    borderColor: 'rgba(185,119,43,0.22)',
    borderTopColor: 'rgba(138,115,85,0.18)',
  },
  roadFace: {
    borderWidth: 1,
    borderColor: THEME.colors.meadowDeep,
  },
  markedFace: {
    backgroundColor: 'rgba(227,210,174,0.60)',
    borderWidth: 1,
    borderColor: 'rgba(185,119,43,0.26)',
  },
  wrongFace: {
    backgroundColor: THEME.colors.terracotta,
    borderWidth: 1,
    borderColor: '#D2761F',
  },
  gloss: {
    position: 'absolute',
    top: 2,
    left: 3,
    right: 3,
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.32)',
  },
  mark: {
    fontWeight: '900',
    color: THEME.colors.textSecondary,
  },
});

export default React.memo(PuzzleTileBase);
