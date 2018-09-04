import React from "react";

import {View, Text, 
        Button, 
        StyleSheet,
        Slider
    } from "react-native";


// import ReduxCartList from "../containers/ReduxCartList";
// import ReduxCartSummary from "../containers/ReduxCartList";


export default function ReduxCart(props) {

        console.log("-------------------------------------")
        console.log("cart render");
         
         
    return (
        <View style={styles.container}>
            <Text>Cart Redux {props.cartLength}</Text>
 
            <Button title="Add"
                        onPress={() => props.addItem()}
            />
 
            <Button title="Empty"
                        onPress={() => props.empty()}
            /> 


            {/* <ReduxCartList />

            <ReduxCartSummary /> */}

        </View>
)
    }


 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0'
     
    },
  });