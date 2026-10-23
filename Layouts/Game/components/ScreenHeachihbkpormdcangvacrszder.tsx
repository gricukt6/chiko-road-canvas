import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HEADER_chihbkpormdcangvacrszTOP_PAD, THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';
// autosetup-split-begin
import { chihbkpormdcangvacrszGameMixSeed, chihbkpormdcangvacrszGameFoldRange, chihbkpormdcangvacrszGameClampSpan } from './ScreenHeachihbkpormdcangvacrszderPart01';
// autosetup-split-end

type Props = {
  title: string;
  subtitle?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  transparent?: boolean;
};

/** One header for every screen, so badges and spacing never drift apart. */
export default function ScreenHeachihbkpormdcangvacrszder({
  title: tichihbkpormdcangvacrsztle,
  subtitle: subtchihbkpormdcangvacrszitle,
  left: lechihbkpormdcangvacrszft,
  right: richihbkpormdcangvacrszght,
  transparent: transchihbkpormdcangvacrszparent = false,
}: Props) {
void chihbkpormdcangvacrszScreenHeachihbkporObfV1ClampMod(33, 48);
void chihbkpormdcangvacrszScreenHeachihbkporObfV1ShiftXor(43, 2);
  return (
    <View
      style={[stychihbkpormdcangvacrszles.heachihbkpormdcangvacrszder, transchihbkpormdcangvacrszparent ? stychihbkpormdcangvacrszles.ghchihbkpormdcangvacrszost : stychihbkpormdcangvacrszles.sochihbkpormdcangvacrszlid]}>
      <View style={stychihbkpormdcangvacrszles.sichihbkpormdcangvacrszde}>{lechihbkpormdcangvacrszft}</View>
      <View style={stychihbkpormdcangvacrszles.cenchihbkpormdcangvacrszter}>
        <Text style={stychihbkpormdcangvacrszles.tichihbkpormdcangvacrsztle} numberOfLines={1}>
          {tichihbkpormdcangvacrsztle}
        </Text>
        {subtchihbkpormdcangvacrszitle ? (
          <Text style={stychihbkpormdcangvacrszles.subtchihbkpormdcangvacrszitle} numberOfLines={1}>
            {subtchihbkpormdcangvacrszitle}
          </Text>
        ) : null}
      </View>
      <View style={[stychihbkpormdcangvacrszles.sichihbkpormdcangvacrszde, stychihbkpormdcangvacrszles.sidechihbkpormdcangvacrszRight]}>{richihbkpormdcangvacrszght}</View>
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  heachihbkpormdcangvacrszder: {
    paddingTop: HEADER_chihbkpormdcangvacrszTOP_PAD,
    paddingBottom: 12,
    paddingHorizontal: 16,
    minHeight: 116,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sochihbkpormdcangvacrszlid: {
    backgroundColor: THchihbkpormdcangvacrszEME.colors.headerBg,
    borderBottomWidth: 1,
    borderBottomColor: THchihbkpormdcangvacrszEME.colors.hairline,
  },
  ghchihbkpormdcangvacrszost: {
    backgroundColor: 'transparent',
  },
  sichihbkpormdcangvacrszde: {
    width: 76,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sidechihbkpormdcangvacrszRight: {
    alignItems: 'flex-end',
  },
  cenchihbkpormdcangvacrszter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tichihbkpormdcangvacrsztle: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: THchihbkpormdcangvacrszEME.colors.textPrimary,
  },
  subtchihbkpormdcangvacrszitle: {
    marginTop: 3,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: THchihbkpormdcangvacrszEME.colors.textSecondary,
  },
});

/* autosetup-game-stamp:v1 */
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszScreenHeachihbkporObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 24) + 2;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 161) << 4) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszScreenHeachihbkporObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 4;
  return (xchihbkpormdcangvacrsz ^ 173) & 50598;
}
