// imports
// react as usual
import React, { useEffect } from 'react';

// storage imports
import { Init } from './src/storage';

// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { HomeFlow, AuthFlow } from './src/navigation/navigations';

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


// App function
function App(){

    // load the context state and changer(basically Context.Consumer)
    const auth_context = React.useContext(AuthContext);
    
    // only do this once app is done rendering
    useEffect(() => {
        // change context's state to what init
        // function returns
        // this is all async so that 
        // the later code can be compiled
        Init().then(
            (val) => {
                auth_context.change_context({jwt: val});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    });
    
    // then load the context's state
    const jwt = auth_context.context.jwt;

    // return container, checking whether jwt exists or not
    return(
        <NavigationContainer>
            {jwt == null ? (
                <>
                    <AuthFlow/>
                </>
            ) : (
                <>
                    <HomeFlow/>
                </>
            )};
        </NavigationContainer>
    );
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

