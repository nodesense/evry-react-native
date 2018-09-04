// containers/ReduxCartItem.js
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../state/actions';
import ReduxCartItem from '../components/ReduxCartItem';

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps) (ReduxCartItem);