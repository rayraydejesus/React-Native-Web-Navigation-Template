/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// CONFIG: React Native Web imports
import {createRoot} from 'react-dom/client';
import {Platform} from 'react-native';

// CONFIG: React Native Vector Icons web setup
/**************************************************************/

// Use the prebuilt version of RNVI located in the dist folder
import Icon from 'react-native-vector-icons/dist/FontAwesome6';

// Generate the required CSS
// NOTE: tff imports
import FontAwesome6_Brands from 'react-native-vector-icons/Fonts/FontAwesome6_Brands.ttf';
import FontAwesome6_Regular from 'react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf';
import FontAwesome6_Solid from 'react-native-vector-icons/Fonts/FontAwesome6_Solid.ttf';

/************************END React Native Vector Icons**************************************/

AppRegistry.registerComponent(appName, () => App);

// CONFIG: React Native Web launches our index.html file
if (Platform.OS === 'web') {
  
  // CONFIG: Reeact Native Vector Icons web setup
  /**************************************************************/
  // NOTE: Add all "fonts/icons" to this inline style sheet with correct font family. Check Chrome Dev Tools.
  const iconFontStyles = `@font-face {
    src: url(${FontAwesome6_Brands});
    font-family: FontAwesome6_Brands;
  }

  @font-face {
    src: url(${FontAwesome6_Regular});
    font-family: FontAwesome6_Regular;
  }

  @font-face {
    src: url(${FontAwesome6_Solid});
    font-family: FontAwesome6_Solid;
  }`;

  // Create a stylesheet
  const style = document.createElement('style');
  style.type = 'text/css';

  // Append the iconFontStyles to the stylesheet
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
  } else {
    style.appendChild(document.createTextNode(iconFontStyles));
  }

  // Inject the stylesheet into the document head
  document.head.appendChild(style);
  /************************END React Native Vector Icons**************************************/

  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
}
