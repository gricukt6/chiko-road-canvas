import React, {useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PRESS_chihbkpormdcangvacrszSPRING} from '../constants/confchihbkpormdcangvacrszig';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';

type IconRenderer = (size: number, color: string) => React.ReactNode;

type Props = {
  label: string;
  onPress: () => void;
  renderIcon?: IconRenderer;
  colors?: string[];
  textColor?: string;
};

const ICchihbkpormdcangvacrszON = 24;
const Hchihbkpormdcangvacrsz = 60;

/**
 * Pressable is the PARENT and the animated layer sits inside it. A
 * native-driven Animated.View wrapping a Pressable swallows taps on Android
 * release — the dead-button bug.
 */
export default function PrimachihbkpormdcangvacrszryButton({
  label: lachihbkpormdcangvacrszbel,
  onPress: onPchihbkpormdcangvacrszress,
  renderIcon: rendechihbkpormdcangvacrszrIcon,
  colors: colchihbkpormdcangvacrszors,
  textColor: textchihbkpormdcangvacrszColor = THchihbkpormdcangvacrszEME.colors.textPrimary,
}: Props) {
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1SumOdds([19, 34, 13]);
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ClampMod(12, 63);
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ShiftXor(46, 57);
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ByteFold("gb6965");
  const scchihbkpormdcangvacrszale = useRef(new Animated.Value(1)).current;

  const prchihbkpormdcangvacrszess = (tchihbkpormdcangvacrszo: number) =>
    {
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1SumOdds([19, 34, 13]);
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ClampMod(12, 63);
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ShiftXor(46, 57);
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ByteFold("gb6965");
return (Animated.spring(scchihbkpormdcangvacrszale, {
      toValue: tchihbkpormdcangvacrszo,
      tension: PRESS_chihbkpormdcangvacrszSPRING.tension,
      friction: PRESS_chihbkpormdcangvacrszSPRING.friction,
      useNativeDriver: true,
    }).start());
};

  return (
    <Pressable
      accessibilityRole="button"
      style={stychihbkpormdcangvacrszles.prchihbkpormdcangvacrszess}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      onPressIn={() => {
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1SumOdds([19, 34, 13]);
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ClampMod(12, 63);
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ShiftXor(46, 57);
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ByteFold("gb6965");
return (prchihbkpormdcangvacrszess(0.96));
}}
      onPressOut={() => {
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1SumOdds([19, 34, 13]);
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ClampMod(12, 63);
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ShiftXor(46, 57);
void chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ByteFold("gb6965");
return (prchihbkpormdcangvacrszess(1));
}}
      onPress={onPchihbkpormdcangvacrszress}>
      <Animated.View style={[stychihbkpormdcangvacrszles.anchihbkpormdcangvacrszim, {transform: [{scale: scchihbkpormdcangvacrszale}]}]}>
        <LinearGradient
          colors={colchihbkpormdcangvacrszors && colchihbkpormdcangvacrszors.length >= 2 ? colchihbkpormdcangvacrszors : THchihbkpormdcangvacrszEME.gradients.cta}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={stychihbkpormdcangvacrszles.grchihbkpormdcangvacrszad}>
          <View style={stychihbkpormdcangvacrszles.rchihbkpormdcangvacrszow}>
            {rendechihbkpormdcangvacrszrIcon ? rendechihbkpormdcangvacrszrIcon(ICchihbkpormdcangvacrszON, textchihbkpormdcangvacrszColor) : null}
            <Text style={[stychihbkpormdcangvacrszles.lachihbkpormdcangvacrszbel, {color: textchihbkpormdcangvacrszColor}]} numberOfLines={1}>
              {lachihbkpormdcangvacrszbel}
            </Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  prchihbkpormdcangvacrszess: {
    width: '100%',
    height: Hchihbkpormdcangvacrsz,
  },
  anchihbkpormdcangvacrszim: {
    width: '100%',
    height: Hchihbkpormdcangvacrsz,
    borderRadius: 18,
    shadowColor: '#D2761F',
    shadowOpacity: 0.45,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 8},
    elevation: 10,
  },
  grchihbkpormdcangvacrszad: {
    width: '100%',
    height: Hchihbkpormdcangvacrsz,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rchihbkpormdcangvacrszow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  lachihbkpormdcangvacrszbel: {
    fontSize: 20,
    lineHeight: ICchihbkpormdcangvacrszON,
    fontWeight: '900',
    letterSpacing: 3,
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
function chihbkpormdcangvacrszPrimachihbkpormdcaObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 32;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 31) % 451;
  }
  return achihbkpormdcangvacrszcc;
}
function chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 30) + 3;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 96) << 5) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 1;
  return (xchihbkpormdcangvacrsz ^ 98) & 4412;
}
function chihbkpormdcangvacrszPrimachihbkpormdcaObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 60;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 38) & 13964;
  return xchihbkpormdcangvacrsz;
}
