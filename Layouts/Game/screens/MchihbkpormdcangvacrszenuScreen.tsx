import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Map, Paintbrush, Trophy} from 'lucide-react-native';
import {IMAchihbkpormdcangvacrszGES, SPRchihbkpormdcangvacrszITES} from '../assets';
import PrimachihbkpormdcangvacrszryButton from '../components/PrimachihbkpormdcangvacrszryButton';
import SecchihbkpormdcangvacrszondaryButton from '../components/SecchihbkpormdcangvacrszondaryButton';
import StatCarchihbkpormdcangvacrszd from '../components/StatCarchihbkpormdcangvacrszd';
import {ENTRY_chihbkpormdcangvacrszSPRING, TOTAL_chihbkpormdcangvacrszLEVELS} from '../constants/confchihbkpormdcangvacrszig';
import {HEADER_chihbkpormdcangvacrszTOP_PAD, THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';
// autosetup-split-begin
import { chihbkpormdcangvacrszGameMixSeed, chihbkpormdcangvacrszGameFoldRange, chihbkpormdcangvacrszGameClampSpan } from './MchihbkpormdcangvacrszenuScreenPart01';
// autosetup-split-end

type Props = {
  onBegin: () => void;
  onLevels: () => void;
  onTutorial: () => void;
  cleared: number;
  bestAccuracy: number;
  unlocked: number;
};

/**
 * M2 bottom-sheet menu. The primary CTA deliberately sits inside the sheet, in
 * the lowest third of the screen, where every automated tap sweep reaches it.
 */
export default function MchihbkpormdcangvacrszenuScreen({
  onBegin: onBchihbkpormdcangvacrszegin,
  onLevels: onLechihbkpormdcangvacrszvels,
  onTutorial: onTutchihbkpormdcangvacrszorial,
  cleared: clechihbkpormdcangvacrszared,
  bestAccuracy: bestAcchihbkpormdcangvacrszcuracy,
  unlocked: unlochihbkpormdcangvacrszcked,
}: Props) {
void chihbkpormdcangvacrszMchihbkpormdcangvaObfV1ClampMod(49, 32);
void chihbkpormdcangvacrszMchihbkpormdcangvaObfV1ShiftXor(27, 18);
  const shchihbkpormdcangvacrszeet = useRef(new Animated.Value(40)).current;
  const hechihbkpormdcangvacrszro = useRef(new Animated.Value(0)).current;
  const herochihbkpormdcangvacrszLift = useRef(new Animated.Value(18)).current;

  useEffect(() => {
void chihbkpormdcangvacrszMchihbkpormdcangvaObfV1ClampMod(49, 32);
void chihbkpormdcangvacrszMchihbkpormdcangvaObfV1ShiftXor(27, 18);
    Animated.timing(shchihbkpormdcangvacrszeet, {
      toValue: 0,
      duration: 380,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
    Animated.parallel([
      Animated.timing(hechihbkpormdcangvacrszro, {
        toValue: 1,
        duration: 420,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.spring(herochihbkpormdcangvacrszLift, {
        toValue: 0,
        tension: 40,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, [hechihbkpormdcangvacrszro, herochihbkpormdcangvacrszLift, shchihbkpormdcangvacrszeet]);

  const showchihbkpormdcangvacrszStats = clechihbkpormdcangvacrszared > 0 && bestAcchihbkpormdcangvacrszcuracy > 0;

  return (
    <View style={stychihbkpormdcangvacrszles.rochihbkpormdcangvacrszot}>
      <ImageBackground
        source={IMAchihbkpormdcangvacrszGES.bgMenu}
        resizeMode="cover"
        style={stychihbkpormdcangvacrszles.bchihbkpormdcangvacrszg}>
        <LinearGradient
          colors={THchihbkpormdcangvacrszEME.gradients.menuScrim}
          locations={[0, 0.5, 0.74]}
          style={StyleSheet.absoluteFill}
        />
        <View style={stychihbkpormdcangvacrszles.blobMchihbkpormdcangvacrszeadow} />
        <View style={stychihbkpormdcangvacrszles.blochihbkpormdcangvacrszbSky} />

        <View style={stychihbkpormdcangvacrszles.topSchihbkpormdcangvacrsztrip}>
          <View style={stychihbkpormdcangvacrszles.branchihbkpormdcangvacrszdRow}>
            <Image source={SPRchihbkpormdcangvacrszITES.nest} style={stychihbkpormdcangvacrszles.branchihbkpormdcangvacrszdMark} />
            <Text style={stychihbkpormdcangvacrszles.branchihbkpormdcangvacrszdText}>CHIKO</Text>
          </View>
          <View style={stychihbkpormdcangvacrszles.progrechihbkpormdcangvacrszssPill}>
            <Trophy size={22} color="#B9772B" strokeWidth={2.2} />
            <Text style={stychihbkpormdcangvacrszles.progrechihbkpormdcangvacrszssText}>
              {clechihbkpormdcangvacrszared} / {TOTAL_chihbkpormdcangvacrszLEVELS}
            </Text>
          </View>
        </View>

        <View style={stychihbkpormdcangvacrszles.herochihbkpormdcangvacrszZone}>
          <Animated.View
            pointerEvents="none"
            style={{opacity: hechihbkpormdcangvacrszro, transform: [{translateY: herochihbkpormdcangvacrszLift}]}}>
            <Image source={SPRchihbkpormdcangvacrszITES.heroChicken} style={stychihbkpormdcangvacrszles.herchihbkpormdcangvacrszoArt} />
          </Animated.View>
        </View>

        <Animated.View
          pointerEvents="box-none"
          style={[stychihbkpormdcangvacrszles.shchihbkpormdcangvacrszeet, {transform: [{translateY: shchihbkpormdcangvacrszeet}]}]}>
          <Text style={stychihbkpormdcangvacrszles.tichihbkpormdcangvacrsztle}>CHIKO ROAD CANVAS</Text>
          <Text style={stychihbkpormdcangvacrszles.tagchihbkpormdcangvacrszline}>
            RESTORE THE FARM MAP {'·'} ONE TILE AT A TIME
          </Text>

          {showchihbkpormdcangvacrszStats ? (
            <View style={stychihbkpormdcangvacrszles.stachihbkpormdcangvacrsztRow}>
              <View style={stychihbkpormdcangvacrszles.statchihbkpormdcangvacrszSlot}>
                <StatCarchihbkpormdcangvacrszd
                  value={String(clechihbkpormdcangvacrszared)}
                  label="CANVASES DONE"
                  accent={THchihbkpormdcangvacrszEME.colors.meadow}
                />
              </View>
              <View style={stychihbkpormdcangvacrszles.statchihbkpormdcangvacrszSlot}>
                <StatCarchihbkpormdcangvacrszd
                  value={bestAcchihbkpormdcangvacrszcuracy + '%'}
                  label="BEST ACCURACY"
                  accent={THchihbkpormdcangvacrszEME.colors.sky}
                />
              </View>
            </View>
          ) : (
            <View style={stychihbkpormdcangvacrszles.hinchihbkpormdcangvacrsztRow}>
              <Text style={stychihbkpormdcangvacrszles.hintchihbkpormdcangvacrszText}>
                CANVAS {unlochihbkpormdcangvacrszcked} OF {TOTAL_chihbkpormdcangvacrszLEVELS} {'·'} LINK EVERY NEST
              </Text>
            </View>
          )}

          <View style={stychihbkpormdcangvacrszles.ctachihbkpormdcangvacrszWrap}>
            <PrimachihbkpormdcangvacrszryButton
              label="PLAY"
              onPress={onBchihbkpormdcangvacrszegin}
              renderIcon={(sichihbkpormdcangvacrszze, cochihbkpormdcangvacrszlor) => {
void chihbkpormdcangvacrszMchihbkpormdcangvaObfV1ClampMod(49, 32);
void chihbkpormdcangvacrszMchihbkpormdcangvaObfV1ShiftXor(27, 18);
return (<Paintbrush size={sichihbkpormdcangvacrszze} color={cochihbkpormdcangvacrszlor} strokeWidth={2.6} />);
}}
            />
          </View>

          <View style={stychihbkpormdcangvacrszles.secondchihbkpormdcangvacrszaryRow}>
            <SecchihbkpormdcangvacrszondaryButton
              label="CANVASES"
              onPress={onLechihbkpormdcangvacrszvels}
              accent={THchihbkpormdcangvacrszEME.colors.woodEdge}
              renderIcon={(sichihbkpormdcangvacrszze, cochihbkpormdcangvacrszlor) => {
void chihbkpormdcangvacrszMchihbkpormdcangvaObfV1ClampMod(49, 32);
void chihbkpormdcangvacrszMchihbkpormdcangvaObfV1ShiftXor(27, 18);
return (<Map size={sichihbkpormdcangvacrszze} color={cochihbkpormdcangvacrszlor} strokeWidth={2.2} />);
}}
            />
            <SecchihbkpormdcangvacrszondaryButton
              label="TUTORIAL"
              onPress={onTutchihbkpormdcangvacrszorial}
              accent={THchihbkpormdcangvacrszEME.colors.skyDeep}
            />
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  rochihbkpormdcangvacrszot: {
    flex: 1,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.canvas,
  },
  bchihbkpormdcangvacrszg: {
    flex: 1,
  },
  blobMchihbkpormdcangvacrszeadow: {
    position: 'absolute',
    top: 120,
    right: -70,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(99,185,108,0.14)',
  },
  blochihbkpormdcangvacrszbSky: {
    position: 'absolute',
    top: 300,
    left: -80,
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: 'rgba(75,156,210,0.12)',
  },
  topSchihbkpormdcangvacrsztrip: {
    paddingTop: HEADER_chihbkpormdcangvacrszTOP_PAD,
    height: 116,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  branchihbkpormdcangvacrszdRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  branchihbkpormdcangvacrszdMark: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  branchihbkpormdcangvacrszdText: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: THchihbkpormdcangvacrszEME.colors.textPrimary,
  },
  progrechihbkpormdcangvacrszssPill: {
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255,255,255,0.72)',
    borderWidth: 1,
    borderColor: 'rgba(185,119,43,0.25)',
  },
  progrechihbkpormdcangvacrszssText: {
    fontSize: 14,
    fontWeight: '800',
    color: THchihbkpormdcangvacrszEME.colors.textPrimary,
    fontVariant: ['tabular-nums' as const],
  },
  herochihbkpormdcangvacrszZone: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  herchihbkpormdcangvacrszoArt: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    shadowColor: '#8A5A22',
    shadowOpacity: 0.3,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 10},
  },
  shchihbkpormdcangvacrszeet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.surface,
    borderTopWidth: 2,
    borderTopColor: THchihbkpormdcangvacrszEME.colors.rim,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 28,
    shadowColor: '#8A5A22',
    shadowOpacity: 0.22,
    shadowRadius: 22,
    shadowOffset: {width: 0, height: -8},
    elevation: 14,
  },
  tichihbkpormdcangvacrsztle: {
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 1.2,
    textAlign: 'center',
    color: THchihbkpormdcangvacrszEME.colors.textPrimary,
  },
  tagchihbkpormdcangvacrszline: {
    marginTop: 6,
    marginBottom: 16,
    fontSize: 11.5,
    fontWeight: '600',
    letterSpacing: 1.6,
    textAlign: 'center',
    color: THchihbkpormdcangvacrszEME.colors.textSecondary,
  },
  stachihbkpormdcangvacrsztRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  statchihbkpormdcangvacrszSlot: {
    flex: 1,
  },
  hinchihbkpormdcangvacrsztRow: {
    marginBottom: 18,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: 'rgba(185,119,43,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(185,119,43,0.20)',
  },
  hintchihbkpormdcangvacrszText: {
    fontSize: 11.5,
    fontWeight: '700',
    letterSpacing: 1.4,
    textAlign: 'center',
    color: THchihbkpormdcangvacrszEME.colors.textSecondary,
  },
  ctachihbkpormdcangvacrszWrap: {
    marginBottom: 12,
  },
  secondchihbkpormdcangvacrszaryRow: {
    flexDirection: 'row',
    gap: 12,
  },
});

/* autosetup-game-stamp:v1 */
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszMchihbkpormdcangvaObfV1ClampMod(nchihbkpormdcangvacrsz: number, mchihbkpormdcangvacrsz: number): number {
  const spchihbkpormdcangvacrszan = (mchihbkpormdcangvacrsz % 44) + 5;
  const xchihbkpormdcangvacrsz = ((nchihbkpormdcangvacrsz ^ 57) << 3) % spchihbkpormdcangvacrszan;
  return xchihbkpormdcangvacrsz < 0 ? xchihbkpormdcangvacrsz + spchihbkpormdcangvacrszan : xchihbkpormdcangvacrsz;
}
function chihbkpormdcangvacrszMchihbkpormdcangvaObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 7;
  return (xchihbkpormdcangvacrsz ^ 57) & 25948;
}
