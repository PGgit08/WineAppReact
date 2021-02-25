import React from 'react';

// api lib import
import axios from 'axios';

// config urls
import { AUTH_ENDPOINTS } from '../config';

const CheckResponse = (res) => {
    return new Promise((resolve, reject) => {
        if(res.data.error == 1){
            reject(
                {
                    isError: true,
                    errorMsg: res.data.mes
                }
            );
        }
        if(res.data.error == 0 || !res.data.hasOwnProperty("error")){
            // there will be no error
            // in some cases, like login
            // which just returns JWT
            resolve(res);
        };
    });
};

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

const identify = async () => {
    try{
        let res1 = await axios.get(AUTH_ENDPOINTS.identify, {
            headers: {
                'Authorization': 'Bearer ' + jwt
            }
        });
        CheckResponse(res1);
    }
    catch(err){
        console.log(err);
    };
};


export default{
    login, 
    register,
    identify
};