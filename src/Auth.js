// auth flow
import React, {Component} from 'react';
import {authFlow} from './navigation';

class Auth extends Component{
    render(){
        // return navigation stack here
        return authFlow(this.props.change_jwt, this.props.rload);
    };
};

export default Auth;