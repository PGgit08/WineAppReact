import React, { useContext, useEffect } from 'react';

import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

// context
import { MainContext } from '../contexts/main_context';

// post component + refresh component
import Post from '../components/post';
import Refresh from '../components/refresh';

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
            <View style={styles.header}>
                
                <Text style={styles.profile_text}>Profile</Text>
                <Image
                    source={require('../static/wineappglass.jpg')}
                    style={styles.profile_image}
                />
                
                <View style={{flex: 1}}>
                    <Text style={styles.cred_text}> Username: { UserProfile.username } </Text>
                    <Text style={styles.cred_text}> Email: { UserProfile.email }</Text>
                </View>
            
            </View>
        </View>
    );
};

// styles
const styles = StyleSheet.create({
    container: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    profile_text: {
        flex: 0.2,
        fontSize: 50
    },
    profile_image: {
        width: 80,
        height: 80,
        borderRadius: 200 / 2,
        marginBottom: 15
    },
    cred_text: {
        fontSize: 20,
        backgroundColor: 'red',
        alignContent: 'center'
    }
});

export default Profile;
