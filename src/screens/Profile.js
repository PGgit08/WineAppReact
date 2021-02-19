import React, { useContext } from 'react';
import {SignOut} from '../storage';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import {AuthContext} from '../contexts/main_context';

const signOut = () => {
    SignOut();
    useContext(AuthContext).change_context({jwt: null});
};

function Profile(){
    return(
        <View style={styles.container}>
            <Text style={styles.msg}>
                Logged In
            </Text>
            <Button title="Log Out" onPress={signOut}/>
        </View>
    );
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
