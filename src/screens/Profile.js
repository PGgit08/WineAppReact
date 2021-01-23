import React, {Component} from 'react';
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
    };

    signOutfunc = async () => {
        SignOut();
        console.log(this.props.rload);
        this.props.rload();
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.msg}>
                    Logged In
                </Text>
                <Button title="Log Out" onPress={this.signOutfunc}/>
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
