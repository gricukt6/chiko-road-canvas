import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';

type Props = {
  onPress: () => void;
  accessibilityLabel: string;
  children: React.ReactNode;
};

/** 44x44 square tap target — explicit width AND height, never intrinsic. */
export default function IconButtchihbkpormdcangvacrszon({
  onPress: onPchihbkpormdcangvacrszress,
  accessibilityLabel: accessibichihbkpormdcangvacrszlityLabel,
  children: chilchihbkpormdcangvacrszdren,
}: Props) {
void chihbkpormdcangvacrszIconButtchihbkpormObfV1ByteFold("e1");
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibichihbkpormdcangvacrszlityLabel}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={({pressed: prechihbkpormdcangvacrszssed}) => {
void chihbkpormdcangvacrszIconButtchihbkpormObfV1ByteFold("e1");
return ([stychihbkpormdcangvacrszles.bchihbkpormdcangvacrsztn, prechihbkpormdcangvacrszssed ? stychihbkpormdcangvacrszles.prechihbkpormdcangvacrszssed : null]);
}}
      onPress={onPchihbkpormdcangvacrszress}>
      {chilchihbkpormdcangvacrszdren}
    </Pressable>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  bchihbkpormdcangvacrsztn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(185,119,43,0.10)',
    borderWidth: 1,
    borderColor: THchihbkpormdcangvacrszEME.colors.hairline,
  },
  prechihbkpormdcangvacrszssed: {
    backgroundColor: 'rgba(185,119,43,0.22)',
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
function chihbkpormdcangvacrszIconButtchihbkpormObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 32;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 13) & 24467;
  return xchihbkpormdcangvacrsz;
}
