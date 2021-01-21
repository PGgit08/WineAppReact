// navigation for 
// Home and Auth
// flows

// have to import this
import React from 'react';

// screen imports
import Login from './screens/Login';
import Register from './screens/Register';

// navigation imports
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

export const homeFlow = '';

// authFlow, auth_server = dict containing api endpoints
export const authFlow = () => {
    const Stack = createStackNavigator();
    const auth_navigation = (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Screens for login and register */}
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

    // return navigation
    return auth_navigation;
};