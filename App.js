// main app, will use screens
import React, {Component} from 'react'
import Login from './src/screens/Login'

class App extends Component{
  // create navigations and shit
  render(){
    return(
      Login()
    );
  };
};

export default App;
