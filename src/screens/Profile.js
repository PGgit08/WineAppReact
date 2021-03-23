import React, { useContext, useEffect, useState } from 'react';

// react native UI
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView
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

import Post from '../components/post';

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
    const ReloadUser = async () => {
        setLoading(true);
        await actions.IdentifyUser(context_state.jwt);
        setLoading(false);
    };

    // button componenets
    const POSTS_BUTTON = () => (<Text h3>Posts</Text>);
    const SAVED_BUTTON = () => (<Text h3>Saved</Text>);

    const tab_buttons = [{ element: POSTS_BUTTON }, { element: SAVED_BUTTON }];

    const [currentButtonIndex, setButtonIndex] = useState(0);

    // loading state
    const [loading, setLoading] = useState(false);

    const ToggleInfo = () => {
        switch (currentButtonIndex){
            case 0: return (
                // posts here
                <>
                <ScrollView>
                    { UserProfile.posts.map((p, i) => {
                        // p = post, i = index
                        return (
                            <Post redirect={() => {navigation.navigate('Map')}} key={p.id} post={p}></Post>
                        );
                    }) }
                </ScrollView>
                </>
            )
            case 1: return (
                // saved here
                <Text h3>Nothing Here Yet.</Text>
            );
        };
    };

    useEffect(() => {
        ReloadUser();
    }, []);

    if(loading){
        return(
            <Text h1>LOADING</Text>
        );
    };

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

            <View style={{flex: 1, marginTop: 10, width:'100%'}}>
                <ButtonGroup 
                        onPress={(selectedIndex) => {setButtonIndex(selectedIndex); ReloadUser();}}
                        selectedIndex={currentButtonIndex}
                        buttons={tab_buttons}
                />
                <ToggleInfo/>
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
            backgroundColor: theme_basic.colors.main.red,
            position: 'relative'
        }
    }
);

export default Profile;
