//CartScrollList.js
import React, {PureComponent} from "react";

import {View, Text, ScrollView} from "react-native";

import CartItem from "./CartItem";

// Pure vs Component
export default class CartScrollList extends PureComponent {
    constructor(props) {
        super(props);
    }

    // forceUpdate doesnot call shouldComponentUpdate
    
    // whenever parent render is called on update cycle
    // whenever this.setState called on update cycle
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('cartScrollList should update');
    //     console.log('nextProps.items == this.props.items', 
    //                             nextProps.items == this.props.items);

    //     return nextProps.items != this.props.items;
    //     // return true; // calls render
    //     //return false; // no render
    // }
 
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
                                        key={item.id}
                                        removeItem = {this.props.removeItem}
                                        updateItem = {this.props.updateItem}
                                        
                                        />
                        ))
                    }
                </ScrollView>
                 
            </View>
        )
    }
}