/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App/App'
import { name as appName } from './app.json'
// "@react-native-firebase/app": "^7.3.0",
// "@react-native-firebase/messaging": "^7.1.7",
"react-native-camera": "^3.39.0",
"react-native-permissions": "^2.2.0",
"react-native-safe-area-context": "^3.1.8",
AppRegistry.registerComponent(appName, () => App)
