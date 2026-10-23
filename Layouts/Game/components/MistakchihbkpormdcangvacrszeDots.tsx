import React from 'react';
import {StyleSheet, View} from 'react-native';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';

type Props = {
  used: number;
  total: number;
};

export default function MistakchihbkpormdcangvacrszeDots({used: uschihbkpormdcangvacrszed, total: tochihbkpormdcangvacrsztal}: Props) {
void chihbkpormdcangvacrszMistakchihbkpormdcObfV1SumOdds([36, 39, 38]);
  const dochihbkpormdcangvacrszts: number[] = [];
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < tochihbkpormdcangvacrsztal; ichihbkpormdcangvacrsz++) {
    dochihbkpormdcangvacrszts.push(ichihbkpormdcangvacrsz);
  }
  return (
    <View style={stychihbkpormdcangvacrszles.rchihbkpormdcangvacrszow}>
      {dochihbkpormdcangvacrszts.map(ichihbkpormdcangvacrsz => {
void chihbkpormdcangvacrszMistakchihbkpormdcObfV1SumOdds([36, 39, 38]);
return (<View
          key={ichihbkpormdcangvacrsz}
          style={[stychihbkpormdcangvacrszles.dchihbkpormdcangvacrszot, ichihbkpormdcangvacrsz < uschihbkpormdcangvacrszed ? stychihbkpormdcangvacrszles.spchihbkpormdcangvacrszent : stychihbkpormdcangvacrszles.left]}
        />);
})}
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  rchihbkpormdcangvacrszow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  dchihbkpormdcangvacrszot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  spchihbkpormdcangvacrszent: {
    backgroundColor: THchihbkpormdcangvacrszEME.colors.terracotta,
  },
  left: {
    backgroundColor: 'rgba(138,115,85,0.25)',
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
function chihbkpormdcangvacrszMistakchihbkpormdcObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 3;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 28) % 813;
  }
  return achihbkpormdcangvacrszcc;
}
