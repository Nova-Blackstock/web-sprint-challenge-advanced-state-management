import React, { Component } from "react";
import "./App.css";
import axios from 'axios'
import SmurfList from './SmurfList'
import Form from './Form'



class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <Form />
        <SmurfList />
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
