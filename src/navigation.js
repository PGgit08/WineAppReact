// navigation for 
// Home and Auth
// flows

// have to import this
import React from 'react';

// screen imports auth
import Login from './screens/Login';
import Register from './screens/Register';

// screen imports home
import Map from './screens/Map';
import Profile from './screens/Profile';

// navigation imports
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// get api endpoints
import {AUTH_ENDPOINTS} from './config';

export const homeFlow = (state) => {
    // navigation stacks later here
    return <Profile token={state.jwt} rload={state.rload}/>;
};

// authFlow, auth_server = dict containing api endpoints
export const authFlow = (change_jwt, rload) => {
    const login_endpoint = AUTH_ENDPOINTS.login;

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
    return <Login change_jwt={change_jwt} rload={rload} api_endpoint={login_endpoint}/>;
};