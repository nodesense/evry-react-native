import React, {Component} from 'react';

import {View, Text, Button} from 'react-native';
import About from './components/About';
import Counter from './components/Counter';
import Cart from './components/Cart';

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
            <View style={ {marginTop: 30, flex: 1} }>
                <Text>Welcome to React</Text>
                {/*
                <About appName={this.state.appName}
                       address = {this.state.address}  />
                */}

                {/* <Counter /> */}

                <Cart />
                
            </View>
        )
    }
}