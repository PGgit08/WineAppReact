import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, } from 'react-native'

class App extends Component {
  state = {
    textValue: 'bruh',
    bottom: 20
  }

  onPress = () => {
    var change;
    if(this.state.textValue == 'boi'){
      change = 'bruh';
    }

    else{
      change = 'boi';
    };

    this.setState({
      textValue: change,
      bottom: this.state.bottom += 1
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'yellow', bottom:this.state.bottom}}>{this.state.textValue}</Text>
        <Button onPress={this.onPress} title="Click Me!"/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    top: 100
  },
});

// export default, allows another program to import this function, only this function
export default App;
