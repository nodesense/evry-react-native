//store.js
import {createStore, combineReducers, applyMiddleware} from 'redux';

// redux middleware
import thunk from 'redux-thunk';

import cartReducer from './redux-cart/state/cartReducer';
import productReducer from './redux-cart/state/productReducer';

function counterReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT': return state + 1
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    items: cartReducer,
    counter: counterReducer,
    productState: productReducer
});

function loggerMiddleware(store) {
    return function (nextFwdFunc) {
        return function(action) {
            console.log('Type of action ', typeof action);
            console.log('LOGGER Middleware ', action);


            // //thunk
            // if (typeof action === 'function') {
            //     return action(store.dispatch, store.getState);
            // }

            // forward action to next middleware or reducer
            return nextFwdFunc(action)
        }
    }
}


// store calls reducer during initial creation
// store calls reducer on dispatch
const store = createStore(rootReducer, 
                            applyMiddleware(loggerMiddleware, thunk));

export default store;