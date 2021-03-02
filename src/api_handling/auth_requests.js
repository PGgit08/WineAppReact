import React from 'react';

// api lib import
import axios from 'axios';

// config urls
import { AUTH_ENDPOINTS } from '../config';

// response checker(returns promise)
import { CheckResponse } from './ErrorHandler';

const login = async ({username, password}) => {
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

const register = async ({username, password, email}) => {
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

const identify_user = async (jwt) => {
    try{
        let res = await axios.get(AUTH_ENDPOINTS.identify, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
        CheckResponse(res);
    }
    catch(err){
        console.log(err);
    };
};


export default{
    login, 
    register,
    identify_user
};