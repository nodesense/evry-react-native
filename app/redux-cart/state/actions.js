//actions.js 
// contains all the action creators specific to cart module

import * as ActionTypes from './action-types';

// returns action as an object
export function addItem(item) {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {item}
    }
}

// with paranthesis, we don't need return
export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: {id}
})

// removeItem(10) => {type: 'CART.REMOVEITEM', payload: {id: 10}}

// brace multtline, need explicit return
export const updateItem = (id, qty) => {
    return {
        type: ActionTypes.UPDATE_ITEM,
        payload: {id, qty}
    }
}

export const empty = () => ({
    type: ActionTypes.EMPTY
})


//sync
export  function initProducts(products) {
    return {
        type: 'INIT_PRODUCTS',
        payload: {
            products
        }
    }
}

//sync
// return type of loading function? Action Object {type: ....}
export  function loading(loading) {
    return {
        type: 'LOADING',
        payload: {
            loading
        }
    }
}

// thunk design pattern, that makes of use actions for async call
// make use of Ajax call/API call
// thunk expect a function as an action
export function fetchProducts() {
    // thunk middleware
        
    // async function, to write async code
    // to be called by thunk
    return function (dispatch, getState) {
        // async code
        console.log('***CALLED BY THUNK')

        fetch('https://nodesense.github.io/products.json')
        .then ( response => {
            console.log('RESPONSE ', response);
            return response.json(); // return promise
        })
        .then (result => {
            const products = result.products;
            // put data to store

            const action = initProducts(products);
            dispatch(action); // dispatching object as action

        })

    }

}