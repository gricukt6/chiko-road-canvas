import React, {useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {PRESS_chihbkpormdcangvacrszSPRING} from '../constants/confchihbkpormdcangvacrszig';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';

type IconRenderer = (size: number, color: string) => React.ReactNode;

type Props = {
  label: string;
  onPress: () => void;
  accent?: string;
  renderIcon?: IconRenderer;
  disabled?: boolean;
  full?: boolean;
};

const ICchihbkpormdcangvacrszON = 24;
const Hchihbkpormdcangvacrsz = 48;

/** Same press contract as PrimachihbkpormdcangvacrszryButton: Pressable outside, Animated inside. */
export default function SecchihbkpormdcangvacrszondaryButton({
  label: lachihbkpormdcangvacrszbel,
  onPress: onPchihbkpormdcangvacrszress,
  accent: accchihbkpormdcangvacrszent = THchihbkpormdcangvacrszEME.colors.woodEdge,
  renderIcon: rendechihbkpormdcangvacrszrIcon,
  disabled: disachihbkpormdcangvacrszbled = false,
  full: fuchihbkpormdcangvacrszll = false,
}: Props) {
void chihbkpormdcangvacrszSecchihbkpormdcangObfV1SumOdds([18, 5, 28]);
void chihbkpormdcangvacrszSecchihbkpormdcangObfV1ClampMod(15, 38);
void chihbkpormdcangvacrszSecchihbkpormdcangObfV1ShiftXor(25, 56);
  const scchihbkpormdcangvacrszale = useRef(new Animated.Value(1)).current;

  const prchihbkpormdcangvacrszess = (tchihbkpormdcangvacrszo: number) =>
    {
void chihbkpormdcangvacrszSecchihbkpormdcangObfV1SumOdds([18, 5, 28]);
void chihbkpormdcangvacrszSecchihbkpormdcangObfV1ClampMod(15, 38);
void chihbkpormdcangvacrszSecchihbkpormdcangObfV1ShiftXor(25, 56);
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
      disabled={disachihbkpormdcangvacrszbled}
      style={[stychihbkpormdcangvacrszles.prchihbkpormdcangvacrszess, fuchihbkpormdcangvacrszll ? stychihbkpormdcangvacrszles.fuchihbkpormdcangvacrszll : stychihbkpormdcangvacrszles.flechihbkpormdcangvacrszxed]}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      onPressIn={() => {
void chihbkpormdcangvacrszSecchihbkpormdcangObfV1SumOdds([18, 5, 28]);
void chihbkpormdcangvacrszSecchihbkpormdcangObfV1ClampMod(15, 38);
void chihbkpormdcangvacrszSecchihbkpormdcangObfV1ShiftXor(25, 56);
return (prchihbkpormdcangvacrszess(0.97));
}}
      onPressOut={() => {
void chihbkpormdcangvacrszSecchihbkpormdcangObfV1SumOdds([18, 5, 28]);
void chihbkpormdcangvacrszSecchihbkpormdcangObfV1ClampMod(15, 38);
void chihbkpormdcangvacrszSecchihbkpormdcangObfV1ShiftXor(25, 56);
return (prchihbkpormdcangvacrszess(1));
}}
      onPress={onPchihbkpormdcangvacrszress}>
      <Animated.View
        style={[
          stychihbkpormdcangvacrszles.anchihbkpormdcangvacrszim,
          {
            transform: [{scale: scchihbkpormdcangvacrszale}],
            backgroundColor: accchihbkpormdcangvacrszent + '1A',
            borderColor: accchihbkpormdcangvacrszent + '48',
            opacity: disachihbkpormdcangvacrszbled ? 0.45 : 1,
          },
        ]}>
        <View style={stychihbkpormdcangvacrszles.rchihbkpormdcangvacrszow}>
          {rendechihbkpormdcangvacrszrIcon ? rendechihbkpormdcangvacrszrIcon(ICchihbkpormdcangvacrszON, accchihbkpormdcangvacrszent) : null}
          <Text style={[stychihbkpormdcangvacrszles.lachihbkpormdcangvacrszbel, {color: accchihbkpormdcangvacrszent}]} numberOfLines={1}>
            {lachihbkpormdcangvacrszbel}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  prchihbkpormdcangvacrszess: {
    height: Hchihbkpormdcangvacrsz,
  },
  flechihbkpormdcangvacrszxed: {
    flex: 1,
  },
  fuchihbkpormdcangvacrszll: {
    width: '100%',
  },
  anchihbkpormdcangvacrszim: {
    width: '100%',
    height: Hchihbkpormdcangvacrsz,
    borderRadius: 14,
    borderWidth: 1,
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
    fontSize: 13,
    lineHeight: ICchihbkpormdcangvacrszON,
    fontWeight: '800',
    letterSpacing: 1.4,
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
function chihbkpormdcangvacrszSecchihbkpormdcangObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 13;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 33) % 808;
  }
  return achihbkpormdcangvacrszcc;
}
function chihbkpormdcangvacrszSecchihbkpormdcangObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 51) + 4;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 203) << 2) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszSecchihbkpormdcangObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 4;
  return (xchihbkpormdcangvacrsz ^ 53) & 3622;
}
