/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Nav from './src/navigate/navigation';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Nav);
