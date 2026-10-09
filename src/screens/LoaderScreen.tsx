import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IMAGES, SPRITES} from '../assets';
import GrainField from '../components/GrainField';
import LoadingBar from '../components/LoadingBar';
import {
  ENTRY_SPRING,
  FADE_MS,
  LOADER_BAR_ANIM_MS,
  LOADER_DURATION_MS,
  LOADER_GRAIN,
} from '../constants/config';
import {THEME} from '../constants/theme';

const {width: W, height: H} = Dimensions.get('window');
const BAR_W = 210;

const GRAIN_TINTS = [
  'rgba(255,241,216,0.11)',
  'rgba(244,198,75,0.13)',
  'rgba(236,129,71,0.10)',
  'rgba(255,241,216,0.06)',
];

type Props = {
  onDone: () => void;
};

/**
 * Brand card. Non-interactive by design: it hands over on a wall-clock timer,
 * and its dusk palette is the deliberate opposite of the cream menu so the two
 * frames never read as the same screen.
 */
export default function LoaderScreen({onDone}: Props) {
  const fade = useRef(new Animated.Value(0)).current;
  const rise = useRef(new Animated.Value(0.72)).current;
  const out = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 420,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.spring(rise, {
        toValue: 1,
        tension: ENTRY_SPRING.tension,
        friction: ENTRY_SPRING.friction,
        useNativeDriver: true,
      }),
    ]).start();

    const handoff = setTimeout(() => {
      Animated.timing(out, {
        toValue: 0,
        duration: FADE_MS,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }).start(() => onDone());
    }, LOADER_DURATION_MS - FADE_MS);

    return () => clearTimeout(handoff);
  }, [fade, onDone, out, rise]);

  return (
    <Animated.View style={[styles.root, {opacity: out}]}>
      <ImageBackground
        source={IMAGES.bgLoader}
        resizeMode="cover"
        style={styles.bg}>
        <LinearGradient
          colors={[
            'rgba(46,33,18,0.93)',
            'rgba(74,52,24,0.90)',
            'rgba(32,22,12,0.96)',
          ]}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.blobGold} />
        <View style={styles.blobClay} />
        <GrainField
          width={W}
          height={H}
          count={LOADER_GRAIN}
          seed={0x6b4a24}
          tints={GRAIN_TINTS}
        />

        <View style={styles.center}>
          <Animated.View
            pointerEvents="none"
            style={{opacity: fade, transform: [{scale: rise}]}}>
            <View style={styles.medallion}>
              <Image source={SPRITES.nest} style={styles.crest} />
            </View>
          </Animated.View>

          <Animated.View pointerEvents="none" style={{opacity: fade}}>
            <Text style={styles.brandTop}>CHIKO ROAD</Text>
            <Text style={styles.brandSub}>CANVAS</Text>
            <Text style={styles.tagline}>PAINT THE ROAD HOME</Text>
          </Animated.View>

          <View style={styles.barWrap}>
            <LoadingBar width={BAR_W} durationMs={LOADER_BAR_ANIM_MS} />
          </View>
          <Text style={styles.loading}>LOADING...</Text>
        </View>
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.colors.woodDark,
  },
  bg: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blobGold: {
    position: 'absolute',
    top: -70,
    left: -60,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(244,198,75,0.14)',
  },
  blobClay: {
    position: 'absolute',
    bottom: -90,
    right: -70,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(236,129,71,0.10)',
  },
  medallion: {
    width: 132,
    height: 132,
    borderRadius: 30,
    backgroundColor: THEME.colors.woodMid,
    borderWidth: 4,
    borderColor: THEME.colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.45,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 10},
    elevation: 12,
  },
  crest: {
    width: 84,
    height: 84,
    resizeMode: 'contain',
  },
  brandTop: {
    marginTop: 38,
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: 3,
    textAlign: 'center',
    color: THEME.colors.textOnDark,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowRadius: 10,
    textShadowOffset: {width: 0, height: 3},
  },
  brandSub: {
    marginTop: 2,
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: 8,
    textAlign: 'center',
    color: THEME.colors.gold,
  },
  tagline: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2.4,
    textAlign: 'center',
    color: 'rgba(255,241,216,0.62)',
  },
  barWrap: {
    marginTop: 44,
  },
  loading: {
    marginTop: 12,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    color: 'rgba(255,241,216,0.45)',
  },
});
