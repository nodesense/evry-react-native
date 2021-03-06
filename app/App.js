import React, {Component} from 'react';

import {View, Text, Button, StyleSheet, Alert} from 'react-native';

import {   NativeModules } from 'react-native';
import ToastExample from './components/ToastExample';
import ButtonView from './components/ButtonView';


import About from './components/About';
import Counter from './components/Counter';
import Cart from './components/Cart';
import Home from './components/Home';

import FileSystem from './components/FileSystem';

import ReduxDemo from './components/ReduxDemo';

// import Camera from './components/Camera';

// import {createStackNavigator} from 'react-navigation';

// const HomeStackPage = createStackNavigator({
//     MyHome: {
//         screen: Counter // component
//      },
//     // Cart: {
//     //     screen: Cart
//     // },
//     // About: {
//     //     screen: About
//     // },
//     // 'Counter': {
//     //     screen: Counter
//     // }
// })

export default class App extends Component {
    constructor() {
        super(); // MUST

        // react keyword
        // component data
        this.state = {
            address: {
                city: 'Bangalore',
                state: 'KA'
            },
            appName: 'React App'
        }
    }
 

    // react keyword
    // create Virtual DOM
    render() {
        return (
             <View style={ styles.container }>
                <Text>React App</Text>
                 
                <ReduxDemo />
             </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginTop: 30
    },
    hello: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    scannerview: {
      height: 100,
      width: 100,
    },
  });