import React, {Component} from "react";

import {View, Text, FlatList, ScrollView} from "react-native";

import ReduxCartItem from "../containers/CartItem";
 
export default function ReduxCartList(props) {
        // items should be passed from parent to child
        let items = props.items || [];
        console.log("cartlist render", items.length);
        
        return (
            <View>
                <Text>Cart List - {items.length}</Text>
 
                <ScrollView>

                    {
                        items.map ( item => (
                            <ReduxCartItem item={item} 
                                      key={item.id} 
                                      >
                            </ReduxCartItem>
                        ))
                    }

                </ScrollView>


            </View>
        )
    }