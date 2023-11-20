/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// CONFIG: React Native Web imports
import {createRoot} from 'react-dom/client';
import {Platform} from 'react-native';

AppRegistry.registerComponent(appName, () => App);

// CONFIG: React Native Web launches our index.html file
if (Platform.OS === 'web') {
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
}
