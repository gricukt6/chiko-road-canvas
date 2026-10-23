import React, {useEffect, useMemo, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

export type RoadRingBit = {
  id: number;
  ox: number;
  oy: number;
  size: number;
  color: string;
};

export type RoadRingBurst = {
  id: number;
  x: number;
  y: number;
  life: number;
  bits: RoadRingBit[];
};

type Props = {
  bursts: RoadRingBurst[];
  onBurstDone: (id: number) => void;
};

/**
 * Hollow gold/clay rings for Chiko Road Canvas.
 * They spawn on a circle and ease inward to the tap, then vanish.
 */
export default function LoaderRoadRing({bursts, onBurstDone}: Props) {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {bursts.map(burst => (
        <RoadRingBurstView key={burst.id} burst={burst} onDone={onBurstDone} />
      ))}
    </View>
  );
}

function RoadRingBurstView({
  burst,
  onDone,
}: {
  burst: RoadRingBurst;
  onDone: (id: number) => void;
}) {
  const travel = useRef(new Animated.Value(0)).current;
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const anim = Animated.timing(travel, {
      toValue: 1,
      duration: burst.life,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    });
    anim.start(({finished}) => {
      if (finished) doneRef.current(burst.id);
    });
    return () => anim.stop();
  }, [burst.id, burst.life, travel]);

  return (
    <View pointerEvents="none" style={[styles.origin, {left: burst.x, top: burst.y}]}>
      {burst.bits.map(bit => (
        <RoadRingBitView key={bit.id} travel={travel} bit={bit} />
      ))}
    </View>
  );
}

function RoadRingBitView({
  travel,
  bit,
}: {
  travel: Animated.Value;
  bit: RoadRingBit;
}) {
  const motion = useMemo(() => {
    const translateX = travel.interpolate({
      inputRange: [0, 1],
      outputRange: [bit.ox, 0],
    });
    const translateY = travel.interpolate({
      inputRange: [0, 1],
      outputRange: [bit.oy, 0],
    });
    const opacity = travel.interpolate({
      inputRange: [0, 0.62, 1],
      outputRange: [0.95, 0.8, 0],
    });
    const scale = travel.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.28],
    });
    return {translateX, translateY, opacity, scale};
  }, [bit.ox, bit.oy, travel]);

  return (
    <Animated.View
      style={[
        styles.ring,
        {
          width: bit.size,
          height: bit.size,
          marginLeft: -bit.size / 2,
          marginTop: -bit.size / 2,
          borderRadius: bit.size / 2,
          borderColor: bit.color,
          opacity: motion.opacity,
          transform: [{translateX: motion.translateX}, {translateY: motion.translateY}, {scale: motion.scale}],
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  origin: {
    position: 'absolute',
    width: 0,
    height: 0,
  },
  ring: {
    position: 'absolute',
    borderWidth: 1.5,
    backgroundColor: 'transparent',
  },
});
