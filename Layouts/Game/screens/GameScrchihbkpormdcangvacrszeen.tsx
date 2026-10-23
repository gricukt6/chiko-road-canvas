import React, {useEffect, useRef} from 'react';
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ArrowLeft, Lightbulb} from 'lucide-react-native';
import {IMAchihbkpormdcangvacrszGES} from '../assets';
import IconButtchihbkpormdcangvacrszon from '../components/IconButtchihbkpormdcangvacrszon';
import MistakchihbkpormdcangvacrszeDots from '../components/MistakchihbkpormdcangvacrszeDots';
import ModeTogglechihbkpormdcangvacrsz from '../components/ModeTogglechihbkpormdcangvacrsz';
import ObjectiveSchihbkpormdcangvacrsztrip from '../components/ObjectiveSchihbkpormdcangvacrsztrip';
import PuzzleBochihbkpormdcangvacrszard from '../components/PuzzleBochihbkpormdcangvacrszard';
import ScreenHeachihbkpormdcangvacrszder from '../components/ScreenHeachihbkpormdcangvacrszder';
import SecchihbkpormdcangvacrszondaryButton from '../components/SecchihbkpormdcangvacrszondaryButton';
import StatCarchihbkpormdcangvacrszd from '../components/StatCarchihbkpormdcangvacrszd';
import {MAX_MIchihbkpormdcangvacrszSTAKES} from '../constants/confchihbkpormdcangvacrszig';
import type {Lechihbkpormdcangvacrszvel} from '../game/levechihbkpormdcangvacrszls';
import type {RoundchihbkpormdcangvacrszResult} from '../game/scoringchihbkpormdcangvacrsz';
import {usePuzzlchihbkpormdcangvacrsze} from '../hooks/usePuzzlchihbkpormdcangvacrsze';
import {THchihbkpormdcangvacrszEME} from '../constants/themechihbkpormdcangvacrsz';
// autosetup-split-begin
import { chihbkpormdcangvacrszGameMixSeed, chihbkpormdcangvacrszGameClampSpan } from './GameScrchihbkpormdcangvacrszeenPart01';
import { chihbkpormdcangvacrszGameFoldRange } from './GameScrchihbkpormdcangvacrszeenPart02';
// autosetup-split-end

type Props = {
  level: Lechihbkpormdcangvacrszvel;
  onExit: () => void;
  onGameOver: (r: RoundchihbkpormdcangvacrszResult) => void;
};

/** G1 classic stack: header, objective strip, board, control panel. */
export default function GameScrchihbkpormdcangvacrszeen({level: lechihbkpormdcangvacrszvel, onExit: onEchihbkpormdcangvacrszxit, onGameOver: onGamchihbkpormdcangvacrszeOver}: Props) {
void chihbkpormdcangvacrszGameScrchihbkpormdObfV1ByteFold("ej2b4");
  const puzchihbkpormdcangvacrszzle = usePuzzlchihbkpormdcangvacrsze(lechihbkpormdcangvacrszvel, onGamchihbkpormdcangvacrszeOver);
  const shchihbkpormdcangvacrszake = useRef(new Animated.Value(0)).current;

  useEffect(() => {
void chihbkpormdcangvacrszGameScrchihbkpormdObfV1ByteFold("ej2b4");
    if (!puzchihbkpormdcangvacrszzle.resolving) {
      return;
    }
    Animated.sequence([
      Animated.timing(shchihbkpormdcangvacrszake, {toValue: 7, duration: 60, useNativeDriver: true}),
      Animated.timing(shchihbkpormdcangvacrszake, {toValue: -7, duration: 60, useNativeDriver: true}),
      Animated.timing(shchihbkpormdcangvacrszake, {toValue: 5, duration: 60, useNativeDriver: true}),
      Animated.timing(shchihbkpormdcangvacrszake, {toValue: 0, duration: 80, useNativeDriver: true}),
    ]).start();
  }, [puzchihbkpormdcangvacrszzle.resolving, shchihbkpormdcangvacrszake]);

  const nechihbkpormdcangvacrszsts = lechihbkpormdcangvacrszvel.nests.length;
  const filchihbkpormdcangvacrszled = puzchihbkpormdcangvacrszzle.painted;

  return (
    <View style={stychihbkpormdcangvacrszles.rochihbkpormdcangvacrszot}>
      <ImageBackground
        source={IMAchihbkpormdcangvacrszGES.bgGame}
        resizeMode="cover"
        style={stychihbkpormdcangvacrszles.bchihbkpormdcangvacrszg}>
        <LinearGradient
          colors={THchihbkpormdcangvacrszEME.gradients.gameScrim}
          style={StyleSheet.absoluteFill}
        />

        <ScreenHeachihbkpormdcangvacrszder
          title={'CANVAS ' + lechihbkpormdcangvacrszvel.id}
          subtitle={lechihbkpormdcangvacrszvel.difficulty + ' · ' + lechihbkpormdcangvacrszvel.sizeLabel}
          left={
            <IconButtchihbkpormdcangvacrszon onPress={onEchihbkpormdcangvacrszxit} accessibilityLabel="back to menu">
              <ArrowLeft
                size={22}
                color={THchihbkpormdcangvacrszEME.colors.woodEdge}
                strokeWidth={2.4}
              />
            </IconButtchihbkpormdcangvacrszon>
          }
          right={
            <MistakchihbkpormdcangvacrszeDots used={puzchihbkpormdcangvacrszzle.mistakes} total={MAX_MIchihbkpormdcangvacrszSTAKES} />
          }
        />

        <ObjectiveSchihbkpormdcangvacrsztrip
          goal={'LINK ALL ' + nechihbkpormdcangvacrszsts + ' NESTS'}
          moves={puzchihbkpormdcangvacrszzle.movesLeft}
        />

        <View style={stychihbkpormdcangvacrszles.boarchihbkpormdcangvacrszdZone}>
          <Animated.View
            pointerEvents="box-none"
            style={{transform: [{translateX: shchihbkpormdcangvacrszake}]}}>
            <PuzzleBochihbkpormdcangvacrszard
              level={lechihbkpormdcangvacrszvel}
              cells={puzchihbkpormdcangvacrszzle.cells}
              rowDone={puzchihbkpormdcangvacrszzle.rowDone}
              colDone={puzchihbkpormdcangvacrszzle.colDone}
              onCellPress={puzchihbkpormdcangvacrszzle.onCellPress}
            />
          </Animated.View>
        </View>

        <View style={stychihbkpormdcangvacrszles.pachihbkpormdcangvacrsznel}>
          <ModeTogglechihbkpormdcangvacrsz mode={puzchihbkpormdcangvacrszzle.mode} onChange={puzchihbkpormdcangvacrszzle.setMode} />

          <View style={stychihbkpormdcangvacrszles.stachihbkpormdcangvacrsztRow}>
            <View style={stychihbkpormdcangvacrszles.statchihbkpormdcangvacrszSlot}>
              <StatCarchihbkpormdcangvacrszd
                value={String(puzchihbkpormdcangvacrszzle.movesLeft)}
                label="MOVES LEFT"
                accent={THchihbkpormdcangvacrszEME.colors.sky}
              />
            </View>
            <View style={stychihbkpormdcangvacrszles.statchihbkpormdcangvacrszSlot}>
              <StatCarchihbkpormdcangvacrszd
                value={filchihbkpormdcangvacrszled + '/' + lechihbkpormdcangvacrszvel.roadLength}
                label="ROAD TILES"
                accent={THchihbkpormdcangvacrszEME.colors.meadow}
              />
            </View>
            <View style={stychihbkpormdcangvacrszles.statchihbkpormdcangvacrszSlot}>
              <StatCarchihbkpormdcangvacrszd
                value={puzchihbkpormdcangvacrszzle.mistakes + '/' + MAX_MIchihbkpormdcangvacrszSTAKES}
                label="MISTAKES"
                accent={THchihbkpormdcangvacrszEME.colors.terracotta}
              />
            </View>
          </View>

          <View style={stychihbkpormdcangvacrszles.hinchihbkpormdcangvacrsztRow}>
            <SecchihbkpormdcangvacrszondaryButton
              label="HINT"
              onPress={puzchihbkpormdcangvacrszzle.useHint}
              accent={THchihbkpormdcangvacrszEME.colors.skyDeep}
              disabled={!puzchihbkpormdcangvacrszzle.hintReady}
              full
              renderIcon={(sichihbkpormdcangvacrszze, cochihbkpormdcangvacrszlor) => {
void chihbkpormdcangvacrszGameScrchihbkpormdObfV1ByteFold("ej2b4");
return (<Lightbulb size={sichihbkpormdcangvacrszze} color={cochihbkpormdcangvacrszlor} strokeWidth={2.2} />);
}}
            />
          </View>

          <Text style={stychihbkpormdcangvacrszles.footchihbkpormdcangvacrsznote}>
            {puzchihbkpormdcangvacrszzle.mode === 'paint'
              ? 'TAP A TILE TO PAINT THE ROAD'
              : 'TAP A TILE TO MARK IT EMPTY'}
          </Text>
        </View>
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
  boarchihbkpormdcangvacrszdZone: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pachihbkpormdcangvacrsznel: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.surface,
    borderTopWidth: 2,
    borderTopColor: THchihbkpormdcangvacrszEME.colors.rim,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 18,
    shadowColor: '#8A5A22',
    shadowOpacity: 0.2,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: -6},
    elevation: 12,
  },
  stachihbkpormdcangvacrsztRow: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 10,
  },
  statchihbkpormdcangvacrszSlot: {
    flex: 1,
  },
  hinchihbkpormdcangvacrsztRow: {
    marginTop: 12,
  },
  footchihbkpormdcangvacrsznote: {
    marginTop: 10,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    textAlign: 'center',
    color: THchihbkpormdcangvacrszEME.colors.textMuted,
  },
});

/* autosetup-game-stamp:v1 */
void chihbkpormdcangvacrszGameMixSeed(3, 7);
void chihbkpormdcangvacrszGameFoldRange([1, 2, 3]);
void chihbkpormdcangvacrszGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function chihbkpormdcangvacrszGameScrchihbkpormdObfV1ByteFold(schihbkpormdcangvacrsz: string): number {
  let xchihbkpormdcangvacrsz = 86;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) xchihbkpormdcangvacrsz = (xchihbkpormdcangvacrsz + schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 36) & 34091;
  return xchihbkpormdcangvacrsz;
}
