import React, {Component} from 'react';

import {View, Text, Button, Alert} from 'react-native';

export default class Counter extends Component {
    constructor() {
        super()

        this.state = {
            counter: 0
        }

        this.incrementBy2 = this.incrementBy2.bind(this);
    }

    // callback function, who call this? 
    //React calls on onPress, use strict
    increment() {
        //Alert.alert('increment ' + this.state.counter)
        //BAD, mutable
        this.state.counter++;

        //BAD,
        // keyword, function defined in base class Component
        //trigger react to call render again
        this.forceUpdate();
    }

    //GOOD

    // create function only once per instance
    // also solve this in context
    // ES.NEXT 
    decrement = () => {
        //GOOD
        // keyword
        // trigger react to call render method
        this.setState({
            counter: this.state.counter - 1
        })
    }

    incrementBy2() {
        this.setState({
            counter: this.state.counter + 2
        })
    }

    render() {
        Alert.alert('render  ' + this.state.counter)
         return (
            <View>
                <Text style= { {fontSize: 30 }}>
                    Counter {this.state.counter}
                </Text>
                
                {/* we create wrapper function every render */}

                <Button title="+1" style = { {height: 25}}
                        onPress={() => this.increment()}
                >
                    
                </Button>

                <Button title="-1" style = { {height: 25}}
                        onPress={this.decrement}
                >
                    
                </Button>

                  <Button title="+2" style = { {height: 25}}
                        onPress={this.incrementBy2}
                />

            </View>
        )
    }
}