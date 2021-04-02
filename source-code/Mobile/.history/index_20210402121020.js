/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App/App'
import { name as appName } from './app.json'
"@react-native-firebase/app": "^7.3.0",
"@react-native-firebase/messaging": "^7.1.7",
AppRegistry.registerComponent(appName, () => App)
