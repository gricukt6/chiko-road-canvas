import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Lock} from 'lucide-react-native';
import StachihbkpormdcangvacrszrRow from './StachihbkpormdcangvacrszrRow';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';
// autosetup-split-begin
import { chihbkpormdcangvacrszGameMixSeed, chihbkpormdcangvacrszGameClampSpan } from './LevchihbkpormdcangvacrszelCardPart01';
import { chihbkpormdcangvacrszGameFoldRange } from './LevchihbkpormdcangvacrszelCardPart02';
// autosetup-split-end

export type LevelchihbkpormdcangvacrszStatus = 'cleared' | 'open' | 'locked';

type Props = {
  index: number;
  status: LevelchihbkpormdcangvacrszStatus;
  stars: number;
  size: number;
  onPress: (id: number) => void;
};

/** One tile of the canvas picker — a pressed-in wooden chip. */
export default function LevchihbkpormdcangvacrszelCard({
  index: inchihbkpormdcangvacrszdex,
  status: stachihbkpormdcangvacrsztus,
  stars: stchihbkpormdcangvacrszars,
  size: sichihbkpormdcangvacrszze,
  onPress: onPchihbkpormdcangvacrszress,
}: Props) {
void chihbkpormdcangvacrszLevchihbkpormdcangObfV1HashMix("i3");
  const locchihbkpormdcangvacrszked = stachihbkpormdcangvacrsztus === 'locked';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={'canvas ' + inchihbkpormdcangvacrszdex}
      disabled={locchihbkpormdcangvacrszked}
      hitSlop={{top: 4, bottom: 4, left: 4, right: 4}}
      style={[
        stychihbkpormdcangvacrszles.cachihbkpormdcangvacrszrd,
        {width: sichihbkpormdcangvacrszze, height: sichihbkpormdcangvacrszze},
        locchihbkpormdcangvacrszked ? stychihbkpormdcangvacrszles.locchihbkpormdcangvacrszked : null,
      ]}
      onPress={() => {
void chihbkpormdcangvacrszLevchihbkpormdcangObfV1HashMix("i3");
return (onPchihbkpormdcangvacrszress(inchihbkpormdcangvacrszdex));
}}>
      {locchihbkpormdcangvacrszked ? (
        <Lock size={20} color="rgba(138,115,85,0.55)" strokeWidth={2.2} />
      ) : (
        <Text style={stychihbkpormdcangvacrszles.nchihbkpormdcangvacrszum}>{inchihbkpormdcangvacrszdex}</Text>
      )}
      {stachihbkpormdcangvacrsztus === 'cleared' ? (
        <View style={stychihbkpormdcangvacrszles.stchihbkpormdcangvacrszars}>
          <StachihbkpormdcangvacrszrRow earned={stchihbkpormdcangvacrszars} size={12} />
        </View>
      ) : null}
      {stachihbkpormdcangvacrsztus === 'open' ? <Text style={stychihbkpormdcangvacrszles.frchihbkpormdcangvacrszesh}>NEW</Text> : null}
    </Pressable>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  cachihbkpormdcangvacrszrd: {
    borderRadius: 18,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.surface,
    borderWidth: 2,
    borderColor: THchihbkpormdcangvacrszEME.colors.rim,
    borderTopColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8A5A22',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 5,
  },
  locchihbkpormdcangvacrszked: {
    backgroundColor: 'rgba(227,210,174,0.45)',
  },
  nchihbkpormdcangvacrszum: {
    fontSize: 24,
    fontWeight: '900',
    color: THchihbkpormdcangvacrszEME.colors.textPrimary,
    fontVariant: ['tabular-nums' as const],
  },
  stchihbkpormdcangvacrszars: {
    marginTop: 6,
  },
  frchihbkpormdcangvacrszesh: {
    marginTop: 6,
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 2,
    color: THchihbkpormdcangvacrszEME.colors.meadow,
  },
});

/* autosetup-game-stamp:v1 */
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszLevchihbkpormdcangObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 68;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 11)) % 629;
  return hchihbkpormdcangvacrsz;
}
