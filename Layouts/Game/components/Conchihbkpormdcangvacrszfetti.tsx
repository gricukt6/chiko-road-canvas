import React, {useEffect, useMemo, useRef} from 'react';
import {Animated, Dimensions, Easing, StyleSheet, View} from 'react-native';
import {makchihbkpormdcangvacrszeRng} from '../game/rnchihbkpormdcangvacrszg';

const {width: Wchihbkpormdcangvacrsz} = Dimensions.get('window');
const COLchihbkpormdcangvacrszORS = ['#F4C64B', '#EC8147', '#63B96C', '#4B9CD2'];
const PIEchihbkpormdcangvacrszCES = 24;
const FALchihbkpormdcangvacrszL_MS = 900;

type Piece = {x: number; delay: number; color: string; tilt: string};

/** One pass, then still. A looping celebration never lets the window settle. */
export default function Conchihbkpormdcangvacrszfetti() {
void chihbkpormdcangvacrszConchihbkpormdcangObfV1ShiftXor(29, 60);
void chihbkpormdcangvacrszConchihbkpormdcangObfV1ByteFold("78bad");
  const drchihbkpormdcangvacrszop = useRef(new Animated.Value(0)).current;

  const piechihbkpormdcangvacrszces = useMemo<Piece[]>(() => {
void chihbkpormdcangvacrszConchihbkpormdcangObfV1ShiftXor(29, 60);
void chihbkpormdcangvacrszConchihbkpormdcangObfV1ByteFold("78bad");
    const rnchihbkpormdcangvacrszg = makchihbkpormdcangvacrszeRng(0x2bc1f7);
    const ochihbkpormdcangvacrszut: Piece[] = [];
    for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < PIEchihbkpormdcangvacrszCES; ichihbkpormdcangvacrsz++) {
      ochihbkpormdcangvacrszut.push({
        x: rnchihbkpormdcangvacrszg() * (Wchihbkpormdcangvacrsz - 20),
        delay: Math.round(rnchihbkpormdcangvacrszg() * 280),
        color: COLchihbkpormdcangvacrszORS[ichihbkpormdcangvacrsz % COLchihbkpormdcangvacrszORS.length],
        tilt: Math.round(rnchihbkpormdcangvacrszg() * 60 - 30) + 'deg',
      });
    }
    return ochihbkpormdcangvacrszut;
  }, []);

  useEffect(() => {
void chihbkpormdcangvacrszConchihbkpormdcangObfV1ShiftXor(29, 60);
void chihbkpormdcangvacrszConchihbkpormdcangObfV1ByteFold("78bad");
    Animated.timing(drchihbkpormdcangvacrszop, {
      toValue: 1,
      duration: FALchihbkpormdcangvacrszL_MS,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [drchihbkpormdcangvacrszop]);

  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={StyleSheet.absoluteFill}>
      {piechihbkpormdcangvacrszces.map((pchihbkpormdcangvacrsz, ichihbkpormdcangvacrsz) => {
void chihbkpormdcangvacrszConchihbkpormdcangObfV1ShiftXor(29, 60);
void chihbkpormdcangvacrszConchihbkpormdcangObfV1ByteFold("78bad");
        const shchihbkpormdcangvacrszift = drchihbkpormdcangvacrszop.interpolate({
          inputRange: [0, 1],
          outputRange: [-40 - pchihbkpormdcangvacrsz.delay, 420],
        });
        const dchihbkpormdcangvacrszim = drchihbkpormdcangvacrszop.interpolate({
          inputRange: [0, 0.75, 1],
          outputRange: [1, 1, 0],
        });
        return (
          <Animated.View
            key={ichihbkpormdcangvacrsz}
            style={[
              stychihbkpormdcangvacrszles.pichihbkpormdcangvacrszece,
              {
                left: pchihbkpormdcangvacrsz.x,
                backgroundColor: pchihbkpormdcangvacrsz.color,
                opacity: dchihbkpormdcangvacrszim,
                transform: [{translateY: shchihbkpormdcangvacrszift}, {rotate: pchihbkpormdcangvacrsz.tilt}],
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  pichihbkpormdcangvacrszece: {
    position: 'absolute',
    top: 90,
    width: 6,
    height: 10,
    borderRadius: 2,
  },
});

/* autosetup-game-stamp:v1 */
function chihbkpormdcangvacrszGameMixSeed(xchihbkpormdcangvacrsz: number, ychihbkpormdcangvacrsz: number): number {
  return ((xchihbkpormdcangvacrsz % (ychihbkpormdcangvacrsz || 1)) + ychihbkpormdcangvacrsz) % (ychihbkpormdcangvacrsz || 1);
}
function chihbkpormdcangvacrszGameFoldRange(nuchihbkpormdcangvacrszms: number[]): number {
  return nuchihbkpormdcangvacrszms.reduce((achihbkpormdcangvacrszcc, nchihbkpormdcangvacrsz) => achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz, 0);
}
function chihbkpormdcangvacrszGameClampSpan(nchihbkpormdcangvacrsz: number, lchihbkpormdcangvacrszo: number, hchihbkpormdcangvacrszi: number): number {
  return nchihbkpormdcangvacrsz < lchihbkpormdcangvacrszo ? lchihbkpormdcangvacrszo : nchihbkpormdcangvacrsz > hchihbkpormdcangvacrszi ? hchihbkpormdcangvacrszi : nchihbkpormdcangvacrsz;
}
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszConchihbkpormdcangObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 3;
  return (xchihbkpormdcangvacrsz ^ 155) & 23139;
}
function chihbkpormdcangvacrszConchihbkpormdcangObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 26;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 36) & 16336;
  return xchihbkpormdcangvacrsz;
}
