import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";

// api request lib
import axios from 'axios';

// storage
import {SignIn} from '../storage';

// context
import {AuthContext} from '../contexts/auth_context';

// config urls
import {AUTH_ENDPOINTS} from '../config';

// sign in function
const signIn = async (username, password) => {
    // try doing log in
    axios.get(AUTH_ENDPOINTS.login, {
        params: {
            username: username, 
            password: password
        }
    }).then(
        (res) => {
            // storage sign in
            SignIn(res.data);

            // context save jwt
            React.useContext(AuthContext).change_context({jwt: res.data});
        }
    ).catch(
        (err) => {console.log(err)}
    );
};

function Login({ navigation }){
    // create function state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // return jsx
    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
            <Button 
            title='Register'
            onPress={navigation.navigate('Register')}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Username."
                placeholderTextColor="#003f5c"
                onChangeText={(u) => setUsername(u)}
            />
        </View>
    
        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(p) => setPassword(p)}
            />
        </View>
    
        <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.loginBtn} onPress={() => signIn(username, password)}>
            <Text style={styles.loginBtn}>LOGIN</Text>
        </TouchableOpacity>
    </View>
    );
}

// this doesn't really matter it's just stuff
// to make the screen look pretty
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center"
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20
    },

    forgot_button: {
        height: 30,
        marginBottom: 30
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493"
    }
});

// export function
export default Login;

