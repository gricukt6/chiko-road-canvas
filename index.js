/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Appchihbkpormdcangvacrsz from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Appchihbkpormdcangvacrsz);

setImmediate(() => {
  const { getMessaging, setBackgroundMessageHandler } = require('@react-native-firebase/messaging');
  const { chihbkpormdcangvacrszOnMessageRecieved } = require('./services/initializatiochihbkpormdcangvacrsznShared');
  const messaging = getMessaging();
  setBackgroundMessageHandler(messaging, async remoteMessage => {
    await chihbkpormdcangvacrszOnMessageRecieved(remoteMessage);
  });
});
