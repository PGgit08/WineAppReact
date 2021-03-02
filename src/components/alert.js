import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default function Alert(props){
    // alert that refreshes
    // after button press
    return (
        <View style={styles.container}>
            <Text>{props.error}</Text>
            <Button onPress={props.Backend_Refresh} title="OK"/>
        </View>
    );
};
