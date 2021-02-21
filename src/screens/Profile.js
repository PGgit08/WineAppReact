import React, { useContext } from 'react';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

// context
import { AuthContext } from '../contexts/main_context';

function Profile({ navigation }){
    // get context info
    const actions = useContext(AuthContext).actions;
    const state = useContext(AuthContext).state;
    
    // profile info
    var MyProfile = state.user;  

    // actions
    const Context_SignOut = actions.Context_SignOut;
    const { ReloadUser } = actions.IdentifyUser;

    // NOTE: since App is unmounted, it can't do conditional navigation(in return)
    // instead the Auth Stack will be mounted
    return(
        <View style={styles.container}>
            <Text style={styles.msg}>
                Logged In
            </Text>
            <Button title="Log Out" onPress={
                () => {
                    Context_SignOut();
                    // navigation.navigate("Auth");
                }
            }/>
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
