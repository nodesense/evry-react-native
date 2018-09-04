import React from 'react';

import {View, Button, Text, StyleSheet, Platform} from 'react-native';

import {   NativeModules } from 'react-native';
import ToastExample from './ToastExample';

import Native from './Native';


export default class Home extends React.Component {

    gotoPage  = (pageName) => {
        // stack based navigation
        this.props.navigator.push({
            screen: pageName
        });
    }

    gotoTab = (tabName) => {
        this.props.navigator.switchToTab({
            tabIndex: 2
        });
    }
 

    render() {
        return (
            <View style={ styles.container }>
                <Text style = {{fontSize: 28}}>Home</Text>
                
                <Button title="Counter" onPress={() => this.gotoPage('example.Counter')}>
                    Counter
                </Button>

                 <Button title="Cart" onPress={() => this.gotoTab('example.Cart')}>
                    Cart
                </Button>

                 <Button title="About" onPress={() => this.gotoPage('example.About')}>
                    About
                </Button>


                 <Button title="Redux Demo" 
                        onPress={() => this.gotoPage('reactApp.ReduxDemo')}>
                    
                </Button>

                
                <Native />

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