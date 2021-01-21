// auth flow
import React, {Component} from 'react';
import {authFlow} from './navigation';

class Auth extends Component{
    render(){
        // return navigation stack here
        return authFlow();
    };
};

export default Auth;