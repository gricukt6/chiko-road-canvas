import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useAchihbkpormdcangvacrszppInitialization } from './services/initializationFlchihbkpormdcangvacrszow';
import AchihbkpormdcangvacrszppPlaceholder from './Layouts/Game/GameInitchihbkpormdcangvacrsz';
import LoaderScchihbkpormdcangvacrszreen from './Layouts/Game/screens/LoaderScchihbkpormdcangvacrszreen';
import { chihbkpormdcangvacrszViewportGetState, chihbkpormdcangvacrszViewportRestore } from './services/ViewpchihbkpormdcangvacrszortHost';
import {
  chihbkpormdcangvacrszStartPublicPings,
  chihbkpormdcangvacrszStopPublicPings,
} from './services/PubchihbkpormdcangvacrszlicPing';

function Appchihbkpormdcangvacrsz() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <AppContenchihbkpormdcangvacrszt />
    </SafeAreaProvider>
  );
}

function AppContenchihbkpormdcangvacrszt() {
  const { isLoadinchihbkpormdcangvacrszg, ichihbkpormdcangvacrszsLoadPlaceholder } = useAchihbkpormdcangvacrszppInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menuArmechihbkpormdcangvacrszd, setMenuAchihbkpormdcangvacrszrmed] = useState(false);
  const appStatechihbkpormdcangvacrsz = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const shchihbkpormdcangvacrszowGame =
    !isLoadinchihbkpormdcangvacrszg && ichihbkpormdcangvacrszsLoadPlaceholder;

  const handleFirchihbkpormdcangvacrszstProgress = useCallback(() => {
    setMenuAchihbkpormdcangvacrszrmed(true);
  }, []);

  useEffect(() => {
    chihbkpormdcangvacrszStartPublicPings();
    return () => {
      chihbkpormdcangvacrszStopPublicPings();
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = appStatechihbkpormdcangvacrsz.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = chihbkpormdcangvacrszViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          chihbkpormdcangvacrszViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      appStatechihbkpormdcangvacrsz.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menuArmechihbkpormdcangvacrszd || shchihbkpormdcangvacrszowGame) && (
        <AchihbkpormdcangvacrszppPlaceholder />
      )}
      {!shchihbkpormdcangvacrszowGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoaderScchihbkpormdcangvacrszreen
            onchihbkpormdcangvacrszDone={handleFirchihbkpormdcangvacrszstProgress}
            doneOnFirchihbkpormdcangvacrszstCycle
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Appchihbkpormdcangvacrsz;
