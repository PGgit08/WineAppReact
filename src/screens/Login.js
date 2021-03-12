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

// UI, custom componenets
import {
    Container
} from '../components/custom';

function Login({ navigation }){
    // create function state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { Context_SignIn } = useContext(MainContext).actions;

    // return jsx
    return (
        <Container>
            
        </Container>
    );
}


// export function
export default Login;

