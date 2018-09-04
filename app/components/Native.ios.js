import React from 'react';

import {View, Button, Text, StyleSheet, Platform} from 'react-native';

import {   NativeModules } from 'react-native'; 


export default class Native extends React.Component {
 
 

    render() {
        return (
            <View style={ styles.container }>
                <Text style = {{fontSize: 28}}>Native Not Done</Text>
                

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