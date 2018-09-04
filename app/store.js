//store.js
import {createStore, combineReducers} from 'redux';

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

// store calls reducer during initial creation
// store calls reducer on dispatch
const store = createStore(rootReducer);

export default store;