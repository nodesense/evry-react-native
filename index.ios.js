/** @format */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.About', // this is a registered name for a screen
      icon: require('./assets/icons/user-32.png'),
      selectedIcon: require('./assets/icons/user-32.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.Counter',
      icon: require('./assets/icons/user-32.png'),
      selectedIcon: require('./assets/icons/user-32.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});


import About from './app/components/About';
import Counter from './app/components/Counter';
import Cart from './app/components/Cart';
import Home from './app/components/Home';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.About', () => About);
  Navigation.registerComponent('example.Counter', () => Counter);
  Navigation.registerComponent('example.Cart', () => Cart);
}

AppRegistry.registerComponent(appName, () => App);
