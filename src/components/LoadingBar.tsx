import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {THEME} from '../constants/theme';

type Props = {
  width: number;
  durationMs: number;
};

/**
 * Isolated on purpose: this is the one place in the app that animates a layout
 * prop, so no native-driver animation shares the file. The sweep is SHORT and
 * finite — a bar tween that lasts the loader's whole life keeps the window
 * repainting and wedges uiautomator on the splash.
 */
export default function LoadingBar({width, durationMs}: Props) {
  const grow = useRef(new Animated.Value(8)).current;

  useEffect(() => {
    Animated.timing(grow, {
      toValue: width,
      duration: durationMs,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, [durationMs, grow, width]);

  return (
    <View style={[styles.track, {width}]}>
      <Animated.View style={[styles.fillWrap, {width: grow}]}>
        <LinearGradient
          colors={THEME.gradients.bar}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.fill}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,241,216,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(244,198,75,0.35)',
    overflow: 'hidden',
  },
  fillWrap: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  fill: {
    flex: 1,
    borderRadius: 3,
  },
});
