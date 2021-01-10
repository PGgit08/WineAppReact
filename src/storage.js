import AsyncStorage from '@react-native-community/async-storage';
import {USER_KEY} from './config';

export const SignIn = (jwt) => {
    AsyncStorage.setItem(USER_KEY, jwt);
};

export const SignOut = () => {
    AsyncStorage.removeItem(USER_KEY);
};

export const Init = () => {
    // this is returned as a promise
    // the func in app will deal
    // with this promise
    return AsyncStorage.getItem(USER_KEY);
};


