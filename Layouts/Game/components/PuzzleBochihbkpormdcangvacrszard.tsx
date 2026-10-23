import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import CchihbkpormdcangvacrszlueGutter from './CchihbkpormdcangvacrszlueGutter';
import PchihbkpormdcangvacrszuzzleTile from './PchihbkpormdcangvacrszuzzleTile';
import type {TilechihbkpormdcangvacrszState} from './PchihbkpormdcangvacrszuzzleTile';
import type {Lechihbkpormdcangvacrszvel} from '../game/levechihbkpormdcangvacrszls';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';
// autosetup-split-begin
import { chihbkpormdcangvacrszGameMixSeed, chihbkpormdcangvacrszGameClampSpan } from './PuzzleBochihbkpormdcangvacrszardPart01';
import { chihbkpormdcangvacrszGameFoldRange } from './PuzzleBochihbkpormdcangvacrszardPart02';
// autosetup-split-end

const {width: SCREchihbkpormdcangvacrszEN_W, height: SCREchihbkpormdcangvacrszEN_H} = Dimensions.get('window');

/**
 * Frame maths (CLAUDE.md #4): the tray's own padding and border are part of
 * the width, so the tiles can never stick out of the rounded frame.
 */
const PchihbkpormdcangvacrszAD = 6;
const BORchihbkpormdcangvacrszDER = 3;
export const BOARDchihbkpormdcangvacrsz_FRAME = PchihbkpormdcangvacrszAD + BORchihbkpormdcangvacrszDER;
export const CLchihbkpormdcangvacrszUE = 52;
const BOARDchihbkpormdcangvacrsz_MAX_W = Math.min(SCREchihbkpormdcangvacrszEN_W - 32, 380);
const BOARDchihbkpormdcangvacrsz_MAX_H = Math.min(SCREchihbkpormdcangvacrszEN_H - 116 - 64 - 208 - 28, 420);

export function tileSchihbkpormdcangvacrszizeFor(rochihbkpormdcangvacrszws: number, cochihbkpormdcangvacrszls: number): number {
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ClampMod(59, 50);
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ShiftXor(53, 68);
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ByteFold("1ed");
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1HashMix("589e");
  const byWchihbkpormdcangvacrszidth = (BOARDchihbkpormdcangvacrsz_MAX_W - 2 * BOARDchihbkpormdcangvacrsz_FRAME - CLchihbkpormdcangvacrszUE) / cochihbkpormdcangvacrszls;
  const byHechihbkpormdcangvacrszight = (BOARDchihbkpormdcangvacrsz_MAX_H - 2 * BOARDchihbkpormdcangvacrsz_FRAME - CLchihbkpormdcangvacrszUE) / rochihbkpormdcangvacrszws;
  return Math.max(22, Math.floor(Math.min(byWchihbkpormdcangvacrszidth, byHechihbkpormdcangvacrszight)));
}

type Props = {
  level: Lechihbkpormdcangvacrszvel;
  cells: TilechihbkpormdcangvacrszState[][];
  rowDone: boolean[];
  colDone: boolean[];
  onCellPress: (r: number, c: number) => void;
};

export default function PuzzleBochihbkpormdcangvacrszard({
  level: lechihbkpormdcangvacrszvel,
  cells: cechihbkpormdcangvacrszlls,
  rowDone: rowchihbkpormdcangvacrszDone,
  colDone: colchihbkpormdcangvacrszDone,
  onCellPress: onCelchihbkpormdcangvacrszlPress,
}: Props) {
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ClampMod(59, 50);
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ShiftXor(53, 68);
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ByteFold("1ed");
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1HashMix("589e");
  const tichihbkpormdcangvacrszle = tileSchihbkpormdcangvacrszizeFor(lechihbkpormdcangvacrszvel.rows, lechihbkpormdcangvacrszvel.cols);
  const boachihbkpormdcangvacrszrdW = CLchihbkpormdcangvacrszUE + tichihbkpormdcangvacrszle * lechihbkpormdcangvacrszvel.cols + 2 * BOARDchihbkpormdcangvacrsz_FRAME;
  const boachihbkpormdcangvacrszrdH = CLchihbkpormdcangvacrszUE + tichihbkpormdcangvacrszle * lechihbkpormdcangvacrszvel.rows + 2 * BOARDchihbkpormdcangvacrsz_FRAME;

  return (
    <View style={[stychihbkpormdcangvacrszles.trchihbkpormdcangvacrszay, {width: boachihbkpormdcangvacrszrdW, height: boachihbkpormdcangvacrszrdH}]}>
      <View style={stychihbkpormdcangvacrszles.highchihbkpormdcangvacrszlight} />
      <View style={stychihbkpormdcangvacrszles.topchihbkpormdcangvacrszRow}>
        <View style={{width: CLchihbkpormdcangvacrszUE, height: CLchihbkpormdcangvacrszUE}} />
        <View style={[stychihbkpormdcangvacrszles.gutchihbkpormdcangvacrszter, {height: CLchihbkpormdcangvacrszUE}]}>
          <CchihbkpormdcangvacrszlueGutter
            hints={lechihbkpormdcangvacrszvel.colHints}
            axis="col"
            satisfied={colchihbkpormdcangvacrszDone}
            tile={tichihbkpormdcangvacrszle}
            thickness={CLchihbkpormdcangvacrszUE}
          />
        </View>
      </View>

      <View style={stychihbkpormdcangvacrszles.bodchihbkpormdcangvacrszyRow}>
        <View style={[stychihbkpormdcangvacrszles.gutchihbkpormdcangvacrszter, {width: CLchihbkpormdcangvacrszUE}]}>
          <CchihbkpormdcangvacrszlueGutter
            hints={lechihbkpormdcangvacrszvel.rowHints}
            axis="row"
            satisfied={rowchihbkpormdcangvacrszDone}
            tile={tichihbkpormdcangvacrszle}
            thickness={CLchihbkpormdcangvacrszUE}
          />
        </View>
        <View style={stychihbkpormdcangvacrszles.grchihbkpormdcangvacrszid}>
          {cechihbkpormdcangvacrszlls.map((rchihbkpormdcangvacrszow, rchihbkpormdcangvacrsz) => {
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ClampMod(59, 50);
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ShiftXor(53, 68);
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ByteFold("1ed");
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1HashMix("589e");
return (<View key={rchihbkpormdcangvacrsz} style={stychihbkpormdcangvacrszles.grichihbkpormdcangvacrszdRow}>
              {rchihbkpormdcangvacrszow.map((stchihbkpormdcangvacrszate, cchihbkpormdcangvacrsz) => {
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ClampMod(59, 50);
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ShiftXor(53, 68);
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ByteFold("1ed");
void chihbkpormdcangvacrszPuzzleBochihbkpormObfV1HashMix("589e");
return (<PchihbkpormdcangvacrszuzzleTile
                  key={cchihbkpormdcangvacrsz}
                  state={stchihbkpormdcangvacrszate}
                  size={tichihbkpormdcangvacrszle}
                  r={rchihbkpormdcangvacrsz}
                  c={cchihbkpormdcangvacrsz}
                  onPress={onCelchihbkpormdcangvacrszlPress}
                />);
})}
            </View>);
})}
        </View>
      </View>
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  trchihbkpormdcangvacrszay: {
    padding: PchihbkpormdcangvacrszAD,
    borderWidth: BORchihbkpormdcangvacrszDER,
    borderColor: THchihbkpormdcangvacrszEME.colors.woodEdge,
    borderRadius: 18,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.tray,
    shadowColor: '#6B4A24',
    shadowOpacity: 0.3,
    shadowRadius: 14,
    shadowOffset: {width: 0, height: 7},
    elevation: 9,
    overflow: 'hidden',
  },
  highchihbkpormdcangvacrszlight: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.38)',
  },
  topchihbkpormdcangvacrszRow: {
    flexDirection: 'row',
  },
  bodchihbkpormdcangvacrszyRow: {
    flexDirection: 'row',
  },
  gutchihbkpormdcangvacrszter: {
    backgroundColor: 'rgba(255,255,255,0.50)',
    borderRadius: 10,
  },
  grchihbkpormdcangvacrszid: {
    flexDirection: 'column',
  },
  grichihbkpormdcangvacrszdRow: {
    flexDirection: 'row',
  },
});

/* autosetup-game-stamp:v1 */
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 29) + 9;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 35) << 7) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 7;
  return (xchihbkpormdcangvacrsz ^ 61) & 53479;
}
function chihbkpormdcangvacrszPuzzleBochihbkpormObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 52;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 22) & 26586;
  return xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszPuzzleBochihbkpormObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 69;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 34)) % 380;
  return hchihbkpormdcangvacrsz;
}
