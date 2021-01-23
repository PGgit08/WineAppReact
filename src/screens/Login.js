import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import axios from 'axios';
import {SignIn} from '../storage';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onChangeText = (key, value) => {
        this.setState({[key]: value});
    };

    signInfunc = async () => {
        const {username, password} = this.state;
        // try doing log in
        axios.get(this.props.api_endpoint, {
            params: {
                username: username, 
                password: password
            }
        }).then(
            (res) => {
                SignIn(res.data);
                this.props.change_jwt('jwt', res.data);
                this.props.rload();
            }
        ).catch(
            (err) => {console.log(err)}
        );
    };

    render(){
        return (
            <View style={styles.container}>
            <StatusBar style="auto" />
            {/* <View>
                <Button 
                title='Register'
                onPress={navigation.navigate('Register')}
                />
            </View> */}
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
        
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.loginBtn} onPress={this.signInfunc}>
                <Text style={styles.loginBtn}>LOGIN</Text>
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

// export class
export default Login;
