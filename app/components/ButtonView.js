import {requireNativeComponent, View } from 'react-native'
import  PropTypes from 'prop-types';

console.log('Loading ButtonView')
var iface = {
  name: 'ButtonView',
  propTypes: {
    ...View.propTypes,
   textTitle : PropTypes.string,
   clicked: PropTypes.func,
   timeoutEvent: PropTypes.func
  },
  nativeOnly: {clicked: true, timeoutEvent: true}
};

module.exports = requireNativeComponent('ButtonView', iface);