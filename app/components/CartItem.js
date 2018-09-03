// CartItem.js
import React, {Component} from "react";

import {View, Text, TextInput, Button, StyleSheet} from "react-native";
 

export default class CartItem extends Component {
     
    constructor(props) {
        super(props);
        console.log("cart item created", props.item.id);
    }
 
   
    render() {
        let {item} = this.props;
        
        console.log("CartItem render ", item.id);

        return (
            <View style={ styles.row}>
                <Text style={styles.title}>{item.name}</Text>

                <Text style={styles.price}>Rs: {item.price}</Text>
 

                <Text>Qty: {item.qty} </Text>

                <Text> RS: {item.price * item.qty}</Text>
            
                <Button title="remove" onPress={ () => {} }></Button>
                

            </View>
        )
    }
  
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