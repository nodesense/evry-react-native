// FuncCounter.js
import React, {Component} from "react";
import {View, Text, Button} from 'react-native';
import PropTypes from "prop-types";
 
import {connect} from 'react-redux';

function ReduxCounter(props) {
        console.log("FuncCounter render")

        return (
            <View> 
            <Text>Redux Counter</Text>
            <Text>{props.counter}</Text>

            <Button onPress={props.increment} title="+1">
            </Button>

            <Button onPress={props.reset} title="Reset">
                 
            </Button>

 
            </View>
        )
    }

 

// container shall call mapStateToProps function
// state? state = store.getState()
// when? called when container component created (first)
// when? called with subscribe, after every dispatch
// return props needed for component
export function mapStateToProps(state) {
    console.log("Counter container mapStateToProps")
    return {
        //propName: value from state
        counter: state.counter
    }
}

// called by container
// when? when container component inst created
// dispatch = store.dispatch
export function mapDispatchToProps(dispatch) {
    console.log("Counter container mapDispatchToProps")
    return {
        //propName: function() {}
        increment: function() {
            let action =  { type: 'INCREMENT', payload: {value: 1}}
            dispatch(action)
        },
        reset: function() {
            dispatch({ type: 'RESET'})
        }
    }
}

// creating container

const connectDecorator = connect(mapStateToProps, 
                                mapDispatchToProps);

// Containers are pure component
// this container, shall FuncCounter when?
// only if counter is differnt
// store is passed as context variable
const CounterContainer= connectDecorator(ReduxCounter)

export default CounterContainer;

//export default connect(mapStateToProps, mapDispatchToProps) 
//                (FuncCounter)