// imports
// react as usual
import React, { useEffect, useContext } from 'react';

// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { HomeFlow, AuthFlow } from './src/navigation/navigations';

// context imports
import { AuthContext, AuthProvider } from './src/contexts/main_context';

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
    const context = useContext(AuthContext);

    // only do this once app is done rendering
    useEffect(() => {
        // context action to check jwt
        // and update context
        context.actions.checkJWT;
    });

    // return container, checking whether jwt exists or not
    return(
        <NavigationContainer>
            {context.state.jwt === null ? (
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

