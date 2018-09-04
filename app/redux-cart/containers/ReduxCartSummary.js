//containers/ReduxCartList.js

import {connect} from 'react-redux';

import { createSelector } from 'reselect'


import ReduxCartSummary from '../components/ReduxCartSummary';



function recalculate(items) {
    console.log("RECALCULATE ITEMS amount... ")

    let amount = 0, totalItems = 0;
    for (let item of items) {
        amount += item.qty * item.price;
        totalItems += item.qty;
    }

    return {
        amount,  // es6, amount: amount
        totalItems
    }

}


const itemsFilter = (state) => state.items
const recalculateSelector = createSelector([itemsFilter],
                                      (items ) => recalculate(items))


// called on every subscribe, on any state change
function mapStateToProps(state) {
    console.log('ReduxCartSummary mapStateToProps', state.items);

    // BAD CALLED for every subscribe
    // let result = recalculate(state.items)

    let result = recalculateSelector(state);


    // ES5
    return {
        amount: result.amount,
        totalItems: result.totalItems
    }

    //es6
    // return {...result}
}

export default connect(mapStateToProps, null) (ReduxCartSummary)