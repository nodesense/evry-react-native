import React, {Component} from 'react';

import {View, Text, Button} from 'react-native';
import About from './components/About';

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
            <View>
                <Text>Welcome to React</Text>
                <About appName={this.state.appName}
                       address = {this.state.address}  />
            </View>
        )
    }
}