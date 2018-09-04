import React from "react";

import {View, Text} from "react-native";

export default function ReduxCartSummary(props) {
            console.log("cart summary render");
            return (
                <View>
                    <Text> Amount {props.amount} </Text>
                    <Text> Total Items {props.totalItems} </Text>
                    <Text> Discount {props.discount} % </Text>
                </View>
            )
    }