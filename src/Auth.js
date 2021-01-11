// auth flow
import React, {Component} from 'react';
import {AUTH_ENDPOINTS} from '../config';
import {authFlow} from './navigation';

class Auth extends Component{
    render(){
        // return navigation stack here
        return(
            authFlow(AUTH_ENDPOINTS)
        );
    };
};

export default Auth;