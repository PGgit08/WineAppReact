import React from 'react';

// api lib import
import axios from 'axios';

// config urls
import { AUTH_ENDPOINTS } from '../config';

// response checker(returns promise)
import { CheckResponse } from './ErrorHandler';

const API_LOGIN = async ({username, password}) => {
    // promise for api
    // catch use ErrorHandler
    try{
        let res = await axios.get(AUTH_ENDPOINTS.login, {params: {username, password}});
        return CheckResponse(res);
    }
    catch(err){
        // only occurs if axios error
        console.log(err);
        // return err;
    };

};

const API_REGISTER= async ({username, password, email}) => {
    try{
        let res = await axios.get(AUTH_ENDPOINTS.register, {
            params: {
                username: username, 
                password: password,
                email: email
            }
        });
        return CheckResponse(res);
    }
    catch(err){
        console.log(err);
    };

};

const API_IDENTIFY_USER = async (jwt) => {
    try{
        let res = await axios.get(AUTH_ENDPOINTS.identify, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
        return CheckResponse(res);
    }
    catch(err){
        console.log(err);
    };
};


export {
    API_LOGIN,
    API_REGISTER,
    API_IDENTIFY_USER
};