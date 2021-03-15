import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";

// context
import { MainContext } from '../contexts/main_context';

// UI, custom componenets
import {
    Container
} from '../components/custom';

// pre-made ui
import {
    Button,
    Text,
    Input
} from 'react-native-elements';


function Login({ navigation }){
    // create function state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { Context_SignIn } = useContext(MainContext).actions;

    // return jsx
    return (
        <Container>
            <View style={styles.header}>
                <Text h1>
                    Login
                </Text>
            </View>

            <View style={styles.input_container}>
                <Input
                    placeholder="Username"
                    onChangeText={(u) => setUsername(u)}
                />
                
                <Input
                    placeholder="Password"
                    onChangeText={(p) => setPassword(p)}
                />
            </View>

            <View style={styles.register_button}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text>
                        New? Click Here To Register.
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button_container}>
                <Button
                    title="Continue"
                    onPress={() => Context_SignIn({username, password})}
                />
            </View>

        </Container>
    );
};

const styles = StyleSheet.create(
    {
        header: {
            flex: 1,
            marginTop: 80,
            marginLeft: 'auto',
            marginRight: 'auto',
            flexDirection: 'row'
        },
        input_container: {
            flex: 2,
            marginTop: 80
        },
        button_container: {
            marginLeft: 'auto',
            marginRight: 'auto',
            flex: 1,
            marginTop: 60
        },
        register_button: {
            flex: 1,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 30
        }
    }
);

// export function
export default Login;

