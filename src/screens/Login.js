import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
//   Button
} from "react-native";

// context
import { MainContext } from '../contexts/main_context';

// UI, custom componenets
import {
    Container
} from '../components/custom';

import {
    SocialIcon,
    Button,
    Text
} from 'react-native-elements';

function Login({ navigation }){
    // create function state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { Context_SignIn } = useContext(MainContext).actions;

    // return jsx
    return (
        <Container>
            <Text h1>
                Hello
            </Text>

            <View style={{width: '20%', margin: 'auto'}}>
                <Button
                    title="Continue Login"
                />
            </View>

            <View style={{width: ''}}>
                
            </View>
        </Container>
    );
}

const styles = StyleSheet.create(
    {
        button_container: {
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
)

// export function
export default Login;

