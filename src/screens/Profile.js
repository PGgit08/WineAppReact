import React, { useContext, useEffect, useState } from 'react';

// react native UI
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

// custom UI + react native elements
import {
    Text,
    Button,
    Avatar,
    ButtonGroup
} from 'react-native-elements';

import {
    theme_basic
} from '../config';

// context
import { MainContext } from '../contexts/main_context';

// profile page switch tab navigator
import {
    ProfileTabs
} from '../navigation/navigations';


function Profile({ navigation }){
    // get context info
    const actions = useContext(MainContext).actions;
    const context_state = useContext(MainContext).state;
    
    // profile info
    var UserProfile = context_state.user;  

    // actions
    const Context_SignOut = actions.Context_SignOut;
    const ReloadUser = actions.IdentifyUser;

    // posts or saved button indexes 
    const button_index = {
        0: () => {},
        1: () => {}
    };

    // button componenets
    const POSTS_BUTTON = () => (<Text h3>Posts</Text>);
    const SAVED_BUTTON = () => (<Text h3>Saved</Text>);

    const tab_buttons = [{ element: POSTS_BUTTON }, { element: SAVED_BUTTON }];

    const [currentButtonIndex, setButtonIndex] = useState(0);

    useEffect(() => {
        ReloadUser(context_state.jwt);
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                {/* HEADER */}
                <Text h1 h1Style={{color: theme_basic.colors.main.black}}>
                    Profile
                </Text>
            </View>

            <View style={{marginTop: 10}}>
                <View style={styles.cred_info}>
                    {/* CREDENTIAL INFO + PROFILE PIC */}
                    <Avatar 
                        rounded
                        title="JD"
                        size="medium"
                        avatarStyle={{flex: 1}}
                        overlayContainerStyle={{backgroundColor:'blue'}}
                    />
                    <View style={{marginLeft: 10, marginTop: 5, flex:2}}>
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

            <View style={{flex: 1, marginTop: 10, backgroundColor:'green', width:'100%'}}>
                <Text>Info Scroll View(Posts/Saved)</Text>

                <ButtonGroup 
                        onPress={(selectedIndex) => {button_index[selectedIndex](); setButtonIndex(selectedIndex);}}
                        selectedIndex={currentButtonIndex}
                        buttons={tab_buttons}
                />
                
                <ProfileTabs.Navigator screenOptions={{tabBarVisible: false}}>

                </ProfileTabs.Navigator>
            </View>



            <View style={styles.logout_button}>
                {/* LOGOUT BUTTON */}
                <TouchableOpacity onPress={Context_SignOut}>
                    <Text h3>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// styles
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
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
        }
    }
);

export default Profile;
