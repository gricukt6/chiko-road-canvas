/**
 * Chiko Road Canvas — a cosy route-painting logic puzzle.
 * Plain state machine, no navigation library.
 */
import React, {useCallback, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import LoaderScreen from './src/screens/LoaderScreen';
import MenuScreen from './src/screens/MenuScreen';
import GameScreen from './src/screens/GameScreen';
import ResultScreen from './src/screens/ResultScreen';
import LevelSelectPanel from './src/components/LevelSelectPanel';
import TutorialPanel from './src/components/TutorialPanel';
import {levelAt} from './src/game/levels';
import {EMPTY_RESULT} from './src/game/scoring';
import type {RoundResult} from './src/game/scoring';
import {useProgress} from './src/hooks/useProgress';
import {TOTAL_LEVELS} from './src/constants/config';
import {THEME} from './src/constants/theme';

type Screen = 'loader' | 'menu' | 'levels' | 'tutorial' | 'game' | 'result';

export default function App() {
  const [screen, setScreen] = useState<Screen>('loader');
  const [levelId, setLevelId] = useState(1);
  const [runId, setRunId] = useState(0);
  const [result, setResult] = useState<RoundResult>(EMPTY_RESULT);
  const {progress, record, cleared} = useProgress();

  const openMenu = useCallback(() => setScreen('menu'), []);

  const startLevel = useCallback((id: number) => {
    setLevelId(id);
    setRunId(n => n + 1);
    setScreen('game');
  }, []);

  const begin = useCallback(() => {
    startLevel(progress.unlocked);
  }, [progress.unlocked, startLevel]);

  const finishRound = useCallback(
    (r: RoundResult) => {
      setResult(r);
      record(r);
      setScreen('result');
    },
    [record],
  );

  const again = useCallback(() => {
    startLevel(levelId);
  }, [levelId, startLevel]);

  const next = useCallback(() => {
    startLevel(Math.min(TOTAL_LEVELS, levelId + 1));
  }, [levelId, startLevel]);

  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {screen === 'loader' ? <LoaderScreen onDone={openMenu} /> : null}

      {screen === 'menu' ? (
        <MenuScreen
          onBegin={begin}
          onLevels={() => setScreen('levels')}
          onTutorial={() => setScreen('tutorial')}
          cleared={cleared}
          bestAccuracy={progress.bestAccuracy}
          unlocked={progress.unlocked}
        />
      ) : null}

      {screen === 'levels' ? (
        <LevelSelectPanel
          unlocked={progress.unlocked}
          stars={progress.stars}
          cleared={cleared}
          onPick={startLevel}
          onBack={openMenu}
        />
      ) : null}

      {screen === 'tutorial' ? <TutorialPanel onDone={openMenu} /> : null}

      {screen === 'game' ? (
        <GameScreen
          key={runId}
          level={levelAt(levelId)}
          onExit={openMenu}
          onGameOver={finishRound}
        />
      ) : null}

      {screen === 'result' ? (
        <ResultScreen
          result={result}
          onAgain={again}
          onNext={next}
          onMenu={openMenu}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.colors.canvas,
  },
});
