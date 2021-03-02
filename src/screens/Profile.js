import React, { useContext, useEffect } from 'react';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

// context
import { MainContext } from '../contexts/main_context';

function Profile({ navigation }){
    // get context info
    const actions = useContext(MainContext).actions;
    const context_state = useContext(MainContext).state;
    
    // profile info
    var UserProfile = context_state.user;  

    // actions
    const Context_SignOut = actions.Context_SignOut;
    const ReloadUser = actions.IdentifyUser;

    useEffect(() => {
        ReloadUser(context_state.jwt);
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.msg}>
                Logged In
            </Text>
            <Button title="Log Out" onPress={Context_SignOut}/>
            {console.log(UserProfile)}
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
