//CartSummary.js
import React from "react";

import {View, Text} from "react-native";
 
export default class CartSummary extends React.PureComponent {
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
                <View>
                    <Text style={ {fontSize: 20} }> Amount {this.props.amount} </Text>
                    <Text style={ {fontSize: 20} }> Total Items {this.props.totalItems} </Text>
                    <Text style={ {fontSize: 20} }> Discount {this.state.discount} % </Text>
                
                </View>
            )
    }
}