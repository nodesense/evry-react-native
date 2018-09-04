import {createStore, combineReducers} from 'redux';


//counterReducer.js
 
const INITIAL_STATE = 0
 
 function counterReducer(state = INITIAL_STATE, 
                                        action ) {
    console.log('counter Reducer ', state, action)
    switch(action.type) {
        case "INCREMENT":
            return state + action.payload.value
        
        case "RESET":
            return INITIAL_STATE

        default: 
            return state;
    }
}

const rootReducer = combineReducers({
   
    counter: counterReducer
})


const store = createStore(rootReducer)

export default store;