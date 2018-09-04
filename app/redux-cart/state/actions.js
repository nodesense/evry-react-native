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

// make use of Ajax call/API call
export function fetchProducts() {
    // thunk middleware
}