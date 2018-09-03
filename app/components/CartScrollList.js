//CartScrollList.js
import React, {Component} from "react";

import {View, Text, ScrollView} from "react-native";

import CartItem from "./CartItem";

// Pure vs Component
export default class CartScrollList extends Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        // items should be passed from parent to child
        let items = this.props.items || [];
        console.log("cartlist render", items.length);
        
        return (
            <View>
                <Text>Cart Scroll List - {items.length}</Text>

                {/* TODO  no state inside JSX */}

                <ScrollView>
                    {
                        items.map (item => (
                            <CartItem item={item} 
                                        key={item.id} />
                        ))
                    }
                </ScrollView>
                 
            </View>
        )
    }
}