// navigation for 
// Home and Auth
// flows

// have to import this
import React from 'react';

// screen imports auth
import login from './screens/Login';
import register from './screens/Register';

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
    const Stack = createStackNavigator();
    const auth_navigation = (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {/* Screens for login and register */}
                <Stack.Screen
                    name="Login" 
                    component={login} 
                    initialParams={{change_jwt: change_jwt,
                                    rload: rload,
                                    api_endpoint: AUTH_ENDPOINTS.login}}
                />            
                <Stack.Screen
                    name="Register"
                    component={register}
                    initialParams={{rload: rload,
                                    api_endpoint: AUTH_ENDPOINTS.register}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

    // return navigation
    return auth_navigation;
};