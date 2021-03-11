import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
//   Button
} from "react-native";

// context
import { MainContext } from '../contexts/main_context';

// components
import {
    ButtonContainer,
    ButtonText,
    Input,
    Container
} from '../components/custom';

function Login({ navigation }){
    // create function state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { Context_SignIn } = useContext(MainContext).actions;

    // return jsx
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Input 
                onChangeText={(u) => setUsername(u)}
                placeholder="Username"
            />
            <Input 
                onChangeText={(p) => setPassword(p)}
                placeholder="Password"
                secureTextEntry={true}
            />
            
            <TouchableOpacity style={{marginBottom:15, marginTop:20}}>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>
        
            <ButtonContainer onPress={() => Context_SignIn({username, password})}>
                <ButtonText>Continue</ButtonText>
            </ButtonContainer>
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
        backgroundColor: "#FF1493"
    }
});

// export function
export default Login;

