/**
 * Chiko Road Canvas — a cosy route-painting logic puzzle.
 * Plain state machine, no navigation library.
 */
import React, {useCallback, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import LoaderScchihbkpormdcangvacrszreen from './screens/LoaderScchihbkpormdcangvacrszreen';
import MchihbkpormdcangvacrszenuScreen from './screens/MchihbkpormdcangvacrszenuScreen';
import GameScrchihbkpormdcangvacrszeen from './screens/GameScrchihbkpormdcangvacrszeen';
import ResultchihbkpormdcangvacrszScreen from './screens/ResultchihbkpormdcangvacrszScreen';
import LevelSchihbkpormdcangvacrszelectPanel from './components/LevelSchihbkpormdcangvacrszelectPanel';
import TutoriachihbkpormdcangvacrszlPanel from './components/TutoriachihbkpormdcangvacrszlPanel';
import {levchihbkpormdcangvacrszelAt} from './game/levechihbkpormdcangvacrszls';
import {EMPTY_chihbkpormdcangvacrszRESULT} from './game/scoringchihbkpormdcangvacrsz';
import type {RoundchihbkpormdcangvacrszResult} from './game/scoringchihbkpormdcangvacrsz';
import {useProgresschihbkpormdcangvacrsz} from './hooks/useProgresschihbkpormdcangvacrsz';
import {TOTAL_chihbkpormdcangvacrszLEVELS} from './constants/confchihbkpormdcangvacrszig';
import {THchihbkpormdcangvacrszEME} from './constants/themechihbkpormdcangvacrsz';

type Screen = 'loader' | 'menu' | 'levels' | 'tutorial' | 'game' | 'result';

export default function Achihbkpormdcangvacrszpp() {
void chihbkpormdcangvacrszGameInitchihbkpormObfV1HashMix("8bcngf");
  const [scrchihbkpormdcangvacrszeen, setSchihbkpormdcangvacrszcreen] = useState<Screen>('loader');
  const [levchihbkpormdcangvacrszelId, setLechihbkpormdcangvacrszvelId] = useState(1);
  const [ruchihbkpormdcangvacrsznId, setRchihbkpormdcangvacrszunId] = useState(0);
  const [reschihbkpormdcangvacrszult, setRchihbkpormdcangvacrszesult] = useState<RoundchihbkpormdcangvacrszResult>(EMPTY_chihbkpormdcangvacrszRESULT);
  const {progress: progchihbkpormdcangvacrszress, record: recchihbkpormdcangvacrszord, cleared: clechihbkpormdcangvacrszared} = useProgresschihbkpormdcangvacrsz();

  const openchihbkpormdcangvacrszMenu = useCallback(() => {
void chihbkpormdcangvacrszGameInitchihbkpormObfV1HashMix("8bcngf");
return (setSchihbkpormdcangvacrszcreen('menu'));
}, []);

  const startchihbkpormdcangvacrszLevel = useCallback((ichihbkpormdcangvacrszd: number) => {
void chihbkpormdcangvacrszGameInitchihbkpormObfV1HashMix("8bcngf");
    setLechihbkpormdcangvacrszvelId(ichihbkpormdcangvacrszd);
    setRchihbkpormdcangvacrszunId(nchihbkpormdcangvacrsz => {
void chihbkpormdcangvacrszGameInitchihbkpormObfV1HashMix("8bcngf");
return (nchihbkpormdcangvacrsz + 1);
});
    setSchihbkpormdcangvacrszcreen('game');
  }, []);

  const bechihbkpormdcangvacrszgin = useCallback(() => {
void chihbkpormdcangvacrszGameInitchihbkpormObfV1HashMix("8bcngf");
    startchihbkpormdcangvacrszLevel(progchihbkpormdcangvacrszress.unlocked);
  }, [progchihbkpormdcangvacrszress.unlocked, startchihbkpormdcangvacrszLevel]);

  const finischihbkpormdcangvacrszhRound = useCallback(
    (rchihbkpormdcangvacrsz: RoundchihbkpormdcangvacrszResult) => {
void chihbkpormdcangvacrszGameInitchihbkpormObfV1HashMix("8bcngf");
      setRchihbkpormdcangvacrszesult(rchihbkpormdcangvacrsz);
      recchihbkpormdcangvacrszord(rchihbkpormdcangvacrsz);
      setSchihbkpormdcangvacrszcreen('result');
    },
    [recchihbkpormdcangvacrszord],
  );

  const agchihbkpormdcangvacrszain = useCallback(() => {
void chihbkpormdcangvacrszGameInitchihbkpormObfV1HashMix("8bcngf");
    startchihbkpormdcangvacrszLevel(levchihbkpormdcangvacrszelId);
  }, [levchihbkpormdcangvacrszelId, startchihbkpormdcangvacrszLevel]);

  const nechihbkpormdcangvacrszxt = useCallback(() => {
void chihbkpormdcangvacrszGameInitchihbkpormObfV1HashMix("8bcngf");
    startchihbkpormdcangvacrszLevel(Math.min(TOTAL_chihbkpormdcangvacrszLEVELS, levchihbkpormdcangvacrszelId + 1));
  }, [levchihbkpormdcangvacrszelId, startchihbkpormdcangvacrszLevel]);

  return (
    <View style={stychihbkpormdcangvacrszles.rochihbkpormdcangvacrszot}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {scrchihbkpormdcangvacrszeen === 'loader' ? <LoaderScchihbkpormdcangvacrszreen onDone={openchihbkpormdcangvacrszMenu} /> : null}

      {scrchihbkpormdcangvacrszeen === 'menu' ? (
        <MchihbkpormdcangvacrszenuScreen
          onBegin={bechihbkpormdcangvacrszgin}
          onLevels={() => {
void chihbkpormdcangvacrszGameInitchihbkpormObfV1HashMix("8bcngf");
return (setSchihbkpormdcangvacrszcreen('levels'));
}}
          onTutorial={() => {
void chihbkpormdcangvacrszGameInitchihbkpormObfV1HashMix("8bcngf");
return (setSchihbkpormdcangvacrszcreen('tutorial'));
}}
          cleared={clechihbkpormdcangvacrszared}
          bestAccuracy={progchihbkpormdcangvacrszress.bestAccuracy}
          unlocked={progchihbkpormdcangvacrszress.unlocked}
        />
      ) : null}

      {scrchihbkpormdcangvacrszeen === 'levels' ? (
        <LevelSchihbkpormdcangvacrszelectPanel
          unlocked={progchihbkpormdcangvacrszress.unlocked}
          stars={progchihbkpormdcangvacrszress.stars}
          cleared={clechihbkpormdcangvacrszared}
          onPick={startchihbkpormdcangvacrszLevel}
          onBack={openchihbkpormdcangvacrszMenu}
        />
      ) : null}

      {scrchihbkpormdcangvacrszeen === 'tutorial' ? <TutoriachihbkpormdcangvacrszlPanel onDone={openchihbkpormdcangvacrszMenu} /> : null}

      {scrchihbkpormdcangvacrszeen === 'game' ? (
        <GameScrchihbkpormdcangvacrszeen
          key={ruchihbkpormdcangvacrsznId}
          level={levchihbkpormdcangvacrszelAt(levchihbkpormdcangvacrszelId)}
          onExit={openchihbkpormdcangvacrszMenu}
          onGameOver={finischihbkpormdcangvacrszhRound}
        />
      ) : null}

      {scrchihbkpormdcangvacrszeen === 'result' ? (
        <ResultchihbkpormdcangvacrszScreen
          result={reschihbkpormdcangvacrszult}
          onAgain={agchihbkpormdcangvacrszain}
          onNext={nechihbkpormdcangvacrszxt}
          onMenu={openchihbkpormdcangvacrszMenu}
        />
      ) : null}
    </View>
  );
}

const stychihbkpormdcangvacrszles = StyleSheet.create({
  rochihbkpormdcangvacrszot: {
    flex: 1,
    backgroundColor: THchihbkpormdcangvacrszEME.colors.canvas,
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
function chihbkpormdcangvacrszGameInitchihbkpormObfV1HashMix(schihbkpormdcangvacrsz: string): number {
  let hchihbkpormdcangvacrsz = 15;
  for (let ichihbkpormdcangvacrsz = 0; ichihbkpormdcangvacrsz < schihbkpormdcangvacrsz.length; ichihbkpormdcangvacrsz++) hchihbkpormdcangvacrsz = (hchihbkpormdcangvacrsz ^ (schihbkpormdcangvacrsz.charCodeAt(ichihbkpormdcangvacrsz) * 16)) % 511;
  return hchihbkpormdcangvacrsz;
}
