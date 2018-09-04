
import { Navigation } from 'react-native-navigation';

//import { registerScreens } from './screens';
import {Provider} from 'react-redux';
import store from './store';

import App from './App';

import About from './components/About';
import Counter from './components/Counter';
import Cart from './components/Cart';
import Home from './components/Home';
import ReduxDemo from './components/ReduxDemo';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.Home', () => Home,  store,
  Provider);
  Navigation.registerComponent('example.About', () => About,  store,
  Provider);
  Navigation.registerComponent('example.Counter', () => Counter,  store,
  Provider);
  Navigation.registerComponent('example.Cart', () => Cart,  store,
  Provider);
  
  Navigation.registerComponent('reactApp.ReduxDemo', () => ReduxDemo);

}
