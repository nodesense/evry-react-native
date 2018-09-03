// Cart.js
import React from "react";

import {View, Text, Button, StyleSheet} from "react-native";

//import CartList from "./CartList";

import CartScrollList from "./CartScrollList";

import CartSummary from "./CartSummary";

export default class Cart extends React.Component {
 
    constructor(props) {
        super(props);
        console.log("cart cons ", props);

        // ownership of data == by Cart
        // update should happen in the parent component
        this.state = {
            items: [{name: 'p1', qty: 3, price: 100, id: 10}],
            // derived data
            amount: 0,
            totalItems: 0,
            flag: true
        }
    }

    recalculate(items) {
        
        let amount = 0, totalItems = 0;
        for (let item of items) {
            amount += item.qty * item.price;
            totalItems += item.qty;
        }
 
        this.setState({
            amount,  // es6, amount: amount
            totalItems
        })
 
    }


  
    // called on update life cycle
    addItem = () => {
        console.log("Adding new Item")
        let id = Math.ceil(Math.random() * 100000);

        let item = {
            id: id,
            name: 'Product ' + id,
            price: Math.ceil(20 + Math.random() * 100),
            qty: 1
        }
        
        //TODO
        //GOOD, immutable
        // clone the items, add item at end of the clone
        let items = [...this.state.items, item]

        //async method
        this.setState({
            items: items
        })

        // this.recalculate(this.state.items); //bug due to setState async
        this.recalculate(items) // OK

    }

    removeItem(id) {
        console.log('remove item ', id)
        // TODO
    }

    updateItem(id, qty) {
        console.log("update ", id, qty);
        //TODO
    }

    empty() {
        //TODO
        this.setState({
            items: []
        })

        this.recalculate([]);
    }

    // dummy method, to explain the side effect of render methods
    dummy() {
        this.setState({
            flag: !this.state.flag
        });
    }


    componentWillMount() {
        this.recalculate(this.state.items);
    }


    // first time on creation cycle, we cannot stop
    // called on update cycle we can stop using shouldComponentupdate
    // when state is merged with next state, when render is called
     
    render() {

        console.log("-------------------------------------")
        console.log("cart render");
         
         
        return (
        <View style={styles.container}>
            <Text style={ {fontSize: 20} }>Cart</Text>

            <Button title="Add"
                        onPress={() => this.addItem()}
            />

            <Button title="setState"
                        onPress={() => this.dummy()}
            /> 

            <Button title="Empty"
                        onPress={() => this.empty()}
            /> 

            {/* pass removeItem, updateItem to child */}
            <CartScrollList  items={this.state.items}
                />

            <CartSummary amount={this.state.amount}
                         totalItems = {this.state.totalItems}
                />

        </View>
)
    }

}
 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0'
     
    },
  });