import React from 'react';
import {
    View,
    Text,
    Button,
    RefreshControl
} from 'react-native';



export default function Alert(props){
    // alert that refreshes
    // after button press
    return (
        <View>
            <Text>{props.error}</Text>
            <Button onPress={props.Backend_Refresh} title="OK"/>
        </View>
    );
};
