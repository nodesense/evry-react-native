import React, { requireNativeComponent, PropTypes } from 'react-native';

var iface = {
    name: 'CanvasView',
    propTypes: {
        ...React.View.propTypes,
        angle: React.PropTypes.number,
        doneColor: React.PropTypes.string,
        frontColor: React.PropTypes.string,
        height: React.PropTypes.number,
        strokeWidth: React.PropTypes.number,
        width: React.PropTypes.number,
    },
};

module.exports = requireNativeComponent('CanvasView', iface);