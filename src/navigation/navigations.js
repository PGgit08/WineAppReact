// navigation for 
// Home and Auth
// flows

// have to import this
import React from 'react';

// screen imports auth
import Login from '../screens/Login';
import Register from '../screens/Register';

// screen imports home
import map from '../screens/Map';
import Profile from '../screens/Profile';


// navigation imports
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// for tab navigator
const Tab = createBottomTabNavigator();
export const HomeFlow = (state) => {
    // navigation stacks later here
    const home_navigation = (
        <Tab.Navigator initialRouteName="Profile">
            <Tab.Screen 
                component={Profile}
                name='Profile'
            />
            {/* <Tab.Screen
                component={map}
                name='Map'
            /> */}
        </Tab.Navigator>
    );
    return home_navigation;
};

// for authflow
const Stack = createStackNavigator();

// authFlow stack
export const AuthFlow = () => {
    const auth_navigation = (
        <Stack.Navigator initialRouteName="Login">
            {/* Screens for login and register */}
            <Stack.Screen
                name="Login" 
                component={Login} 
            />            
            <Stack.Screen
                name="Register"
                component={Register}
            />
        </Stack.Navigator>
    );

    // return stack
    return auth_navigation;
};