import React from 'react';

import {View, Button, Text, StyleSheet, Platform} from 'react-native';

import {   NativeModules } from 'react-native';
import ToastExample from './ToastExample';

import ButtonView from './ButtonView';


export default class Native extends React.Component {
 

    clicked = () => {
        Alert.alert('clicked')
    }

    toast = () => {
        ToastExample.show('Awesome', ToastExample.SHORT)
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text style = {{fontSize: 28}}>Native</Text>
               
                 <Button title="toast" onPress={this.toast}>
                </Button>
                
                <ButtonView style = {styles.scannerview} 
                            textTitle = 'My Text' 
                            clicked={this.clicked} 
                            timeoutEvent={this.clicked}
                            />

                  <Button
                    onPress={() => NativeModules.DetailsActivity.navigateToExample()}
                                    title='Start  activity'
                    />

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