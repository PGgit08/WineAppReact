import AsyncStorage from '@react-native-community/async-storage';
import USER_KEY from './config';

export const SignUp = (jwt) => {
    AsyncStorage.setItem(USER_KEY, jwt);
};

export const SignOut = () => {
    AsyncStorage.removeItem(USER_KEY);
};

export const Init = () => {
    try{
        const token = AsyncStorage.getItem(USER_KEY);
        return token;
    }
    catch(err){
        console.log(err);
        return null;
    }
};


