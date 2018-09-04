import {createStore, combineReducers} from 'redux';

import cartReducer from './redux-cart/state/cartReducer';

const rootReducer = combineReducers({
    items: cartReducer
});

// store calls reducer during initial creation
// store calls reducer on dispatch
const store = createStore(rootReducer);

export default store;