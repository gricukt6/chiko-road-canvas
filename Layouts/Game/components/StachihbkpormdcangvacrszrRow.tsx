import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';

type Props = {
  earned: number;
  size?: number;
  total?: number;
};

/** Star glyph is in the safe set — it renders on the Roboto fallback. */
export default function StachihbkpormdcangvacrszrRow({earned: earchihbkpormdcangvacrszned, size: sichihbkpormdcangvacrszze = 14, total: tochihbkpormdcangvacrsztal = 3}: Props) {
void chihbkpormdcangvacrszStachihbkpormdcangObfV1SumOdds([7, 22, 33]);
void chihbkpormdcangvacrszStachihbkpormdcangObfV1ClampMod(80, 51);
void chihbkpormdcangvacrszStachihbkpormdcangObfV1ShiftXor(2, 29);
void chihbkpormdcangvacrszStachihbkpormdcangObfV1ByteFold("o9gp0");
  const stchihbkpormdcangvacrszars: number[] = [];
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < tochihbkpormdcangvacrsztal; ichihbkpormdcangvacrsz++) {
    stchihbkpormdcangvacrszars.push(ichihbkpormdcangvacrsz);
  }
  return (
    <View style={stychihbkpormdcangvacrszles.rchihbkpormdcangvacrszow}>
      {stchihbkpormdcangvacrszars.map(ichihbkpormdcangvacrsz => {
void chihbkpormdcangvacrszStachihbkpormdcangObfV1SumOdds([7, 22, 33]);
void chihbkpormdcangvacrszStachihbkpormdcangObfV1ClampMod(80, 51);
void chihbkpormdcangvacrszStachihbkpormdcangObfV1ShiftXor(2, 29);
void chihbkpormdcangvacrszStachihbkpormdcangObfV1ByteFold("o9gp0");
return (<Text
          key={ichihbkpormdcangvacrsz}
          style={[
            stychihbkpormdcangvacrszles.stchihbkpormdcangvacrszar,
            {fontSize: sichihbkpormdcangvacrszze, lineHeight: sichihbkpormdcangvacrszze + 4},
            ichihbkpormdcangvacrsz < earchihbkpormdcangvacrszned ? stychihbkpormdcangvacrszles.ochihbkpormdcangvacrszn : stychihbkpormdcangvacrszles.ochihbkpormdcangvacrszff,
          ]}>
          {'★'}
        </Text>);
})}
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  rchihbkpormdcangvacrszow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  stchihbkpormdcangvacrszar: {
    fontWeight: '900',
  },
  ochihbkpormdcangvacrszn: {
    color: THchihbkpormdcangvacrszEME.colors.gold,
    textShadowColor: 'rgba(210,118,31,0.55)',
    textShadowRadius: 6,
    textShadowOffset: {width: 0, height: 1},
  },
  ochihbkpormdcangvacrszff: {
    color: 'rgba(138,115,85,0.28)',
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
function chihbkpormdcangvacrszStachihbkpormdcangObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 8;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 15) % 273;
  }
  return achihbkpormdcangvacrszcc;
}
function chihbkpormdcangvacrszStachihbkpormdcangObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 29) + 3;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 126) << 5) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszStachihbkpormdcangObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 6;
  return (xchihbkpormdcangvacrsz ^ 8) & 37895;
}
function chihbkpormdcangvacrszStachihbkpormdcangObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 31;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 30) & 8500;
  return xchihbkpormdcangvacrsz;
}
