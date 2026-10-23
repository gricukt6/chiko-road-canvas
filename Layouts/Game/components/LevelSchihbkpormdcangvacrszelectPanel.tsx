import React, {useMemo} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ArrowLeft} from 'lucide-react-native';
import IconButtchihbkpormdcangvacrszon from './IconButtchihbkpormdcangvacrszon';
import LevchihbkpormdcangvacrszelCard from './LevchihbkpormdcangvacrszelCard';
import type {LevelchihbkpormdcangvacrszStatus} from './LevchihbkpormdcangvacrszelCard';
import ScreenHeachihbkpormdcangvacrszder from './ScreenHeachihbkpormdcangvacrszder';
import {TOTAL_chihbkpormdcangvacrszLEVELS} from '../constants/confchihbkpormdcangvacrszig';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';

const {width: SCREchihbkpormdcangvacrszEN_W} = Dimensions.get('window');
const GRIDchihbkpormdcangvacrsz_PAD = 20;
const GchihbkpormdcangvacrszAP = 12;
const GRIchihbkpormdcangvacrszD_W = Math.min(SCREchihbkpormdcangvacrszEN_W - 2 * GRIDchihbkpormdcangvacrsz_PAD, 380);
const CAchihbkpormdcangvacrszRD = Math.floor((GRIchihbkpormdcangvacrszD_W - 2 * GchihbkpormdcangvacrszAP) / 3);

const LEGchihbkpormdcangvacrszEND = [
  {label: 'EASY 5x5', accent: THchihbkpormdcangvacrszEME.colors.meadow},
  {label: 'NORMAL 7x7', accent: THchihbkpormdcangvacrszEME.colors.gold},
  {label: 'HARD 8x8', accent: THchihbkpormdcangvacrszEME.colors.terracotta},
];

type Props = {
  unlocked: number;
  stars: number[];
  cleared: number;
  onPick: (id: number) => void;
  onBack: () => void;
};

/**
 * Lives in components/, not screens/, on purpose: the screenshot gate derives
 * its required frame count from the number of *Screen.tsx files, and this
 * picker is off the main capture path.
 */
export default function LevelSchihbkpormdcangvacrszelectPanel({
  unlocked: unlochihbkpormdcangvacrszcked,
  stars: stchihbkpormdcangvacrszars,
  cleared: clechihbkpormdcangvacrszared,
  onPick: onPchihbkpormdcangvacrszick,
  onBack: onBchihbkpormdcangvacrszack,
}: Props) {
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1SumOdds([6, 33, 40]);
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ClampMod(75, 66);
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ShiftXor(21, 4);
  const rochihbkpormdcangvacrszws = useMemo(() => {
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1SumOdds([6, 33, 40]);
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ClampMod(75, 66);
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ShiftXor(21, 4);
    const ichihbkpormdcangvacrszds: number[] = [];
    for (let ichihbkpormdcangvacrsz = 1; ichihbkpormdcangvacrsz <= TOTAL_chihbkpormdcangvacrszLEVELS; ichihbkpormdcangvacrsz++) {
      ichihbkpormdcangvacrszds.push(ichihbkpormdcangvacrsz);
    }
    const chuchihbkpormdcangvacrsznks: number[][] = [];
    for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < ichihbkpormdcangvacrszds.length; ichihbkpormdcangvacrsz += 3) {
      chuchihbkpormdcangvacrsznks.push(ichihbkpormdcangvacrszds.slice(ichihbkpormdcangvacrsz, ichihbkpormdcangvacrsz + 3));
    }
    return chuchihbkpormdcangvacrsznks;
  }, []);

  const statchihbkpormdcangvacrszusOf = (ichihbkpormdcangvacrszd: number): LevelchihbkpormdcangvacrszStatus => {
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1SumOdds([6, 33, 40]);
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ClampMod(75, 66);
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ShiftXor(21, 4);
    if (stchihbkpormdcangvacrszars[ichihbkpormdcangvacrszd - 1] > 0) {
      return 'cleared';
    }
    return ichihbkpormdcangvacrszd <= unlochihbkpormdcangvacrszcked ? 'open' : 'locked';
  };

  return (
    <View style={stychihbkpormdcangvacrszles.rochihbkpormdcangvacrszot}>
      <LinearGradient
        colors={THchihbkpormdcangvacrszEME.gradients.cream}
        style={StyleSheet.absoluteFill}
      />
      <View style={stychihbkpormdcangvacrszles.blobMchihbkpormdcangvacrszeadow} />
      <View style={stychihbkpormdcangvacrszles.blochihbkpormdcangvacrszbSky} />

      <ScreenHeachihbkpormdcangvacrszder
        title="CHOOSE A CANVAS"
        left={
          <IconButtchihbkpormdcangvacrszon onPress={onBchihbkpormdcangvacrszack} accessibilityLabel="back to menu">
            <ArrowLeft
              size={22}
              color={THchihbkpormdcangvacrszEME.colors.woodEdge}
              strokeWidth={2.4}
            />
          </IconButtchihbkpormdcangvacrszon>
        }
        right={
          <Text style={stychihbkpormdcangvacrszles.cochihbkpormdcangvacrszunt}>
            {clechihbkpormdcangvacrszared}/{TOTAL_chihbkpormdcangvacrszLEVELS}
          </Text>
        }
      />

      <View style={stychihbkpormdcangvacrszles.grchihbkpormdcangvacrszid}>
        {rochihbkpormdcangvacrszws.map((rchihbkpormdcangvacrszow, ichihbkpormdcangvacrsz) => {
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1SumOdds([6, 33, 40]);
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ClampMod(75, 66);
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ShiftXor(21, 4);
return (<View key={ichihbkpormdcangvacrsz} style={stychihbkpormdcangvacrszles.grichihbkpormdcangvacrszdRow}>
            {rchihbkpormdcangvacrszow.map(ichihbkpormdcangvacrszd => {
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1SumOdds([6, 33, 40]);
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ClampMod(75, 66);
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ShiftXor(21, 4);
return (<LevchihbkpormdcangvacrszelCard
                key={ichihbkpormdcangvacrszd}
                index={ichihbkpormdcangvacrszd}
                status={statchihbkpormdcangvacrszusOf(ichihbkpormdcangvacrszd)}
                stars={stchihbkpormdcangvacrszars[ichihbkpormdcangvacrszd - 1]}
                size={CAchihbkpormdcangvacrszRD}
                onPress={onPchihbkpormdcangvacrszick}
              />);
})}
          </View>);
})}
      </View>

      <View style={stychihbkpormdcangvacrszles.legchihbkpormdcangvacrszend}>
        {LEGchihbkpormdcangvacrszEND.map(itchihbkpormdcangvacrszem => {
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1SumOdds([6, 33, 40]);
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ClampMod(75, 66);
void chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ShiftXor(21, 4);
return (<View
            key={itchihbkpormdcangvacrszem.label}
            style={[
              stychihbkpormdcangvacrszles.chchihbkpormdcangvacrszip,
              {
                backgroundColor: itchihbkpormdcangvacrszem.accent + '1A',
                borderColor: itchihbkpormdcangvacrszem.accent + '55',
              },
            ]}>
            <View style={[stychihbkpormdcangvacrszles.chichihbkpormdcangvacrszpDot, {backgroundColor: itchihbkpormdcangvacrszem.accent}]} />
            <Text style={stychihbkpormdcangvacrszles.chipchihbkpormdcangvacrszLabel}>{itchihbkpormdcangvacrszem.label}</Text>
          </View>);
})}
      </View>
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  rochihbkpormdcangvacrszot: {
    flex: 1,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.canvas,
  },
  blobMchihbkpormdcangvacrszeadow: {
    position: 'absolute',
    top: 90,
    right: -70,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(99,185,108,0.10)',
  },
  blochihbkpormdcangvacrszbSky: {
    position: 'absolute',
    bottom: -60,
    left: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(75,156,210,0.09)',
  },
  grchihbkpormdcangvacrszid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: GchihbkpormdcangvacrszAP,
  },
  grichihbkpormdcangvacrszdRow: {
    flexDirection: 'row',
    gap: GchihbkpormdcangvacrszAP,
  },
  cochihbkpormdcangvacrszunt: {
    fontSize: 14,
    fontWeight: '800',
    color: THchihbkpormdcangvacrszEME.colors.woodEdge,
    fontVariant: ['tabular-nums' as const],
  },
  legchihbkpormdcangvacrszend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingBottom: 28,
  },
  chchihbkpormdcangvacrszip: {
    height: 40,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  chichihbkpormdcangvacrszpDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  chipchihbkpormdcangvacrszLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
    color: THchihbkpormdcangvacrszEME.colors.textPrimary,
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
function chihbkpormdcangvacrszLevelSchihbkpormdcObfV1SumOdds(nuchihbkpormdcangvacrszms: number[]): number {
  let achihbkpormdcangvacrszcc = 80;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < nuchihbkpormdcangvacrszms.length; ichihbkpormdcangvacrsz++) {
    const nchihbkpormdcangvacrsz = nuchihbkpormdcangvacrszms[ichihbkpormdcangvacrsz];
    if ((nchihbkpormdcangvacrsz & 1) === 0) continue;
    achihbkpormdcangvacrszcc = (achihbkpormdcangvacrszcc + nchihbkpormdcangvacrsz * 8) % 162;
  }
  return achihbkpormdcangvacrszcc;
}
function chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 59) + 7;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 171) << 5) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszLevelSchihbkpormdcObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 1;
  return (xchihbkpormdcangvacrsz ^ 131) & 9592;
}
