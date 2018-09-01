import React from 'react';

import {View, Text} from 'react-native';

// address = props.address, deconstruct at function declartion
// functional component
export default function Address({address}) {
    return (
        <View>
            <Text>Address</Text>
            <Text>City-{address.city}</Text>
            <Text>State-{address.state}</Text>
        </View>
    )
}