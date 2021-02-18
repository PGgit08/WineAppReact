import React, { Component } from 'react';
import {SignOut} from '../storage';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

class Profile extends Component{
    constructor(props){
        super(props);

        this.state = {
            log_out: false
        };
    };

    signOut = async () => {
        SignOut();
        this.setState({log_out: true});
    };

    render(){
        if(this.state.log_out){
            return goAuth();
        };

        return(
            <View style={styles.container}>
                <Text style={styles.msg}>
                    Logged In
                </Text>
                <Button title="Log Out" onPress={this.signOut}/>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    msg: {
      fontSize: 28
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default Profile;
