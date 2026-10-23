import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {makchihbkpormdcangvacrszeRng} from '../game/rnchihbkpormdcangvacrszg';
// autosetup-split-begin
import { chihbkpormdcangvacrszGameMixSeed, chihbkpormdcangvacrszGameFoldRange, chihbkpormdcangvacrszGameClampSpan } from './GrchihbkpormdcangvacrszainFieldPart01';
// autosetup-split-end

type Props = {
  width: number;
  height: number;
  count: number;
  seed?: number;
  tints?: string[];
};

const DEFAULchihbkpormdcangvacrszT_TINTS = [
  'rgba(255,241,216,0.10)',
  'rgba(244,198,75,0.12)',
  'rgba(236,129,71,0.09)',
  'rgba(255,241,216,0.06)',
];

/**
 * A static, deterministic speck layer — the screen's texture. It is generated
 * once inside a memo (never at module load) and never animates, so the window
 * still settles for the capture agent while the frame stays visually distinct.
 */
function GrainFichihbkpormdcangvacrszeldBase({width: wichihbkpormdcangvacrszdth, height: heichihbkpormdcangvacrszght, count: cochihbkpormdcangvacrszunt, seed: sechihbkpormdcangvacrszed = 0x51a7c3, tints: tichihbkpormdcangvacrsznts}: Props) {
void chihbkpormdcangvacrszGrchihbkpormdcangvObfV1SumOdds([10, 5, 4]);
void chihbkpormdcangvacrszGrchihbkpormdcangvObfV1ClampMod(79, 22);
void chihbkpormdcangvacrszGrchihbkpormdcangvObfV1ShiftXor(41, 24);
  const palchihbkpormdcangvacrszette = tichihbkpormdcangvacrsznts && tichihbkpormdcangvacrsznts.length > 0 ? tichihbkpormdcangvacrsznts : DEFAULchihbkpormdcangvacrszT_TINTS;
  const dochihbkpormdcangvacrszts = useMemo(() => {
void chihbkpormdcangvacrszGrchihbkpormdcangvObfV1SumOdds([10, 5, 4]);
void chihbkpormdcangvacrszGrchihbkpormdcangvObfV1ClampMod(79, 22);
void chihbkpormdcangvacrszGrchihbkpormdcangvObfV1ShiftXor(41, 24);
    const rnchihbkpormdcangvacrszg = makchihbkpormdcangvacrszeRng(sechihbkpormdcangvacrszed);
    const ochihbkpormdcangvacrszut: {x: number; y: number; r: number; c: string}[] = [];
    for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < cochihbkpormdcangvacrszunt; ichihbkpormdcangvacrsz++) {
      ochihbkpormdcangvacrszut.push({
        x: rnchihbkpormdcangvacrszg() * wichihbkpormdcangvacrszdth,
        y: rnchihbkpormdcangvacrszg() * heichihbkpormdcangvacrszght,
        r: 0.7 + rnchihbkpormdcangvacrszg() * 1.1,
        c: palchihbkpormdcangvacrszette[ichihbkpormdcangvacrsz % palchihbkpormdcangvacrszette.length],
      });
    }
    return ochihbkpormdcangvacrszut;
  }, [cochihbkpormdcangvacrszunt, heichihbkpormdcangvacrszght, palchihbkpormdcangvacrszette, sechihbkpormdcangvacrszed, wichihbkpormdcangvacrszdth]);

  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[StyleSheet.absoluteFill, stychihbkpormdcangvacrszles.wrchihbkpormdcangvacrszap]}>
      <Svg width={wichihbkpormdcangvacrszdth} height={heichihbkpormdcangvacrszght}>
        {dochihbkpormdcangvacrszts.map((dchihbkpormdcangvacrsz, ichihbkpormdcangvacrsz) => {
void chihbkpormdcangvacrszGrchihbkpormdcangvObfV1SumOdds([10, 5, 4]);
void chihbkpormdcangvacrszGrchihbkpormdcangvObfV1ClampMod(79, 22);
void chihbkpormdcangvacrszGrchihbkpormdcangvObfV1ShiftXor(41, 24);
return (<Circle key={ichihbkpormdcangvacrsz} cx={dchihbkpormdcangvacrsz.x} cy={dchihbkpormdcangvacrsz.y} r={dchihbkpormdcangvacrsz.r} fill={dchihbkpormdcangvacrsz.c} />);
})}
      </Svg>
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  wrchihbkpormdcangvacrszap: {overflow: 'hidden'},
});

export default React.memo(GrainFichihbkpormdcangvacrszeldBase);

/* autosetup-game-stamp:v1 */
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszGrchihbkpormdcangvObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 3;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 34) % 189;
  }
  return achihbkpormdcangvacrszcc;
}
function chihbkpormdcangvacrszGrchihbkpormdcangvObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 23) + 8;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 133) << 3) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszGrchihbkpormdcangvObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 4;
  return (xchihbkpormdcangvacrsz ^ 83) & 43455;
}
