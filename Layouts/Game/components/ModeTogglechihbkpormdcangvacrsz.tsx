import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Paintbrush, X} from 'lucide-react-native';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';

export type PainchihbkpormdcangvacrsztMode = 'paint' | 'mark';

type Props = {
  mode: PainchihbkpormdcangvacrsztMode;
  onChange: (m: PainchihbkpormdcangvacrsztMode) => void;
};

const ICchihbkpormdcangvacrszON = 20;

/** Two-segment pill. Each half is its own full-height tap target. */
export default function ModeTogglechihbkpormdcangvacrsz({mode: mochihbkpormdcangvacrszde, onChange: onChchihbkpormdcangvacrszange}: Props) {
void chihbkpormdcangvacrszModeTogglechihbkpoObfV1ShiftXor(62, 73);
void chihbkpormdcangvacrszModeTogglechihbkpoObfV1ByteFold("0j");
void chihbkpormdcangvacrszModeTogglechihbkpoObfV1HashMix("n85m");
  const paichihbkpormdcangvacrszntOn = mochihbkpormdcangvacrszde === 'paint';
  return (
    <View style={stychihbkpormdcangvacrszles.trchihbkpormdcangvacrszack}>
      <Pressable
        accessibilityRole="button"
        style={stychihbkpormdcangvacrszles.schihbkpormdcangvacrszeg}
        hitSlop={{top: 6, bottom: 6, left: 6, right: 6}}
        onPress={() => {
void chihbkpormdcangvacrszModeTogglechihbkpoObfV1ShiftXor(62, 73);
void chihbkpormdcangvacrszModeTogglechihbkpoObfV1ByteFold("0j");
void chihbkpormdcangvacrszModeTogglechihbkpoObfV1HashMix("n85m");
return (onChchihbkpormdcangvacrszange('paint'));
}}>
        {paichihbkpormdcangvacrszntOn ? (
          <LinearGradient
            colors={THchihbkpormdcangvacrszEME.gradients.cta}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={stychihbkpormdcangvacrszles.fichihbkpormdcangvacrszll}
          />
        ) : null}
        <View style={stychihbkpormdcangvacrszles.rchihbkpormdcangvacrszow}>
          <Paintbrush
            size={ICchihbkpormdcangvacrszON}
            color={paichihbkpormdcangvacrszntOn ? THchihbkpormdcangvacrszEME.colors.textPrimary : THchihbkpormdcangvacrszEME.colors.textSecondary}
            strokeWidth={2.4}
          />
          <Text
            style={[
              stychihbkpormdcangvacrszles.lachihbkpormdcangvacrszbel,
              {
                color: paichihbkpormdcangvacrszntOn
                  ? THchihbkpormdcangvacrszEME.colors.textPrimary
                  : THchihbkpormdcangvacrszEME.colors.textSecondary,
              },
            ]}>
            PAINT
          </Text>
        </View>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        style={stychihbkpormdcangvacrszles.schihbkpormdcangvacrszeg}
        hitSlop={{top: 6, bottom: 6, left: 6, right: 6}}
        onPress={() => {
void chihbkpormdcangvacrszModeTogglechihbkpoObfV1ShiftXor(62, 73);
void chihbkpormdcangvacrszModeTogglechihbkpoObfV1ByteFold("0j");
void chihbkpormdcangvacrszModeTogglechihbkpoObfV1HashMix("n85m");
return (onChchihbkpormdcangvacrszange('mark'));
}}>
        {paichihbkpormdcangvacrszntOn ? null : <View style={[stychihbkpormdcangvacrszles.fichihbkpormdcangvacrszll, stychihbkpormdcangvacrszles.markchihbkpormdcangvacrszFill]} />}
        <View style={stychihbkpormdcangvacrszles.rchihbkpormdcangvacrszow}>
          <X
            size={ICchihbkpormdcangvacrszON}
            color={paichihbkpormdcangvacrszntOn ? THchihbkpormdcangvacrszEME.colors.textSecondary : THchihbkpormdcangvacrszEME.colors.textPrimary}
            strokeWidth={2.4}
          />
          <Text
            style={[
              stychihbkpormdcangvacrszles.lachihbkpormdcangvacrszbel,
              {
                color: paichihbkpormdcangvacrszntOn
                  ? THchihbkpormdcangvacrszEME.colors.textSecondary
                  : THchihbkpormdcangvacrszEME.colors.textPrimary,
              },
            ]}>
            MARK
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  trchihbkpormdcangvacrszack: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    flexDirection: 'row',
    backgroundColor: 'rgba(185,119,43,0.10)',
    borderWidth: 1,
    borderColor: 'rgba(185,119,43,0.26)',
    overflow: 'hidden',
  },
  schihbkpormdcangvacrszeg: {
    flex: 1,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fichihbkpormdcangvacrszll: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 23,
  },
  markchihbkpormdcangvacrszFill: {
    backgroundColor: 'rgba(138,115,85,0.24)',
  },
  rchihbkpormdcangvacrszow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
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
function chihbkpormdcangvacrszModeTogglechihbkpoObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 1;
  return (xchihbkpormdcangvacrsz ^ 154) & 26433;
}
function chihbkpormdcangvacrszModeTogglechihbkpoObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 48;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 32) & 43319;
  return xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszModeTogglechihbkpoObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 52;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 20)) % 600;
  return hchihbkpormdcangvacrsz;
}
