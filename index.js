/** @format */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './app/screens';
 
registerScreens(); // this is where you register all of your app's screens


// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'example.Home', // this is a registered name for a screen
      icon: require('./assets/icons/user-32.png'),
      selectedIcon: require('./assets/icons/user-32.png'), // iOS only
      title: 'Home'
    },
    {
      label: 'Counter',
      screen: 'example.Counter',
      icon: require('./assets/icons/user-32.png'),
      selectedIcon: require('./assets/icons/user-32.png'), // iOS only
      title: 'Counter'
    },
    {
      label: 'Cart',
      screen: 'example.Cart',
      icon: require('./assets/icons/user-32.png'),
      selectedIcon: require('./assets/icons/user-32.png'), // iOS only
      title: 'Cart'
    }
    ,
    {
      label: 'Redux Cart',
      screen: 'reactApp.ReduxCart',
      icon: require('./assets/icons/user-32.png'),
      selectedIcon: require('./assets/icons/user-32.png'), // iOS only
      title: 'Redux Cart'
    }
  ]
});


AppRegistry.registerComponent(appName, () => App);
