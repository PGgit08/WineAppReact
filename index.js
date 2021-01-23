// import stuff
import React, {Component} from 'react';
import {registerRootComponent} from 'expo';
import {Init} from './src/storage';
import Auth from './src/Auth';
import Home from './src/Home';

import {
    StyleSheet,
    Text,
    View,
    Button
} from "react-native";

// App class
// hello
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            jwt: "",
            checkedLogin: false,
            loggedIn: false
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
                    this.setState({checkedLogin: true, loggedIn: true, jwt: val});
                }
                else{
                    this.setState({checkedLogin: true, loggedIn: false, jwt:""});
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

    change_state = (key, val) => {
        this.setState({[key]: val});
    };

    render(){
        const {jwt, checkedLogin, loggedIn} = this.state;
        if(loggedIn){
            // return home navigation
            return <Home rload={this.init} jwt={this.state.jwt}/>

        };
        if(!loggedIn){
            // return auth navigation
            return <Auth change_jwt={this.change_state} rload={this.init}/>
            // return(
            //     <View style={styles.container}>
            //         <Text style={styles.msg}>
            //             Your Are Not Logged In
            //         </Text>
            //     </View>
            // );
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
