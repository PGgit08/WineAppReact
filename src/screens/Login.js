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
import login_user from '../services/login'
import deviceStorage from '../services/storage'

// login function
// here three things happen:
// 1. gui for login
// 2. server request for login
// 3. storage things(like tokens)
function Login(){

    var uname = ''
    var pword = ''

    if(deviceStorage.getItem('is_logged_in') != 'true'){
      return (
          <View style={styles.container}>
          {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}

          <StatusBar style="auto" />
          <View style={styles.inputView}>
          <TextInput
              style={styles.TextInput}
              placeholder="Username."
              placeholderTextColor="#003f5c"
              onChangeText={(username) => uname=username}
          />
          </View>

          <View style={styles.inputView}>
          <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => pword=password}
          />
          </View>

          <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={() => login_user(uname, pword)}>
          <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          </View>
      );
    }
    
    else{
      return(
        <View style={styles.container}>
          <Text style={styles.forgot_button}>You are already logged in.</Text>
        </View>
      )
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
