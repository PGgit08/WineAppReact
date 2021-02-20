import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";

// context
import { AuthContext } from '../contexts/main_context';


function Register({ navigation }){
    // create function state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const { Context_SignIn } = useContext(AuthContext).actions;

    // return jsx
    return (
        <View style={styles.container}>
        <StatusBar style="auto" />

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

        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Email."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(e) => setEmail(e)}
            />
        </View>
        
        <TouchableOpacity style={styles.loginBtn} onPress={() => console.log('bruh')}>
            <Text style={styles.loginBtn}>REGISTER</Text>
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
export default Register;

