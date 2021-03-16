import React, { useState, useContext } from "react";

import {
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";

// context
import { MainContext } from '../contexts/main_context';

// UI react native elements
import {
    Input,
    Text,
    Button
} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Container
} from '../components/custom';


function Register({ navigation }){
    // create function state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const { Context_Register } = useContext(MainContext).actions;

    // return jsx
    return (
        <Container>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon 
                        name='arrow-left'
                        size={24}
                        color="black"
                        style={{flex: 1}}
                    />
                </TouchableOpacity>
                <Text h1>
                    Register
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
                <Input 
                    placeholder="Email"
                    onChangeText={(e) => setEmail(e)}
                />
            </View>

            <View style={styles.button_container}>
                <Button
                    title="Continue"
                    onPress={() => Context_Register({username, password, email})}
                />
            </View>

        </Container>
    );
};

// this doesn't really matter it's just stuff
// to make the screen look pretty
const styles = StyleSheet.create(
    {
        header: {
            flex: 1,
            marginTop: 80,
            flexDirection: 'row'
        },
        input_container: {
            flex: 2,
            marginTop: 60
        },
        button_container: {
            flex: 1,
            marginTop: 60
        }
    }
);
// export function
export default Register;

