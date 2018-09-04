// containers/ProductList.js

import {connect} from "react-redux";

import {bindActionCreators} from "redux";

import ProductList 
        from "../components/ProductList";

import * as actions from "../state/actions";

//state = store.getState()

function mapReduxStateToReactProps (state) {
    return {
     //propName [react props]: value [from state]   
     products: state.productState.products,
     loading: state.productState.loading,
     cartSize: state.items.length
    }
}

function mapReduxDispatchToReactProps (dispatch) {
    return {
 
        fetchProducts: function() {
             //TODO
        },

        actions: bindActionCreators(actions, dispatch),
    }
}

//create container component
//get store from provider using context
//subscribe from store
//unsubscribe
let ProductListContainerComponent 
        = connect(mapReduxStateToReactProps,
                  mapReduxDispatchToReactProps) (ProductList);

export default ProductListContainerComponent;