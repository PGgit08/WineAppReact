import React, { useContext, useEffect } from 'react';

// react native UI
import {
    View,
    Button,
    StyleSheet
} from 'react-native';

// custom UI + react native elements
import {
    Container
} from '../components/custom';

import {
    Text
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

            <View>
                {/* CREDENTIAL INFO + PROFILE PIC */}
            </View>
        </Container>
    );
};

// styles
const styles = StyleSheet.create(
    {
        header: {
            flex: 1,
            backgroundColor: theme_basic.colors.main.red
        }
    }
);

export default Profile;
