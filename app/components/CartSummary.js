//CartSummary.js
import React from "react";

import {View, Text, StyleSheet} from "react-native";

import PropTypes from 'prop-types';

export default class CartSummary extends React.PureComponent {

    // static variable inside class ES.NEXT
    //react keyword
    static propTypes = {
        amount: PropTypes.number.isRequired, // mandatory
        totalItems: PropTypes.number.isRequired
    }


    // creation cycle, once once
    constructor(props) {
        super(props);

        this.state = {
            discount: 0
        }
    }

    recalculate(props) {
        //TODO
        if (props.totalItems >=5 ) {
            this.setState({discount: 5})
        } else {
            this.setState({
                discount: 0
            })
        }
    }

    componentWillMount() {
        this.recalculate(this.props)
    }

    // update life cycle method
    // called whenever parent render is called on update cycle
    componentWillReceiveProps(nextProps) {
        if (this.props.totalItems != nextProps.totalItems) {
            this.recalculate(nextProps)
        }
    }
   
    render() {
            console.log("cart summary render");

            return (
                <View style= {styles.container}>
                    <Text style={ {fontSize: 20} }> Amount {this.props.amount} </Text>
                    <Text style={ {fontSize: 20} }> Total Items {this.props.totalItems} </Text>
                    <Text style={ {fontSize: 20} }> Discount {this.state.discount} % </Text>
                
                </View>
            )
    }
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 20,
        marginBottom: 10
    }
})