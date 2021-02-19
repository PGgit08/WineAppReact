import React, { useContext } from 'react';
import {SignOut} from '../storage';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

// context action for signout
import { Context_SignOut } from '../contexts/main_context_actions';

const signOut = () => {
    SignOut();
    Context_SignOut();
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
