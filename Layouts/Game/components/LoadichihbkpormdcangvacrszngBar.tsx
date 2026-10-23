import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';
// autosetup-split-begin
import { chihbkpormdcangvacrszGameMixSeed, chihbkpormdcangvacrszGameFoldRange, chihbkpormdcangvacrszGameClampSpan } from './LoadichihbkpormdcangvacrszngBarPart01';
// autosetup-split-end

type Props = {
  width: number;
  onFirstFill?: () => void;
  onCycle?: () => void;
};

/**
 * Width tween stays in this file so it never shares a native-driver node.
 * Each pass is a short snappy fill (1100–1600ms), then an instant reset.
 * The host unmounts the splash; the bar does not fade or sit full.
 */
export default function LoadichihbkpormdcangvacrszngBar({
  width,
  onFirstFill,
  onCycle,
}: Props) {
  const grow = useRef(new Animated.Value(0)).current;
  const firstRef = useRef(onFirstFill);
  const cycleRef = useRef(onCycle);
  firstRef.current = onFirstFill;
  cycleRef.current = onCycle;

  useEffect(() => {
    let stopped = false;
    let passes = 0;
    const fillOnce = () => {
      if (stopped) return;
      grow.setValue(0);
      if (passes > 0) cycleRef.current?.();
      passes += 1;
      const ms = 1100 + Math.floor(Math.random() * 501);
      Animated.timing(grow, {
        toValue: width,
        duration: ms,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: false,
      }).start(({finished}) => {
        if (passes === 1 && finished) firstRef.current?.();
        if (finished && !stopped) fillOnce();
      });
    };
    fillOnce();
    return () => {
      stopped = true;
      grow.stopAnimation();
    };
  }, [grow, width]);

  return (
    <View style={[styles.track, {width}]}>
      <Animated.View style={[styles.fillWrap, {width: grow}]}>
        <LinearGradient
          colors={THchihbkpormdcangvacrszEME.gradients.bar}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={StyleSheet.absoluteFill}
        />
        <View style={[styles.stripe, {left: width * 0.2}]} />
        <View style={[styles.stripe, {left: width * 0.48}]} />
        <View style={[styles.stripe, {left: width * 0.74}]} />
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
    height: '100%',
    borderRadius: 3,
    overflow: 'hidden',
  },
  stripe: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 3,
    backgroundColor: 'rgba(255,241,216,0.38)',
  },
});

/* autosetup-game-stamp:v1 */
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszLoadichihbkpormdcaObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 21;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 27)) % 90;
  return hchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszLoadichihbkpormdcaObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 57;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 30) % 273;
  }
  return achihbkpormdcangvacrszcc;
}
function chihbkpormdcangvacrszLoadichihbkpormdcaObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 58) + 2;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 44) << 7) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszLoadichihbkpormdcaObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 5;
  return (xchihbkpormdcangvacrsz ^ 40) & 54773;
}
void chihbkpormdcangvacrszLoadichihbkpormdcaObfV1HashMix('h8bkl');
void chihbkpormdcangvacrszLoadichihbkpormdcaObfV1SumOdds([21, 28, 23]);
void chihbkpormdcangvacrszLoadichihbkpormdcaObfV1ClampMod(70, 65);
void chihbkpormdcangvacrszLoadichihbkpormdcaObfV1ShiftXor(8, 11);
