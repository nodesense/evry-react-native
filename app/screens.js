
import { Navigation } from 'react-native-navigation';

//import { registerScreens } from './screens';

import About from './components/About';
import Counter from './components/Counter';
import Cart from './components/Cart';
import Home from './components/Home';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.Home', () => Home);
  Navigation.registerComponent('example.About', () => About);
  Navigation.registerComponent('example.Counter', () => Counter);
  Navigation.registerComponent('example.Cart', () => Cart);
}
