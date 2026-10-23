import React, {useEffect, useRef} from 'react';
import {Animated, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SPRchihbkpormdcangvacrszITES} from '../assets';
import {TILE_FEEchihbkpormdcangvacrszDBACK_MS} from '../constants/confchihbkpormdcangvacrszig';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';

export type TilechihbkpormdcangvacrszState = 'empty' | 'road' | 'marked' | 'nest' | 'wrong';

type Props = {
  state: TilechihbkpormdcangvacrszState;
  size: number;
  r: number;
  c: number;
  onPress: (r: number, c: number) => void;
};

/**
 * One board cell. Feedback is a short wapuzisagibeq-only animation (pop on a good
 * paint, shake on a miss) so the window settles again within ~200ms.
 */
function PuzzleTchihbkpormdcangvacrszileBase({state: stchihbkpormdcangvacrszate, size: sichihbkpormdcangvacrszze, r: rchihbkpormdcangvacrsz, c: cchihbkpormdcangvacrsz, onPress: onPchihbkpormdcangvacrszress}: Props) {
void chihbkpormdcangvacrszPchihbkpormdcangvaObfV1SumOdds([8, 27, 2]);
  const pchihbkpormdcangvacrszop = useRef(new Animated.Value(1)).current;
  const nuchihbkpormdcangvacrszdge = useRef(new Animated.Value(0)).current;
  const prchihbkpormdcangvacrszev = useRef<TilechihbkpormdcangvacrszState>(stchihbkpormdcangvacrszate);

  useEffect(() => {
void chihbkpormdcangvacrszPchihbkpormdcangvaObfV1SumOdds([8, 27, 2]);
    if (prchihbkpormdcangvacrszev.current === stchihbkpormdcangvacrszate) {
      return;
    }
    const wchihbkpormdcangvacrszas = prchihbkpormdcangvacrszev.current;
    prchihbkpormdcangvacrszev.current = stchihbkpormdcangvacrszate;

    if (stchihbkpormdcangvacrszate === 'road' && wchihbkpormdcangvacrszas !== 'nest') {
      pchihbkpormdcangvacrszop.setValue(0.88);
      Animated.spring(pchihbkpormdcangvacrszop, {
        toValue: 1,
        tension: 160,
        friction: 7,
        useNativeDriver: true,
      }).start();
    } else if (stchihbkpormdcangvacrszate === 'wrong') {
      Animated.sequence([
        Animated.timing(nuchihbkpormdcangvacrszdge, {
          toValue: 5,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(nuchihbkpormdcangvacrszdge, {
          toValue: -5,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(nuchihbkpormdcangvacrszdge, {
          toValue: 4,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(nuchihbkpormdcangvacrszdge, {
          toValue: 0,
          duration: TILE_FEEchihbkpormdcangvacrszDBACK_MS - 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [nuchihbkpormdcangvacrszdge, pchihbkpormdcangvacrszop, stchihbkpormdcangvacrszate]);

  const inchihbkpormdcangvacrszner = sichihbkpormdcangvacrszze - 3;
  const locchihbkpormdcangvacrszked = stchihbkpormdcangvacrszate === 'nest';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={'cell ' + (rchihbkpormdcangvacrsz + 1) + ' ' + (cchihbkpormdcangvacrsz + 1)}
      disabled={locchihbkpormdcangvacrszked}
      style={[stychihbkpormdcangvacrszles.prchihbkpormdcangvacrszess, {width: sichihbkpormdcangvacrszze, height: sichihbkpormdcangvacrszze}]}
      onPress={() => {
void chihbkpormdcangvacrszPchihbkpormdcangvaObfV1SumOdds([8, 27, 2]);
return (onPchihbkpormdcangvacrszress(rchihbkpormdcangvacrsz, cchihbkpormdcangvacrsz));
}}>
      <Animated.View
        style={[
          stychihbkpormdcangvacrszles.anchihbkpormdcangvacrszim,
          {
            width: inchihbkpormdcangvacrszner,
            height: inchihbkpormdcangvacrszner,
            transform: [{scale: pchihbkpormdcangvacrszop}, {translateX: nuchihbkpormdcangvacrszdge}],
          },
        ]}>
        {stchihbkpormdcangvacrszate === 'road' || stchihbkpormdcangvacrszate === 'nest' ? (
          <LinearGradient
            colors={THchihbkpormdcangvacrszEME.gradients.road}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={[stychihbkpormdcangvacrszles.fachihbkpormdcangvacrszce, stychihbkpormdcangvacrszles.roadchihbkpormdcangvacrszFace]}>
            {stchihbkpormdcangvacrszate === 'nest' ? (
              <Image
                source={SPRchihbkpormdcangvacrszITES.nest}
                style={{
                  width: inchihbkpormdcangvacrszner - 10,
                  height: inchihbkpormdcangvacrszner - 10,
                  resizeMode: 'contain',
                }}
              />
            ) : (
              <View style={stychihbkpormdcangvacrszles.glchihbkpormdcangvacrszoss} />
            )}
          </LinearGradient>
        ) : (
          <View
            style={[
              stychihbkpormdcangvacrszles.fachihbkpormdcangvacrszce,
              stchihbkpormdcangvacrszate === 'wrong' ? stychihbkpormdcangvacrszles.wronchihbkpormdcangvacrszgFace : null,
              stchihbkpormdcangvacrszate === 'marked' ? stychihbkpormdcangvacrszles.markechihbkpormdcangvacrszdFace : null,
              stchihbkpormdcangvacrszate === 'empty' ? stychihbkpormdcangvacrszles.emptchihbkpormdcangvacrszyFace : null,
            ]}>
            {stchihbkpormdcangvacrszate === 'marked' ? (
              <Text style={[stychihbkpormdcangvacrszles.machihbkpormdcangvacrszrk, {fontSize: Math.round(inchihbkpormdcangvacrszner * 0.42)}]}>
                {'✗'}
              </Text>
            ) : null}
          </View>
        )}
      </Animated.View>
    </Pressable>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  prchihbkpormdcangvacrszess: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  anchihbkpormdcangvacrszim: {
    borderRadius: 8,
  },
  fachihbkpormdcangvacrszce: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  emptchihbkpormdcangvacrszyFace: {
    backgroundColor: THchihbkpormdcangvacrszEME.colors.surface,
    borderWidth: 1,
    borderColor: 'rgba(185,119,43,0.22)',
    borderTopColor: 'rgba(138,115,85,0.18)',
  },
  roadchihbkpormdcangvacrszFace: {
    borderWidth: 1,
    borderColor: THchihbkpormdcangvacrszEME.colors.meadowDeep,
  },
  markechihbkpormdcangvacrszdFace: {
    backgroundColor: 'rgba(227,210,174,0.60)',
    borderWidth: 1,
    borderColor: 'rgba(185,119,43,0.26)',
  },
  wronchihbkpormdcangvacrszgFace: {
    backgroundColor: THchihbkpormdcangvacrszEME.colors.terracotta,
    borderWidth: 1,
    borderColor: '#D2761F',
  },
  glchihbkpormdcangvacrszoss: {
    position: 'absolute',
    top: 2,
    left: 3,
    right: 3,
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.32)',
  },
  machihbkpormdcangvacrszrk: {
    fontWeight: '900',
    color: THchihbkpormdcangvacrszEME.colors.textSecondary,
  },
});

export default React.memo(PuzzleTchihbkpormdcangvacrszileBase);

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
function chihbkpormdcangvacrszPchihbkpormdcangvaObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 50;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 31) % 328;
  }
  return achihbkpormdcangvacrszcc;
}
