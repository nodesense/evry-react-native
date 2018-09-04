//containers/ReduxCartList.js

import {connect} from 'react-redux';

import ReduxCartList from '../components/ReduxCartList';

function mapStateToProps(state) {
    console.log('*** CartList mapStateToProps')
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, null) (ReduxCartList)