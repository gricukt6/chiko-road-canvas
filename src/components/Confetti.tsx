import React, {useEffect, useMemo, useRef} from 'react';
import {Animated, Dimensions, Easing, StyleSheet, View} from 'react-native';
import {makeRng} from '../game/rng';

const {width: W} = Dimensions.get('window');
const COLORS = ['#F4C64B', '#EC8147', '#63B96C', '#4B9CD2'];
const PIECES = 24;
const FALL_MS = 900;

type Piece = {x: number; delay: number; color: string; tilt: string};

/** One pass, then still. A looping celebration never lets the window settle. */
export default function Confetti() {
  const drop = useRef(new Animated.Value(0)).current;

  const pieces = useMemo<Piece[]>(() => {
    const rng = makeRng(0x2bc1f7);
    const out: Piece[] = [];
    for (let i = 0; i < PIECES; i++) {
      out.push({
        x: rng() * (W - 20),
        delay: Math.round(rng() * 280),
        color: COLORS[i % COLORS.length],
        tilt: Math.round(rng() * 60 - 30) + 'deg',
      });
    }
    return out;
  }, []);

  useEffect(() => {
    Animated.timing(drop, {
      toValue: 1,
      duration: FALL_MS,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [drop]);

  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={StyleSheet.absoluteFill}>
      {pieces.map((p, i) => {
        const shift = drop.interpolate({
          inputRange: [0, 1],
          outputRange: [-40 - p.delay, 420],
        });
        const dim = drop.interpolate({
          inputRange: [0, 0.75, 1],
          outputRange: [1, 1, 0],
        });
        return (
          <Animated.View
            key={i}
            style={[
              styles.piece,
              {
                left: p.x,
                backgroundColor: p.color,
                opacity: dim,
                transform: [{translateY: shift}, {rotate: p.tilt}],
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  piece: {
    position: 'absolute',
    top: 90,
    width: 6,
    height: 10,
    borderRadius: 2,
  },
});
