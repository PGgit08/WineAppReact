import React from "react";
import { StyleSheet, Text, View, Alert, Button} from "react-native";
import MapView from "react-native-maps";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// create vars
const stack = createStackNavigator();

// load map
function LoadMap(){
  return (
    <MapView
      style={{
        flex: 1
      }}
      initialRegion={{
        latitude: 0,
        longitude: 0,
        latitudeDelta: 5,
        longitudeDelta: 1
      }}
    />
  );
};

// make LoginScreen
function LoginScreen({ navigation }){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Page</Text>
      
      <Button 
        title="Go to Maps"
        onPress={() => navigation.navigate('Wine Map')}
      />
    
    </View>
  )
}

// make navigation in between screens function
function Navigator(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={LoginScreen}/>
        <stack.Screen name="Wine Map" component={LoadMap}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};

function App(){
  return (
    Navigator()
  );
}; 

export default App;
