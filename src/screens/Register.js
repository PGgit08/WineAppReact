import { StatusBar } from "expo-status-bar";
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import {SignIn} from '../storage';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
    };

    onChangeText = (key, value) => {
        this.setState({[key]: value});
    };

    register(){
        const {username, password, email} = this.state;
        axios.get(AUTH_ENDPOINTS.register, {
            params: {
                username: username,
                password: password,
                email: email
            }
        }).then(
            (res) => {SignIn(res.data)}
        ).catch(
            (err) => {console.log(err)}
        );
    };

    render(){
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View>
                    <Button 
                    title='Register'
                    onPress={this.props.navigation.goBack()}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Username."
                        placeholderTextColor="#003f5c"
                        onChangeText={(u) => this.onChangeText('username', u)}
                    />
                </View>
            
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password."
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(p) => this.onChangeText('password', p)}
                    />
                </View>

                <View>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email."
                        placeholderTextColor="#003f5c"
                        onChangeText={(e) => this.onChangeText('email', e)}
                    />
                </View>
            
                <TouchableOpacity style={styles.loginBtn} onPress={this.register}>
                    <Text style={styles.registerBtn}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        );
      };
};

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

    registerBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493"
    }
});

export default Register
