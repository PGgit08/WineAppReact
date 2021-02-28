import AsyncStorage from '@react-native-community/async-storage';
import {USER_KEY} from './config';

export const SignIn = async (jwt) => {
    await AsyncStorage.setItem(USER_KEY, jwt);
};

export const SignOut = async () => {
    await AsyncStorage.removeItem(USER_KEY);
};

export const Init = async () => {
    // this is returned as a promise
    // the func in app will deal
    // with this promise
    try{
        return await AsyncStorage.getItem(USER_KEY);
    }
    catch{
        return undefined;
    };
};


