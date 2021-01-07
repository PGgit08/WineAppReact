// import stuff
import React from 'react';
import {registerRootComponent} from 'expo';
import {Init} from './src/storage';
// import Auth from './src/Auth';
// import Home from './src/Home';

import {
    StyleSheet,
    Text,
    View
} from "react-native";

// App class
class App extends React.Component{
    constructor(){
        this.state = {
            jwt: "",
            checkedLogin: false,
            loggedIn: false
        };
    };

    // react.component method
    // gets called when components render
    // successfully
    componentDidMount(){
        const token = Init();
        if(token == null){
            this.setState({
                checkedLogin: true
            });
        };

        if(token != null){
            this.setState({
                jwt: token,
                checkedLogin: true,
                loggedIn: true
            });
        };
    };

    render(){
        const {jwt, checkedLogin, loggedIn} = this.state;
        if(loggedIn){
            // return home navigation
            // <Home/>
            return(
                <View style={styles.container}>
                    <Text style={styles.msg}>
                        Logged In
                    </Text>
                </View>
            );
        };
        if(!loggedIn){
            // return auth navigation
            // <Auth/>
            return(
                <View style={styles.container}>
                    <Text style={styles.msg}>
                        Your Are Not Logged In
                    </Text>
                </View>
            );
        };
        
        if (!checkedLogin){
            // return if the person is not logged in
            return(
                <View style={styles.container}>
                    <Text style={styles.msg}>
                        Login Not Checked
                    </Text>
                </View>
            );
        };
    };
};

const styles = StyleSheet.create({
    msg: {
      fontSize: 28
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

// expo uses this registry method instead of registry component
// when app launches maybe registry component will work
registerRootComponent(App);
