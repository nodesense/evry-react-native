import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import * as actions from '../state/actions';
import ReduxCart from '../components/ReduxCart';

// return data as props
// props shall be passed to component
// state = store.getState()
// container calls this function
// when? first time, during creation
// when on every store.subscribe
function mapStateToProps(state) {
    return {
        // propName: value from state
        cartLength: state.items.length,

        // BAD
        // state: state // WORST Approach, any changes on state anywhere in app
                       // calls render
    }
}

// called by container
// dispatch => store.dispatch
// return props with functions (can make dispatch)
// called on every component creation, means only one copies of function created
function mapDispatchToProps(dispatch) {
    return {
        //propName: function() {}
        addItem: function() {
            let id = Math.ceil(Math.random() * 100000);

            let item = {
                id: id,
                name: 'Product ' + id,
                price: Math.ceil(20 + Math.random() * 100),
                qty: 1
            }

            let action = actions.addItem(item)
            dispatch(action)
            
        },

        empty: function() {
            dispatch(actions.empty())
        },

        // returns wrapper functions for all the action creators with dispatch
        // which can dispatch automatically
        // props.actions.empty, props.actions.addItem,...
        actions: bindActionCreators(actions, dispatch)
    }
}

// return ContainerComponent
// Pure component
// for this component, calls ReduxCart render only if cartLength change
const ReduxCartContainer = connect(mapStateToProps, 
                                  mapDispatchToProps) (ReduxCart);

export default ReduxCartContainer;