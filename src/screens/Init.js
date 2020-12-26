import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import goAuth from '../navigation';
import USER_KEY from '../config'

export default class Initialising extends Component{
    async componentDidMount() {
        // here check if the
        // user is logged in already 
        // or not
        try{
            const user = await AsyncStorage.getItem(USER_KEY);
            if(user){
                // code later here will return the user home
                console.log('user', user);
            }
            else{
                // if user is not logged in
                goAuth();
            };
        }
        catch(err){
            console.log(err);
            goAuth();
        };
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading...</Text>
            </View>
        );
    };

}

// create styles for the render func
const styles = StyleSheet.create({
    welcome: {
      fontSize: 28
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});