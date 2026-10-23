import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {Target} from 'lucide-react-native';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';

type Props = {
  goal: string;
  moves: number;
};

function moveschihbkpormdcangvacrszColor(mochihbkpormdcangvacrszves: number): string {
void chihbkpormdcangvacrszObjectiveSchihbkpoObfV1ByteFold("bc9kl8");
void chihbkpormdcangvacrszObjectiveSchihbkpoObfV1HashMix("gl");
  if (mochihbkpormdcangvacrszves <= 3) {
    return THchihbkpormdcangvacrszEME.colors.terracotta;
  }
  if (mochihbkpormdcangvacrszves <= 8) {
    return THchihbkpormdcangvacrszEME.colors.gold;
  }
  return THchihbkpormdcangvacrszEME.colors.meadow;
}

/** Goal on the left, live move counter on the right. */
export default function ObjectiveSchihbkpormdcangvacrsztrip({goal: gochihbkpormdcangvacrszal, moves: mochihbkpormdcangvacrszves}: Props) {
void chihbkpormdcangvacrszObjectiveSchihbkpoObfV1ByteFold("bc9kl8");
void chihbkpormdcangvacrszObjectiveSchihbkpoObfV1HashMix("gl");
  const puchihbkpormdcangvacrszlse = useRef(new Animated.Value(1)).current;
  const fichihbkpormdcangvacrszrst = useRef(true);

  useEffect(() => {
void chihbkpormdcangvacrszObjectiveSchihbkpoObfV1ByteFold("bc9kl8");
void chihbkpormdcangvacrszObjectiveSchihbkpoObfV1HashMix("gl");
    if (fichihbkpormdcangvacrszrst.current) {
      fichihbkpormdcangvacrszrst.current = false;
      return;
    }
    Animated.sequence([
      Animated.timing(puchihbkpormdcangvacrszlse, {
        toValue: 1.18,
        duration: 110,
        useNativeDriver: true,
      }),
      Animated.timing(puchihbkpormdcangvacrszlse, {
        toValue: 1,
        duration: 110,
        useNativeDriver: true,
      }),
    ]).start();
  }, [mochihbkpormdcangvacrszves, puchihbkpormdcangvacrszlse]);

  return (
    <View style={stychihbkpormdcangvacrszles.stchihbkpormdcangvacrszrip}>
      <Target size={18} color={THchihbkpormdcangvacrszEME.colors.woodEdge} strokeWidth={2.4} />
      <Text style={stychihbkpormdcangvacrszles.gochihbkpormdcangvacrszal} numberOfLines={1}>
        {gochihbkpormdcangvacrszal}
      </Text>
      <View style={stychihbkpormdcangvacrszles.couchihbkpormdcangvacrsznter}>
        <Text style={stychihbkpormdcangvacrszles.capchihbkpormdcangvacrsztion}>MOVES</Text>
        <Animated.View
          pointerEvents="none"
          style={{transform: [{scale: puchihbkpormdcangvacrszlse}]}}>
          <Text style={[stychihbkpormdcangvacrszles.vachihbkpormdcangvacrszlue, {color: moveschihbkpormdcangvacrszColor(mochihbkpormdcangvacrszves)}]}>
            {mochihbkpormdcangvacrszves}
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  stchihbkpormdcangvacrszrip: {
    marginHorizontal: 16,
    marginTop: 10,
    minHeight: 48,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.glass,
    borderWidth: 1,
    borderColor: THchihbkpormdcangvacrszEME.colors.hairline,
  },
  gochihbkpormdcangvacrszal: {
    flex: 1,
    fontSize: 12.5,
    fontWeight: '700',
    letterSpacing: 0.6,
    color: THchihbkpormdcangvacrszEME.colors.textPrimary,
  },
  couchihbkpormdcangvacrsznter: {
    alignItems: 'flex-end',
    minWidth: 54,
  },
  capchihbkpormdcangvacrsztion: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: THchihbkpormdcangvacrszEME.colors.textSecondary,
  },
  vachihbkpormdcangvacrszlue: {
    fontSize: 18,
    fontWeight: '900',
    fontVariant: ['tabular-nums' as const],
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
function chihbkpormdcangvacrszObjectiveSchihbkpoObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 53;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 10) & 4407;
  return xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszObjectiveSchihbkpoObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 60;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 16)) % 239;
  return hchihbkpormdcangvacrsz;
}
