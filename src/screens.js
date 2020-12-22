// register screens from react-navigation
import {Navigation} from 'react-native-navigation';

// func for registering screens
export function registerScreens() {
    // in the .default we enter params like jwt or username+email from apps state
    Navigation.registerComponent('Home', () => require('./screens/Map').default);
    Navigation.registerComponent('Initializing', (sc) => require('./screens/Init').default);
    Navigation.registerComponent('SignIn', () => require('./screens/Login').default);
    Navigation.registerComponent('SignUp', () => require('./screens/Register').default);
    Navigation.registerComponent('Profile', () => require('./screens/Profile').default);
    // other screens will be added later
};
