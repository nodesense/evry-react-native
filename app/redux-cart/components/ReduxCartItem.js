import React, {Component} from "react";

import {View, Text, TextInput, Button, StyleSheet} from "react-native";

export default function ReduxCartItem(props) {
        // deconstruct
        let {item} = props;
        
        console.log("CartItem render ", item.id);

        return (
            <View style={ styles.row}>
                <View style = { {flex: 1} }>
                    <Text style={styles.title}>{item.name}</Text>

                    <Text style={styles.price}> $ {item.price}</Text>
    

                    <Text>Qty: {item.qty} </Text>

                    <Text> ${item.price * item.qty}</Text>
                </View>
 
                <View style = { {flex: 1} }>
                {/* increse qty by 1, Cart comp, updateItem method */}
                <Button title="+1"    
                            onPress={() => {props.actions.updateItem(item.id, item.qty + 1)}}
                />
 
                {/* reduce qty by 1 */}
                <Button title="-1"    
                            onPress={() => {props.actions.updateItem(item.id, item.qty - 1)} }
                />

                {/* remove item from cart */}
                <Button title="RM" 
                            onPress={() => {props.actions.removeItem(item.id)}  }
                />
                </View>
                

            </View>
        )
    }
  

 

const styles = StyleSheet.create({
    row: {
        flex: 1,  
        flexDirection: 'row', // main axis
        justifyContent: 'flex-start', // main axis
        alignItems: 'flex-start', // cross axis
        //paddingLeft: 2,
        paddingRight: 16,
        marginLeft: 2,
        marginRight: 14,
        paddingTop: 10,
        marginTop: 0,
        marginBottom: 6,
        backgroundColor: 'white',
        height: 60
    },
   
    button: {
        fontSize: 32,
    },
    
    title: {
        marginLeft: 12,
        fontSize: 16,
    },

    price: {
        marginLeft: 12,
        fontSize: 24,
    },

    inputContainer: {
        borderLeftWidth: 4,
        borderRightWidth: 4,
        height: 70
      },

      input: {
        height: 30,
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
      } 
});