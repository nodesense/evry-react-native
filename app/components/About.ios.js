import React from 'react';

import {View, Text, Platform} from 'react-native';

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
            <Text>About iOS App- {appName}</Text>
             <Address address={address} />
        </View>
    )
}

About.defaultProps = {
    address: {
        city: 'BLR',
        state: 'KA'
    }
}