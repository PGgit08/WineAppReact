// imports
// react as usual
import React, { useEffect, useContext } from 'react';

// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeFlow, AuthFlow } from './src/navigation/navigations';

// context imports
import { MainContext, MainProvider } from './src/contexts/main_context';

// gui just for tests
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Platform
} from "react-native";

// if api error
import API_ErrorHandler from './src/api_handling/ErrorHandler';

// app stack
const AppStack = createStackNavigator();

// App function
function App(){
    // load the context state and changer(basically Context.Consumer)
    const context = useContext(MainContext);

    // only do this once app is done rendering
    useEffect(() => {
        // context action to check jwt
        // and update context
        context.actions.checkJWT;
    }, []);

    // return container, checking whether jwt exists or not
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                {context.state.jwt === null ? (
                    <>
                        {/* AuthFlow */}
                        <AppStack.Screen 
                            options={{headerShown: false}}
                            name = "Auth"
                            component = {AuthFlow}
                        />
                    </>
                ) : (
                    <>
                        {/* HomeFlow */}
                        <AppStack.Screen 
                            options={{headerShown: false}}
                            name = "Home"
                            component = {HomeFlow}
                        />
                    </>
                )}
            </AppStack.Navigator>
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
        <MainProvider>
            <App />
            <API_ErrorHandler/>
        </MainProvider>
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

