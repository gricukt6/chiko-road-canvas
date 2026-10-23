import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IMAchihbkpormdcangvacrszGES, SPRchihbkpormdcangvacrszITES} from '../assets';
import GrchihbkpormdcangvacrszainField from '../components/GrchihbkpormdcangvacrszainField';
import LoadichihbkpormdcangvacrszngBar from '../components/LoadichihbkpormdcangvacrszngBar';
import LoaderRoadRing, {type RoadRingBurst} from '../components/LoaderRoadRing';
import {
  ENTRY_chihbkpormdcangvacrszSPRING,
  LOADER_DUchihbkpormdcangvacrszRATION_MS,
  LOADERchihbkpormdcangvacrsz_GRAIN,
} from '../constants/confchihbkpormdcangvacrszig';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';

const {width: Wchihbkpormdcangvacrsz, height: Hchihbkpormdcangvacrsz} = Dimensions.get('window');
const BAchihbkpormdcangvacrszR_W = 210;
const MAX_BURSTS = 4;
const RING_ACCENTS = [THchihbkpormdcangvacrszEME.colors.gold, THchihbkpormdcangvacrszEME.colors.terracotta];
const LOAD_VERBS = ['LOADING', 'PAINTING', 'TRACING'];

const GRAINchihbkpormdcangvacrsz_TINTS = [
  'rgba(255,241,216,0.11)',
  'rgba(244,198,75,0.13)',
  'rgba(236,129,71,0.10)',
  'rgba(255,241,216,0.06)',
];

type Props = {
  onDone?: () => void;
  onchihbkpormdcangvacrszDone?: () => void;
  doneOnFirstCycle?: boolean;
  doneOnFirchihbkpormdcangvacrszstCycle?: boolean;
};

/**
 * Chiko Road Canvas splash.
 * Persona: hold-charge, bounce-scale, rings, converge, striped-fill.
 * Hint sits under the load verb. The frame stays opaque until the host unmounts it.
 */
export default function LoaderScchihbkpormdcangvacrszreen({
  onDone,
  onchihbkpormdcangvacrszDone,
  doneOnFirstCycle,
  doneOnFirchihbkpormdcangvacrszstCycle,
}: Props) {
  const finishRef = useRef(onDone ?? onchihbkpormdcangvacrszDone);
  finishRef.current = onDone ?? onchihbkpormdcangvacrszDone;
  const firstCycle = Boolean(doneOnFirstCycle || doneOnFirchihbkpormdcangvacrszstCycle);
  const firedRef = useRef(false);

  const entrance = useRef(new Animated.Value(0.72)).current;
  const scaleX = useRef(new Animated.Value(1)).current;
  const scaleY = useRef(new Animated.Value(1)).current;
  const tilt = useRef(new Animated.Value(0)).current;
  const shotRef = useRef(0);
  const pressAt = useRef(0);
  const dragged = useRef(false);

  const [verb, setVerb] = useState(0);
  const [bursts, setBursts] = useState<RoadRingBurst[]>([]);
  const burstId = useRef(1);

  useEffect(() => {
    Animated.spring(entrance, {
      toValue: 1,
      tension: ENTRY_chihbkpormdcangvacrszSPRING.tension,
      friction: ENTRY_chihbkpormdcangvacrszSPRING.friction,
      useNativeDriver: true,
    }).start();
  }, [entrance]);

  useEffect(() => {
    if (firstCycle) return undefined;
    const id = setTimeout(() => {
      if (firedRef.current) return;
      firedRef.current = true;
      finishRef.current?.();
    }, LOADER_DUchihbkpormdcangvacrszRATION_MS);
    return () => clearTimeout(id);
  }, [firstCycle]);

  const fireFirstFill = () => {
    if (!firstCycle || firedRef.current) return;
    firedRef.current = true;
    finishRef.current?.();
  };

  const lean = useMemo(
    () =>
      tilt.interpolate({
        inputRange: [-8, 8],
        outputRange: ['-8deg', '8deg'],
        extrapolate: 'clamp',
      }),
    [tilt],
  );

  const playAxes = (sx: number, sy: number, ms: number) => {
    scaleX.stopAnimation();
    scaleY.stopAnimation();
    Animated.sequence([
      Animated.timing(scaleX, {toValue: sx, duration: ms, useNativeDriver: true}),
      Animated.spring(scaleX, {toValue: 1, tension: 200, friction: 7, useNativeDriver: true}),
    ]).start();
    Animated.sequence([
      Animated.timing(scaleY, {toValue: sy, duration: ms, useNativeDriver: true}),
      Animated.spring(scaleY, {toValue: 1, tension: 200, friction: 7, useNativeDriver: true}),
    ]).start();
  };

  const playTap = () => {
    const kind = shotRef.current % 3;
    shotRef.current += 1;
    if (kind === 0) playAxes(1.08, 1.08, 120);
    else if (kind === 1) playAxes(1.14, 0.84, 140);
    else playAxes(0.9, 1.12, 150);
  };

  const settle = () => {
    scaleX.stopAnimation();
    scaleY.stopAnimation();
    Animated.spring(scaleX, {toValue: 1, tension: 180, friction: 8, useNativeDriver: true}).start();
    Animated.spring(scaleY, {toValue: 1, tension: 180, friction: 8, useNativeDriver: true}).start();
    Animated.spring(tilt, {toValue: 0, tension: 160, friction: 8, useNativeDriver: true}).start();
  };

  const heroRef = useRef({
    grant: () => {},
    move: (_dx: number, _dy: number) => {},
    release: (_held: number, _moved: boolean) => {},
    settle: () => {},
  });
  heroRef.current.settle = settle;
  heroRef.current.grant = () => {
    pressAt.current = Date.now();
    dragged.current = false;
    Animated.spring(scaleX, {toValue: 1.12, tension: 120, friction: 8, useNativeDriver: true}).start();
    Animated.spring(scaleY, {toValue: 1.12, tension: 120, friction: 8, useNativeDriver: true}).start();
  };
  heroRef.current.move = (dx, dy) => {
    if (Math.abs(dx) > 8 || Math.abs(dy) > 8) dragged.current = true;
    tilt.setValue(Math.max(-8, Math.min(8, dx / 12)));
  };
  heroRef.current.release = held => {
    Animated.spring(tilt, {toValue: 0, tension: 160, friction: 8, useNativeDriver: true}).start();
    if (dragged.current) {
      settle();
      return;
    }
    if (held > 280) {
      playAxes(1.16, 0.82, 90);
      return;
    }
    playTap();
  };

  const heroPan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => heroRef.current.grant(),
      onPanResponderMove: (_, gesture) => heroRef.current.move(gesture.dx, gesture.dy),
      onPanResponderRelease: () => {
        heroRef.current.release(Date.now() - pressAt.current, dragged.current);
      },
      onPanResponderTerminate: () => heroRef.current.settle(),
    }),
  ).current;

  const spawnRings = (x: number, y: number) => {
    const cx = Math.max(8, Math.min(Wchihbkpormdcangvacrsz - 8, x));
    const cy = Math.max(8, Math.min(Hchihbkpormdcangvacrsz - 8, y));
    const count = 8 + Math.floor(Math.random() * 5);
    const radius = 24 + Math.random() * 48;
    const spin = Math.random() * Math.PI * 2;
    const id = burstId.current++;
    const colorShift = Math.floor(Math.random() * RING_ACCENTS.length);
    const bits: RoadRingBurst['bits'] = [];
    for (let i = 0; i < count; i++) {
      const angle = spin + (Math.PI * 2 * i) / count;
      const reach = radius * (0.82 + Math.random() * 0.36);
      bits.push({
        id: id * 40 + i,
        ox: Math.cos(angle) * reach,
        oy: Math.sin(angle) * reach,
        size: 10 + Math.floor(Math.random() * 7),
        color: RING_ACCENTS[(i + colorShift) % RING_ACCENTS.length],
      });
    }
    const burst: RoadRingBurst = {
      id,
      x: cx,
      y: cy,
      life: 380 + Math.floor(Math.random() * 280),
      bits,
    };
    setBursts(prev => {
      const room = prev.length >= MAX_BURSTS ? prev.slice(prev.length - (MAX_BURSTS - 1)) : prev;
      return room.concat(burst);
    });
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={IMAchihbkpormdcangvacrszGES.bgLoader}
        resizeMode="cover"
        style={styles.bg}>
        <LinearGradient
          pointerEvents="none"
          colors={[
            'rgba(46,33,18,0.93)',
            'rgba(74,52,24,0.90)',
            'rgba(32,22,12,0.96)',
          ]}
          style={StyleSheet.absoluteFill}
        />
        <View pointerEvents="none" style={styles.blobGold} />
        <View pointerEvents="none" style={styles.blobClay} />
        <GrchihbkpormdcangvacrszainField
          width={Wchihbkpormdcangvacrsz}
          height={Hchihbkpormdcangvacrsz}
          count={LOADERchihbkpormdcangvacrsz_GRAIN}
          seed={0x6b4a24}
          tints={GRAINchihbkpormdcangvacrsz_TINTS}
        />

        <LoaderRoadRing
          bursts={bursts}
          onBurstDone={id => setBursts(prev => prev.filter(burst => burst.id !== id))}
        />
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={event => spawnRings(event.nativeEvent.locationX, event.nativeEvent.locationY)}
        />

        <View style={styles.center} pointerEvents="box-none">
          <Animated.View style={{transform: [{scale: entrance}]}}>
            <Animated.View
              {...heroPan.panHandlers}
              style={{transform: [{scaleX}, {scaleY}, {rotate: lean}]}}>
              <View style={styles.medallion}>
                <Image source={SPRchihbkpormdcangvacrszITES.nest} style={styles.crest} />
              </View>
            </Animated.View>
          </Animated.View>

          <View pointerEvents="none">
            <Text style={styles.brandTop}>CHIKO ROAD</Text>
            <Text style={styles.brandSub}>CANVAS</Text>
            <Text style={styles.tagline}>PAINT THE ROAD HOME</Text>
          </View>

          <View
            style={styles.barWrap}
            onStartShouldSetResponder={() => true}>
            <LoadichihbkpormdcangvacrszngBar
              width={BAchihbkpormdcangvacrszR_W}
              onFirstFill={fireFirstFill}
              onCycle={() => setVerb(value => (value + 1) % LOAD_VERBS.length)}
            />
          </View>
          <Text pointerEvents="none" style={styles.loading}>
            {LOAD_VERBS[verb]}
          </Text>
          <Text pointerEvents="none" style={styles.hint}>
            WAKE THE NEST
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.woodDark,
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
    backgroundColor: THchihbkpormdcangvacrszEME.colors.woodMid,
    borderWidth: 4,
    borderColor: THchihbkpormdcangvacrszEME.colors.gold,
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
    color: THchihbkpormdcangvacrszEME.colors.textOnDark,
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
    color: THchihbkpormdcangvacrszEME.colors.gold,
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
  hint: {
    marginTop: 8,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.2,
    color: 'rgba(244,198,75,0.72)',
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
function chihbkpormdcangvacrszLoaderScchihbkpormObfV1ShiftXor(nchihbkpormdcangvacrsz: number, kchihbkpormdcangvacrsz: number): number {
  const xchihbkpormdcangvacrsz = (nchihbkpormdcangvacrsz ^ kchihbkpormdcangvacrsz) << 7;
  return (xchihbkpormdcangvacrsz ^ 187) & 24973;
}
function chihbkpormdcangvacrszLoaderScchihbkpormObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 52;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 19) & 42669;
  return xchihbkpormdcangvacrsz;
}
void chihbkpormdcangvacrszLoaderScchihbkpormObfV1ShiftXor(9, 40);
void chihbkpormdcangvacrszLoaderScchihbkpormObfV1ByteFold('hkpmng');
