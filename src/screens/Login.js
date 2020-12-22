import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import axios from 'axios'
import {goHome, goAuth} from '../navigation'


// login function
// here three things happen:
// 1. gui for login
// 2. server request for login
// 3. storage things(like tokens)
class Login extends Component{

  state = {
    username: '',
    password: ''
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value})
  }

  signIn = async () => {
    const {username, password} = this.state;
    const api_endpoint = 'https://wineapp-api.herokuapp.com/login'
    // try doing log in
    try{
      axios.get(api_endpoint, {
        params: {
          username: username, 
          password: password
        }
      }).then((response) => {
        // async storage, set jwt
        console.log(response)
      }).catch((error) => {
        console.log(error)
        // retry
      })
    }

    catch(error){
      console.log('Login error: ' + error);
      goAuth();
    };

  };

  render(){
    return (
      <View style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}

      <StatusBar style="auto" />
      <View style={styles.inputView}>
      <TextInput
          style={styles.TextInput}
          placeholder="Username."
          placeholderTextColor="#003f5c"
          onChangeText={(u) => this.onChangeText(username, u)}
      />
      </View>

      <View style={styles.inputView}>
      <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(p) => this.onChangeText(password, p)}
      />
      </View>

      <TouchableOpacity>
      <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={this.signIn}>
      <Text style={styles.loginText}>LOGIN</Text>
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
    justifyContent: "center",
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});

// export class
export default Login;
