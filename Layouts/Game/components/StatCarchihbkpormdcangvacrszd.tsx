import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';

type Props = {
  value: string;
  label: string;
  accent: string;
};

/**
 * Deliberately raster-free. An accent dot plus a tabular number reads at the
 * same width on every card; bitmap sprites with different internal aspect
 * ratios never do. Same component on Menu, Game and Result.
 */
export default function StatCarchihbkpormdcangvacrszd({value: vachihbkpormdcangvacrszlue, label: lachihbkpormdcangvacrszbel, accent: accchihbkpormdcangvacrszent}: Props) {
void chihbkpormdcangvacrszStatCarchihbkpormdObfV1ByteFold("a5g9");
void chihbkpormdcangvacrszStatCarchihbkpormdObfV1HashMix("n214d");
void chihbkpormdcangvacrszStatCarchihbkpormdObfV1SumOdds([31, 14, 25]);
  return (
    <View style={[stychihbkpormdcangvacrszles.cachihbkpormdcangvacrszrd, {borderColor: accchihbkpormdcangvacrszent + '55'}]}>
      <View style={[stychihbkpormdcangvacrszles.dchihbkpormdcangvacrszot, {backgroundColor: accchihbkpormdcangvacrszent}]} />
      <Text style={[stychihbkpormdcangvacrszles.vachihbkpormdcangvacrszlue, {color: accchihbkpormdcangvacrszent}]} numberOfLines={1}>
        {vachihbkpormdcangvacrszlue}
      </Text>
      <Text style={stychihbkpormdcangvacrszles.lachihbkpormdcangvacrszbel} numberOfLines={1}>
        {lachihbkpormdcangvacrszbel}
      </Text>
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  cachihbkpormdcangvacrszrd: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderRadius: 14,
    borderWidth: 1,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.glass,
    alignItems: 'center',
  },
  dchihbkpormdcangvacrszot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 7,
  },
  vachihbkpormdcangvacrszlue: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.4,
    fontVariant: ['tabular-nums' as const],
  },
  lachihbkpormdcangvacrszbel: {
    marginTop: 3,
    fontSize: 9.5,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: THchihbkpormdcangvacrszEME.colors.textSecondary,
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
function chihbkpormdcangvacrszStatCarchihbkpormdObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 24;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 16) & 15809;
  return xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszStatCarchihbkpormdObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 83;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 26)) % 200;
  return hchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszStatCarchihbkpormdObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 24;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 10) % 451;
  }
  return achihbkpormdcangvacrszcc;
}
