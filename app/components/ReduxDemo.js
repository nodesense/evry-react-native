import React from 'react';

import {View, Button, Text, StyleSheet, Platform} from 'react-native';

import * as actions from '../redux-cart/state/actions';
import store from '../store';

export default class ReduxDemo extends React.Component {
 
    addItem  = () => {
        let id = Math.ceil(Math.random() * 100000);

        let item = {
            id: id,
            name: 'Product ' + id,
            price: Math.ceil(20 + Math.random() * 100),
            qty: 1
        }

        const action = actions.addItem(item);
        store.dispatch(action);
    }

    empty = () => {
        const action = actions.empty();
        store.dispatch(action);
    }

    increment= () => {
        store.dispatch({type: 'INCREMENT'});
    }

    componentDidMount() {
        // subscribe from store
        // subscribe called by store after dispatch
        this.unsubscribeFn = store.subscribe ( () => {
            this.forceUpdate(); // force render 
        })
    }

    componentWillUnmount() {
        // unsubscribe from store.
        this.unsubscribeFn();
    }

    render() {

        const state = store.getState()
        console.log('ReduxDemo render');

        return (
            <View style={ styles.container }>
                <Text style = {{fontSize: 28}}>Redux - {state.items.length} </Text>

                <Text style = {{fontSize: 28}}>Counter - {state.counter} </Text>
                
                <Button title="AddItem" onPress={this.addItem}>
                    
                </Button>

                 
                 <Button title="Empty" onPress={this.empty}>
                
                </Button>


                 <Button title="Increment" onPress={this.increment}>
                
                </Button>
  
  
  
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