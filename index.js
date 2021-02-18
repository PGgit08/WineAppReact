// imports
// react as usual
import React, { Component } from 'react';

// storage imports
import { Init } from './src/storage';

// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { homeFlow, authFlow } from './src/navigation/navigations';

// context imports
import { AuthContext, AuthProvider } from './src/contexts/auth_context';

// gui just for tests
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Platform
} from "react-native";


// App class
class App extends Component{
    constructor(props){
        super(props);
    };

    // init function
    // checks if person logged in or not
    init = () => {
        // this promise is an asyncstorage promise(returned)
        const token_promise = Init();

        // check promise if it has loaded
        // or gotten an error
        token_promise.then(
            (val) => {
                if(val != null){
                    return val;
                }
                else{
                    return null;
                };
            }
        ).catch(
            (err) => {console.log(err)}
        );
    };

    // rendering
    render(){
        // load the context state and changer(basically Context.Consumer)
        const auth_context = React.useContext(AuthContext);
        
        // change context's state to what init
        // function returns
        auth_context.state_change(this.init());
        
        // then load the context's state
        const {jwt} = auth_context.state.jwt;

        // return container
        return(
            <NavigationContainer>
            {/* check here whether jwt exists or not */}
            </NavigationContainer>
        );
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

// full function for loading everything
function Full_App(){
    return (
        <AuthProvider>
            <App />
        </AuthProvider>
    );
};


// expo uses this registry method instead of registry component
// when app launches maybe registry component will work
// registerRootComponent(App);

// for web
AppRegistry.registerComponent("Peter-First-App", () => Full_App);


if (Platform.OS == "web"){
    AppRegistry.runApplication("Peter-First-App", {
        rootTag: document.getElementById('root')
    });
};

