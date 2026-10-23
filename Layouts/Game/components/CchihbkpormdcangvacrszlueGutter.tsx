import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';

type Props = {
  hints: number[][];
  axis: 'row' | 'col';
  satisfied: boolean[];
  tile: number;
  thickness: number;
};

/** The hint lane along one edge of the tray. Satisfied lines dim out. */
export default function CchihbkpormdcangvacrszlueGutter({
  hints: hichihbkpormdcangvacrsznts,
  axis: axchihbkpormdcangvacrszis,
  satisfied: satichihbkpormdcangvacrszsfied,
  tile: tichihbkpormdcangvacrszle,
  thickness: thicchihbkpormdcangvacrszkness,
}: Props) {
void chihbkpormdcangvacrszCchihbkpormdcangvaObfV1HashMix("bin2");
void chihbkpormdcangvacrszCchihbkpormdcangvaObfV1SumOdds([26, 13, 36]);
void chihbkpormdcangvacrszCchihbkpormdcangvaObfV1ClampMod(23, 14);
void chihbkpormdcangvacrszCchihbkpormdcangvaObfV1ShiftXor(17, 48);
  const ischihbkpormdcangvacrszCol = axchihbkpormdcangvacrszis === 'col';
  return (
    <View style={ischihbkpormdcangvacrszCol ? stychihbkpormdcangvacrszles.colchihbkpormdcangvacrszLane : stychihbkpormdcangvacrszles.rowchihbkpormdcangvacrszLane}>
      {hichihbkpormdcangvacrsznts.map((lichihbkpormdcangvacrszne, ichihbkpormdcangvacrsz) => {
void chihbkpormdcangvacrszCchihbkpormdcangvaObfV1HashMix("bin2");
void chihbkpormdcangvacrszCchihbkpormdcangvaObfV1SumOdds([26, 13, 36]);
void chihbkpormdcangvacrszCchihbkpormdcangvaObfV1ClampMod(23, 14);
void chihbkpormdcangvacrszCchihbkpormdcangvaObfV1ShiftXor(17, 48);
return (<View
          key={ichihbkpormdcangvacrsz}
          style={[
            ischihbkpormdcangvacrszCol
              ? {width: tichihbkpormdcangvacrszle, height: thicchihbkpormdcangvacrszkness}
              : {width: thicchihbkpormdcangvacrszkness, height: tichihbkpormdcangvacrszle},
            ischihbkpormdcangvacrszCol ? stychihbkpormdcangvacrszles.colchihbkpormdcangvacrszCell : stychihbkpormdcangvacrszles.rowchihbkpormdcangvacrszCell,
          ]}>
          {lichihbkpormdcangvacrszne.map((nchihbkpormdcangvacrsz, kchihbkpormdcangvacrsz) => {
void chihbkpormdcangvacrszCchihbkpormdcangvaObfV1HashMix("bin2");
void chihbkpormdcangvacrszCchihbkpormdcangvaObfV1SumOdds([26, 13, 36]);
void chihbkpormdcangvacrszCchihbkpormdcangvaObfV1ClampMod(23, 14);
void chihbkpormdcangvacrszCchihbkpormdcangvaObfV1ShiftXor(17, 48);
return (<Text
              key={kchihbkpormdcangvacrsz}
              style={[
                stychihbkpormdcangvacrszles.nchihbkpormdcangvacrszum,
                satichihbkpormdcangvacrszsfied[ichihbkpormdcangvacrsz] ? stychihbkpormdcangvacrszles.dochihbkpormdcangvacrszne : stychihbkpormdcangvacrszles.penchihbkpormdcangvacrszding,
              ]}>
              {nchihbkpormdcangvacrsz}
            </Text>);
})}
        </View>);
})}
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  colchihbkpormdcangvacrszLane: {
    flexDirection: 'row',
  },
  rowchihbkpormdcangvacrszLane: {
    flexDirection: 'column',
  },
  colchihbkpormdcangvacrszCell: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 4,
  },
  rowchihbkpormdcangvacrszCell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 6,
    gap: 5,
  },
  nchihbkpormdcangvacrszum: {
    fontSize: 11,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 0.2,
    fontVariant: ['tabular-nums' as const],
  },
  penchihbkpormdcangvacrszding: {
    color: THchihbkpormdcangvacrszEME.colors.woodEdge,
  },
  dochihbkpormdcangvacrszne: {
    color: 'rgba(138,115,85,0.40)',
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
function chihbkpormdcangvacrszCchihbkpormdcangvaObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 53;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 35)) % 465;
  return hchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszCchihbkpormdcangvaObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 85;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 38) % 473;
  }
  return achihbkpormdcangvacrszcc;
}
function chihbkpormdcangvacrszCchihbkpormdcangvaObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 36) + 6;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 237) << 5) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszCchihbkpormdcangvaObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 6;
  return (xchihbkpormdcangvacrsz ^ 203) & 44149;
}
