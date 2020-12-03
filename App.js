import React, { Component } from "react";
import { StyleSheet, Text, View, Alert} from "react-native";
import MapView from "react-native-maps";

class App extends Component {
  render() {
    return (
      <MapView
        style={{
          flex: 1
        }}
        initialRegion={{
          latitude: 0,
          longitude: 0
        }}
      />
    );
  };
};

export default App;
