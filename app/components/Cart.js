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

    // callback, pass this function to props to child component
    // ES.NEXT
    removeItem = (id) => {
        console.log('remove item ', id)
        // TODO
        const items = this.state.items.filter (item => item.id != id);
        this.setState({ items });
        this.recalculate(items);
    }

    // update item inside array
    // must have new array/clone the items
    // must have cloned item

    updateItem = (id, qty) => {
        console.log("update ", id, qty);
        
        // clonned array, for CartScrollList
        let items = this.state.items.map (item => {
            if (item.id == id) {
                // WRONG, Mutating object
                //item.qty = qty; 
                 
                // GOOD clone item, return with updated qty
                return {...item, qty}
            }
            return item;
        })

        this.setState({items})
        this.recalculate(items)
    }

    empty = ()  => {
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
            <View style={styles.cartList}>
                <CartScrollList  items={this.state.items}
                             removeItem={this.removeItem}   
                             updateItem={this.updateItem}
                />
            </View>
            
            <View style={styles.cartSummary}>
                <CartSummary amount={this.state.amount}
                            totalItems = {this.state.totalItems}
                    />
            </View>

        </View>
)
    }

}
 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0',
      flexDirection: 'column'
    },

    cartList: {
        flex: 3
    },

    cartSummary: {
        flex: 1
    }
  });