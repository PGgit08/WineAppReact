// imports
// react as usual
import React, { useEffect, useContext } from 'react';

// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeFlow, AuthFlow } from './src/navigation/navigations';

// context imports(+ theme context)
import { MainContext, MainProvider } from './src/contexts/main_context';
import { ThemeProvider } from './src/contexts/theme_context';

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

// expo registering
import { registerRootComponent } from 'expo';

// safe area for app to run smoothly on all phones
import { SafeAreaProvider } from 'react-native-safe-area-context';

// sort of like a "consumer" for the custom components using the theme
import { GetTheme } from './src/components/custom';

// app stack(navigation)
const AppStack = createStackNavigator();


// App function
function App(){
    // load the context state and changer(basically Context.Consumer)
    const context = useContext(MainContext);
    console.log(context);

    // only do this once app is done rendering
    useEffect(() => {
        // context action to check jwt
        // and update context
        context.actions.checkJWT();
    },[]);

    // if loading or not
    if(context.state.storage_loading){
        // rendering will occur before the useEffect
        // so this is here
        return <Text>loading</Text>;
    };

    // return container, checking whether jwt exists or not
    return(
        <NavigationContainer>
            {/* {console.log('app re-render')} */}
            <AppStack.Navigator>
                {context.state.jwt === null || context.state.jwt === undefined? (
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
        <SafeAreaProvider>
            <ThemeProvider>
                <GetTheme/>
                <MainProvider>
                    <API_ErrorHandler/>
                    <App />
                </MainProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    );
};


// expo uses this registry method instead of registry component
// when app launches maybe registry component will work
registerRootComponent(Full_App);

// for web
// AppRegistry.registerComponent("Peter-First-App", () => Full_App);


// if (Platform.OS == "web"){
//     AppRegistry.runApplication("Peter-First-App", {
//         rootTag: document.getElementById('root')
//     });
// };

