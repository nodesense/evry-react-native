import React from 'react';

import {View, Text} from 'react-native';

import Address from './Address';

// functional component
export default function About(props) {
    // deconstruct
    //BAD, don't change props
    // props.appName = "Test" // read only
    //BAD, changing props in child not recommended
    //props.address = {city: 'Chennai', state: 'TN'}
    //props.address.city = 'Chennai'

    const {appName, address} = props;

   

    return (
        <View>
            <Text>About - {appName}</Text>
             <Address address={address} />
        </View>
    )
}