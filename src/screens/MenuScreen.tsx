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
import {IMAGES, SPRITES} from '../assets';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import StatCard from '../components/StatCard';
import {ENTRY_SPRING, TOTAL_LEVELS} from '../constants/config';
import {HEADER_TOP_PAD, THEME} from '../constants/theme';

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
export default function MenuScreen({
  onBegin,
  onLevels,
  onTutorial,
  cleared,
  bestAccuracy,
  unlocked,
}: Props) {
  const sheet = useRef(new Animated.Value(40)).current;
  const hero = useRef(new Animated.Value(0)).current;
  const heroLift = useRef(new Animated.Value(18)).current;

  useEffect(() => {
    Animated.timing(sheet, {
      toValue: 0,
      duration: 380,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
    Animated.parallel([
      Animated.timing(hero, {
        toValue: 1,
        duration: 420,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.spring(heroLift, {
        toValue: 0,
        tension: 40,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, [hero, heroLift, sheet]);

  const showStats = cleared > 0 && bestAccuracy > 0;

  return (
    <View style={styles.root}>
      <ImageBackground
        source={IMAGES.bgMenu}
        resizeMode="cover"
        style={styles.bg}>
        <LinearGradient
          colors={THEME.gradients.menuScrim}
          locations={[0, 0.5, 0.74]}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.blobMeadow} />
        <View style={styles.blobSky} />

        <View style={styles.topStrip}>
          <View style={styles.brandRow}>
            <Image source={SPRITES.nest} style={styles.brandMark} />
            <Text style={styles.brandText}>CHIKO</Text>
          </View>
          <View style={styles.progressPill}>
            <Trophy size={22} color="#B9772B" strokeWidth={2.2} />
            <Text style={styles.progressText}>
              {cleared} / {TOTAL_LEVELS}
            </Text>
          </View>
        </View>

        <View style={styles.heroZone}>
          <Animated.View
            pointerEvents="none"
            style={{opacity: hero, transform: [{translateY: heroLift}]}}>
            <Image source={SPRITES.heroChicken} style={styles.heroArt} />
          </Animated.View>
        </View>

        <Animated.View
          pointerEvents="box-none"
          style={[styles.sheet, {transform: [{translateY: sheet}]}]}>
          <Text style={styles.title}>CHIKO ROAD CANVAS</Text>
          <Text style={styles.tagline}>
            RESTORE THE FARM MAP {'·'} ONE TILE AT A TIME
          </Text>

          {showStats ? (
            <View style={styles.statRow}>
              <View style={styles.statSlot}>
                <StatCard
                  value={String(cleared)}
                  label="CANVASES DONE"
                  accent={THEME.colors.meadow}
                />
              </View>
              <View style={styles.statSlot}>
                <StatCard
                  value={bestAccuracy + '%'}
                  label="BEST ACCURACY"
                  accent={THEME.colors.sky}
                />
              </View>
            </View>
          ) : (
            <View style={styles.hintRow}>
              <Text style={styles.hintText}>
                CANVAS {unlocked} OF {TOTAL_LEVELS} {'·'} LINK EVERY NEST
              </Text>
            </View>
          )}

          <View style={styles.ctaWrap}>
            <PrimaryButton
              label="PLAY"
              onPress={onBegin}
              renderIcon={(size, color) => (
                <Paintbrush size={size} color={color} strokeWidth={2.6} />
              )}
            />
          </View>

          <View style={styles.secondaryRow}>
            <SecondaryButton
              label="CANVASES"
              onPress={onLevels}
              accent={THEME.colors.woodEdge}
              renderIcon={(size, color) => (
                <Map size={size} color={color} strokeWidth={2.2} />
              )}
            />
            <SecondaryButton
              label="TUTORIAL"
              onPress={onTutorial}
              accent={THEME.colors.skyDeep}
            />
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.colors.canvas,
  },
  bg: {
    flex: 1,
  },
  blobMeadow: {
    position: 'absolute',
    top: 120,
    right: -70,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(99,185,108,0.14)',
  },
  blobSky: {
    position: 'absolute',
    top: 300,
    left: -80,
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: 'rgba(75,156,210,0.12)',
  },
  topStrip: {
    paddingTop: HEADER_TOP_PAD,
    height: 116,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandMark: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  brandText: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: THEME.colors.textPrimary,
  },
  progressPill: {
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
  progressText: {
    fontSize: 14,
    fontWeight: '800',
    color: THEME.colors.textPrimary,
    fontVariant: ['tabular-nums' as const],
  },
  heroZone: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroArt: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    shadowColor: '#8A5A22',
    shadowOpacity: 0.3,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 10},
  },
  sheet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: THEME.colors.surface,
    borderTopWidth: 2,
    borderTopColor: THEME.colors.rim,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 28,
    shadowColor: '#8A5A22',
    shadowOpacity: 0.22,
    shadowRadius: 22,
    shadowOffset: {width: 0, height: -8},
    elevation: 14,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 1.2,
    textAlign: 'center',
    color: THEME.colors.textPrimary,
  },
  tagline: {
    marginTop: 6,
    marginBottom: 16,
    fontSize: 11.5,
    fontWeight: '600',
    letterSpacing: 1.6,
    textAlign: 'center',
    color: THEME.colors.textSecondary,
  },
  statRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  statSlot: {
    flex: 1,
  },
  hintRow: {
    marginBottom: 18,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: 'rgba(185,119,43,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(185,119,43,0.20)',
  },
  hintText: {
    fontSize: 11.5,
    fontWeight: '700',
    letterSpacing: 1.4,
    textAlign: 'center',
    color: THEME.colors.textSecondary,
  },
  ctaWrap: {
    marginBottom: 12,
  },
  secondaryRow: {
    flexDirection: 'row',
    gap: 12,
  },
});
