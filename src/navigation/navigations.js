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

// for profile navigation (posts, liked, saved, etc.)
const ProfileTabs = createBottomTabNavigator();
export const ProfileTab = () => {
    const profile_tabs = (
        <ProfileTabs.Navigator>
            {/* Here Posts, Liked, Saved, etc are made */}
            
        </ProfileTabs.Navigator>
    );
    return profile_tabs;
};

// for stack navigator
const HomeStack = createStackNavigator();
export const HomeFlow = () => {
    // navigation stacks for home (map -> profile)
    const home_navigation = (
        <HomeStack.Navigator initialRouteName="Profile">
            <HomeStack.Screen 
                component={Profile}
                name='Profile'
            />
        </HomeStack.Navigator>
    );
    return home_navigation;
};

// for authflow
const AuthStack = createStackNavigator();

// authFlow stack
export const AuthFlow = () => {
    const auth_navigation = (
        <AuthStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            {/* Screens for login and register */}
            <AuthStack.Screen
                name="Login" 
                component={Login} 
            />            
            <AuthStack.Screen
                name="Register"
                component={Register}
            />
        </AuthStack.Navigator>
    );

    // return stack
    return auth_navigation;
};