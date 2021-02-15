// home flow
import React, {Component} from 'react';
import {homeFlow} from './navigation';

class Home extends Component{
    constructor(props){
        super(props);

        // create state with token, username, email
        this.state = {
            jwt: this.props.jwt,
            username: "",
            email: "",
            rload: this.props.rload
        };
        
    };
    render(){
        return homeFlow(this.state);
    };
}

export default Home;
