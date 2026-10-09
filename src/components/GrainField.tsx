import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {makeRng} from '../game/rng';

type Props = {
  width: number;
  height: number;
  count: number;
  seed?: number;
  tints?: string[];
};

const DEFAULT_TINTS = [
  'rgba(255,241,216,0.10)',
  'rgba(244,198,75,0.12)',
  'rgba(236,129,71,0.09)',
  'rgba(255,241,216,0.06)',
];

/**
 * A static, deterministic speck layer — the screen's texture. It is generated
 * once inside a memo (never at module load) and never animates, so the window
 * still settles for the capture agent while the frame stays visually distinct.
 */
function GrainFieldBase({width, height, count, seed = 0x51a7c3, tints}: Props) {
  const palette = tints && tints.length > 0 ? tints : DEFAULT_TINTS;
  const dots = useMemo(() => {
    const rng = makeRng(seed);
    const out: {x: number; y: number; r: number; c: string}[] = [];
    for (let i = 0; i < count; i++) {
      out.push({
        x: rng() * width,
        y: rng() * height,
        r: 0.7 + rng() * 1.1,
        c: palette[i % palette.length],
      });
    }
    return out;
  }, [count, height, palette, seed, width]);

  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[StyleSheet.absoluteFill, styles.wrap]}>
      <Svg width={width} height={height}>
        {dots.map((d, i) => (
          <Circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.c} />
        ))}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {overflow: 'hidden'},
});

export default React.memo(GrainFieldBase);
