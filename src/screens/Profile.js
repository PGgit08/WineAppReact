import React, { useContext, useEffect } from 'react';

// react native UI
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

// custom UI + react native elements
import {
    Container
} from '../components/custom';

import {
    Text,
    Button,
    Avatar
} from 'react-native-elements';

import {
    theme_basic
} from '../config';

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
        <Container>
            <View style={styles.header}>
                {/* HEADER */}
                <Text h1 h1Style={{color: theme_basic.colors.main.black}}>
                    Profile
                </Text>
            </View>

            <View style={{marginTop: 10, flex:1}}>
                <View style={styles.cred_info}>
                    {/* CREDENTIAL INFO + PROFILE PIC */}
                    <Avatar 
                        rounded
                        title="JD"
                        size="medium"
                        avatarStyle={{flex: 1}}
                        overlayContainerStyle={{backgroundColor:'blue'}}
                    />
                    <View style={{marginLeft: 10, marginTop: 5}}>
                        <Text>Username: { UserProfile.username }</Text>
                        <Text>Email: { UserProfile.email }</Text>
                    </View>
                </View>

                <View style={{marginTop: 15}}>
                    <Button
                        title="Edit Profile"
                        onPress={() => alert("not done yet")}
                    />
                </View>
            </View>

            <View style={styles.logout_button}>
                {/* LOGOUT BUTTON */}
                <TouchableOpacity onPress={Context_SignOut}>
                    <Text h3>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
};

// styles
const styles = StyleSheet.create(
    {
        header: {
            paddingTop: 15,
            paddingBottom: 15,
            width: '100%',
            textAlign: 'center',
            backgroundColor: theme_basic.colors.main.red
        },
        cred_info: {
            flexDirection: 'row'
        },
        logout_button: {
            paddingTop: 5,
            paddingBottom: 5,
            width: '100%',
            textAlign: 'center',
            backgroundColor: theme_basic.colors.main.red
        },
        edit_button: {
            flex: 1
        }
    }
);

export default Profile;
