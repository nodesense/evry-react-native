import React from 'react';

import {View, Button, Text, StyleSheet, Platform} from 'react-native';

import {   NativeModules } from 'react-native'; 

import { requireNativeComponent } from 'react-native';

// requireNativeComponent automatically resolves 'RNTMap' to 'RNTMapManager'
const MapView= requireNativeComponent('RNTMap', null);

// const ButtonView= requireNativeComponent('RNTButtonView', null);

// MyApp.js
//import MapView from './MapView.js';

export default class Native extends React.Component {
 
 

    render() {
        return (
            <View style={ styles.container }>
                <Text style = {{fontSize: 28}}>Native Not Done</Text>
                
                <MapView style={{ flex: 1 }} />

                {/* <ButtonView style={{ flex: 1 }} /> */}

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