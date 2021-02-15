// import stuff
import React, {Component} from 'react';
// import {registerRootComponent} from 'expo';
import {Init} from './src/storage';
import {goHome, goAuth} from './src/flows/flow_navigation';

import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Platform
} from "react-native";

// App class
// hello
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            jwt: null,
            checkedLogin: false
        };
    };

    // init function
    // checks if person logged in or not
    init = () => {
        // lol
        // this promise is an asyncstorage promise(returned)
        const token_promise = Init();

        // check promise if it has loaded
        // or gotten an error
        token_promise.then(
            (val) => {
                if(val != null){
                    this.setState({checkedLogin: true, jwt: val});
                }
                else{
                    this.setState({checkedLogin: true, jwt: null});
                };
            }
        ).catch(
            (err) => {console.log(err)}
        );
    };

    // react.component method
    // gets called when components render
    // successfully
    
    componentDidMount(){
        // call Init func
        this.init();
    };

    render(){
        // render home or auth flows based on state
        const {checkedLogin, jwt} = this.state;
        if(!checkedLogin){
            return (
            <View>
                <Text>
                    Some sort of app error, well that sucks.
                    HAVE FUN!!!!!!!
                </Text>
            </View>);
        };

        if(!jwt){
            // if no jwt was found, Authenticate
            return goAuth();
        };

        if(jwt){
            // if jwt was found, go Home
            return goHome();
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
// registerRootComponent(App);

// for web
AppRegistry.registerComponent("Peter-First-App", () => App);


if (Platform.OS == "web"){
    AppRegistry.runApplication("Peter-First-App", {
        rootTag: document.getElementById('root')
    });
};

