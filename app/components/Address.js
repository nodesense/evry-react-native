import React from 'react';

import {View, Text, Platform} from 'react-native';

// functional 
const OSXView = (props) => (
    <View>
        <Text style={ {fontSize: 20, color: 'green'} }>
            iOS View - Pincode {props.pincode}
        </Text>
    </View>
)

const AndroidView = (props) => (
    <View>
        <Text style={ {fontSize: 20, color: 'red'} }>
            Android View  - Pincode {props.pincode}
        </Text>
    </View>
)

const MyView = Platform.select({
    android: AndroidView,
    ios: OSXView
})


// variable for static values
const email = Platform.select({
    android: <Text> android@example.com</Text>,
    ios: <Text> ios@example.com</Text>,
})


//Phone is a component, either ios or android
const Phone = Platform.select({
android: ({phone}) => (<View>
                            <Text  style={ {fontSize: 20}}>android Support: {phone} </Text>
                            {email}
                        </View>),
    ios: ({phone}) => <Text  style={ {fontSize: 20}}>iOS Support  {phone} </Text>
})

// address = props.address, deconstruct at function declartion
// functional component
export default function Address({address}) {
    // variable
    const time = <Text> 9 AM to 5:00 PM</Text>;

    return (
        <View>
            <Text>Address</Text>
            <Text>City-{address.city}</Text>
            <Text>State-{address.state}</Text>
            
            <MyView  pincode = {560001}/>
            <Phone phone={33333333} />
            {email}    
            {time}
            

        </View>
    )
}