import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CheckCircle2, Paintbrush, XCircle} from 'lucide-react-native';
import Conchihbkpormdcangvacrszfetti from '../components/Conchihbkpormdcangvacrszfetti';
import GrchihbkpormdcangvacrszainField from '../components/GrchihbkpormdcangvacrszainField';
import PrimachihbkpormdcangvacrszryButton from '../components/PrimachihbkpormdcangvacrszryButton';
import ScreenHeachihbkpormdcangvacrszder from '../components/ScreenHeachihbkpormdcangvacrszder';
import SecchihbkpormdcangvacrszondaryButton from '../components/SecchihbkpormdcangvacrszondaryButton';
import StachihbkpormdcangvacrszrRow from '../components/StachihbkpormdcangvacrszrRow';
import {RESULTchihbkpormdcangvacrsz_GRAIN, TOTAL_chihbkpormdcangvacrszLEVELS} from '../constants/confchihbkpormdcangvacrszig';
import type {RoundchihbkpormdcangvacrszResult} from '../game/scoringchihbkpormdcangvacrsz';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';

const {width: Wchihbkpormdcangvacrsz, height: Hchihbkpormdcangvacrsz} = Dimensions.get('window');

const GRAINchihbkpormdcangvacrsz_TINTS = [
  'rgba(138,115,85,0.07)',
  'rgba(244,198,75,0.09)',
  'rgba(99,185,108,0.07)',
];

type Props = {
  result: RoundchihbkpormdcangvacrszResult;
  onAgain: () => void;
  onNext: () => void;
  onMenu: () => void;
};

type RowProps = {label: string; value: string; accent: string};

function ScorchihbkpormdcangvacrszeRow({label: lachihbkpormdcangvacrszbel, value: vachihbkpormdcangvacrszlue, accent: accchihbkpormdcangvacrszent}: RowProps) {
void chihbkpormdcangvacrszResultchihbkpormdcObfV1ClampMod(32, 3);
  return (
    <View style={stychihbkpormdcangvacrszles.scorchihbkpormdcangvacrszeRow}>
      <Text style={stychihbkpormdcangvacrszles.scorechihbkpormdcangvacrszLabel}>{lachihbkpormdcangvacrszbel}</Text>
      <Text style={[stychihbkpormdcangvacrszles.scorechihbkpormdcangvacrszValue, {color: accchihbkpormdcangvacrszent}]}>{vachihbkpormdcangvacrszlue}</Text>
    </View>
  );
}

export default function ResultchihbkpormdcangvacrszScreen({
  result: reschihbkpormdcangvacrszult,
  onAgain: onAchihbkpormdcangvacrszgain,
  onNext: onNchihbkpormdcangvacrszext,
  onMenu: onMchihbkpormdcangvacrszenu,
}: Props) {
void chihbkpormdcangvacrszResultchihbkpormdcObfV1ClampMod(32, 3);
  const wchihbkpormdcangvacrszon = reschihbkpormdcangvacrszult.outcome === 'win';
  const bachihbkpormdcangvacrszdge = useRef(new Animated.Value(0.6)).current;
  const fachihbkpormdcangvacrszde = useRef(new Animated.Value(0)).current;
  const haschihbkpormdcangvacrszNext = wchihbkpormdcangvacrszon && reschihbkpormdcangvacrszult.levelId < TOTAL_chihbkpormdcangvacrszLEVELS;

  useEffect(() => {
void chihbkpormdcangvacrszResultchihbkpormdcObfV1ClampMod(32, 3);
    Animated.parallel([
      Animated.spring(bachihbkpormdcangvacrszdge, {
        toValue: 1,
        tension: 50,
        friction: 6,
        useNativeDriver: true,
      }),
      Animated.timing(fachihbkpormdcangvacrszde, {
        toValue: 1,
        duration: 320,
        useNativeDriver: true,
      }),
    ]).start();
  }, [bachihbkpormdcangvacrszdge, fachihbkpormdcangvacrszde]);

  return (
    <View style={stychihbkpormdcangvacrszles.rochihbkpormdcangvacrszot}>
      <LinearGradient
        colors={wchihbkpormdcangvacrszon ? THchihbkpormdcangvacrszEME.gradients.win : THchihbkpormdcangvacrszEME.gradients.lose}
        style={StyleSheet.absoluteFill}
      />
      <View
        style={[
          stychihbkpormdcangvacrszles.blchihbkpormdcangvacrszob,
          wchihbkpormdcangvacrszon ? stychihbkpormdcangvacrszles.blochihbkpormdcangvacrszbWin : stychihbkpormdcangvacrszles.blobchihbkpormdcangvacrszLose,
        ]}
      />
      <View style={stychihbkpormdcangvacrszles.blochihbkpormdcangvacrszbLow} />
      <GrchihbkpormdcangvacrszainField
        width={Wchihbkpormdcangvacrsz}
        height={Hchihbkpormdcangvacrsz}
        count={RESULTchihbkpormdcangvacrsz_GRAIN}
        seed={0x3f91cd}
        tints={GRAINchihbkpormdcangvacrsz_TINTS}
      />
      {wchihbkpormdcangvacrszon ? <Conchihbkpormdcangvacrszfetti /> : null}

      <ScreenHeachihbkpormdcangvacrszder
        title={'CANVAS ' + reschihbkpormdcangvacrszult.levelId}
        subtitle={reschihbkpormdcangvacrszult.difficulty}
        transparent
        right={
          <Text style={stychihbkpormdcangvacrszles.headechihbkpormdcangvacrszrStat}>
            {reschihbkpormdcangvacrszult.levelId} / {TOTAL_chihbkpormdcangvacrszLEVELS}
          </Text>
        }
      />

      <View style={stychihbkpormdcangvacrszles.bochihbkpormdcangvacrszdy}>
        <Animated.View
          pointerEvents="none"
          style={{opacity: fachihbkpormdcangvacrszde, transform: [{scale: bachihbkpormdcangvacrszdge}]}}>
          <LinearGradient
            colors={
              wchihbkpormdcangvacrszon ? THchihbkpormdcangvacrszEME.gradients.verdictWin : THchihbkpormdcangvacrszEME.gradients.verdictLose
            }
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={stychihbkpormdcangvacrszles.medachihbkpormdcangvacrszllion}>
            {wchihbkpormdcangvacrszon ? (
              <CheckCircle2 size={52} color="#FFFFFF" strokeWidth={2.2} />
            ) : (
              <XCircle size={52} color="#FFFFFF" strokeWidth={2.2} />
            )}
          </LinearGradient>
        </Animated.View>

        <Text style={stychihbkpormdcangvacrszles.headchihbkpormdcangvacrszline}>
          {wchihbkpormdcangvacrszon ? 'MAP RESTORED!' : 'OUT OF ROAD'}
        </Text>

        <View style={stychihbkpormdcangvacrszles.starchihbkpormdcangvacrszWrap}>
          <StachihbkpormdcangvacrszrRow earned={reschihbkpormdcangvacrszult.stars} size={34} />
        </View>

        <View style={stychihbkpormdcangvacrszles.cachihbkpormdcangvacrszrd}>
          <ScorchihbkpormdcangvacrszeRow
            label="TAPS USED"
            value={reschihbkpormdcangvacrszult.movesUsed + ' / ' + reschihbkpormdcangvacrszult.moveBudget}
            accent={THchihbkpormdcangvacrszEME.colors.sky}
          />
          <View style={stychihbkpormdcangvacrszles.divchihbkpormdcangvacrszider} />
          <ScorchihbkpormdcangvacrszeRow
            label="MISTAKES"
            value={reschihbkpormdcangvacrszult.mistakes + ' / 3'}
            accent={THchihbkpormdcangvacrszEME.colors.terracotta}
          />
          <View style={stychihbkpormdcangvacrszles.divchihbkpormdcangvacrszider} />
          <ScorchihbkpormdcangvacrszeRow
            label="ACCURACY"
            value={reschihbkpormdcangvacrszult.accuracy + '%'}
            accent={THchihbkpormdcangvacrszEME.colors.meadow}
          />
          <View style={stychihbkpormdcangvacrszles.divchihbkpormdcangvacrszider} />
          <ScorchihbkpormdcangvacrszeRow
            label="ROAD PAINTED"
            value={reschihbkpormdcangvacrszult.painted + ' / ' + reschihbkpormdcangvacrszult.roadLength}
            accent={THchihbkpormdcangvacrszEME.colors.woodEdge}
          />
        </View>
      </View>

      <View style={stychihbkpormdcangvacrszles.ctachihbkpormdcangvacrszZone}>
        {haschihbkpormdcangvacrszNext ? (
          <PrimachihbkpormdcangvacrszryButton
            label="NEXT CANVAS"
            onPress={onNchihbkpormdcangvacrszext}
            renderIcon={(sichihbkpormdcangvacrszze, cochihbkpormdcangvacrszlor) => {
void chihbkpormdcangvacrszResultchihbkpormdcObfV1ClampMod(32, 3);
return (<Paintbrush size={sichihbkpormdcangvacrszze} color={cochihbkpormdcangvacrszlor} strokeWidth={2.6} />);
}}
          />
        ) : (
          <PrimachihbkpormdcangvacrszryButton
            label="PLAY AGAIN"
            onPress={onAchihbkpormdcangvacrszgain}
            renderIcon={(sichihbkpormdcangvacrszze, cochihbkpormdcangvacrszlor) => {
void chihbkpormdcangvacrszResultchihbkpormdcObfV1ClampMod(32, 3);
return (<Paintbrush size={sichihbkpormdcangvacrszze} color={cochihbkpormdcangvacrszlor} strokeWidth={2.6} />);
}}
          />
        )}

        {haschihbkpormdcangvacrszNext ? (
          <View style={stychihbkpormdcangvacrszles.secochihbkpormdcangvacrszndRow}>
            <SecchihbkpormdcangvacrszondaryButton
              label="PLAY AGAIN"
              onPress={onAchihbkpormdcangvacrszgain}
              accent={THchihbkpormdcangvacrszEME.colors.woodEdge}
              full
            />
          </View>
        ) : null}

        <Pressable
          accessibilityRole="button"
          style={stychihbkpormdcangvacrszles.menchihbkpormdcangvacrszuBtn}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          onPress={onMchihbkpormdcangvacrszenu}>
          <Text style={stychihbkpormdcangvacrszles.menuchihbkpormdcangvacrszLabel}>MENU</Text>
        </Pressable>
      </View>
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  rochihbkpormdcangvacrszot: {
    flex: 1,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.canvas,
  },
  blchihbkpormdcangvacrszob: {
    position: 'absolute',
    top: 60,
    right: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
  },
  blochihbkpormdcangvacrszbWin: {
    backgroundColor: 'rgba(99,185,108,0.14)',
  },
  blobchihbkpormdcangvacrszLose: {
    backgroundColor: 'rgba(236,129,71,0.12)',
  },
  blochihbkpormdcangvacrszbLow: {
    position: 'absolute',
    bottom: -60,
    left: -70,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(244,198,75,0.12)',
  },
  headechihbkpormdcangvacrszrStat: {
    fontSize: 14,
    fontWeight: '800',
    color: THchihbkpormdcangvacrszEME.colors.woodEdge,
    fontVariant: ['tabular-nums' as const],
  },
  bochihbkpormdcangvacrszdy: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  medachihbkpormdcangvacrszllion: {
    width: 108,
    height: 108,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.45)',
    shadowColor: '#8A5A22',
    shadowOpacity: 0.3,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 10},
    elevation: 10,
  },
  headchihbkpormdcangvacrszline: {
    marginTop: 18,
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 1.5,
    textAlign: 'center',
    color: THchihbkpormdcangvacrszEME.colors.textPrimary,
  },
  starchihbkpormdcangvacrszWrap: {
    marginTop: 12,
  },
  cachihbkpormdcangvacrszrd: {
    marginTop: 20,
    width: '100%',
    backgroundColor: THchihbkpormdcangvacrszEME.colors.surface,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: THchihbkpormdcangvacrszEME.colors.rim,
    paddingHorizontal: 18,
    paddingVertical: 8,
    shadowColor: '#8A5A22',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 6},
    elevation: 6,
  },
  scorchihbkpormdcangvacrszeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 11,
  },
  scorechihbkpormdcangvacrszLabel: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: THchihbkpormdcangvacrszEME.colors.textSecondary,
  },
  scorechihbkpormdcangvacrszValue: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.4,
    fontVariant: ['tabular-nums' as const],
  },
  divchihbkpormdcangvacrszider: {
    height: 1,
    backgroundColor: 'rgba(185,119,43,0.16)',
  },
  ctachihbkpormdcangvacrszZone: {
    paddingHorizontal: 20,
    paddingBottom: 26,
  },
  secochihbkpormdcangvacrszndRow: {
    marginTop: 12,
  },
  menchihbkpormdcangvacrszuBtn: {
    marginTop: 10,
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuchihbkpormdcangvacrszLabel: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
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
function chihbkpormdcangvacrszResultchihbkpormdcObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 25) + 5;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 76) << 4) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
