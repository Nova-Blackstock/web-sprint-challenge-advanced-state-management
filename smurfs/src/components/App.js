import React, { Component } from "react";
import "./App.css";
import axios from 'axios'
import SmurfList from './SmurfList'
import Form from './Form'
import styled from 'styled-components'


const StyledApp = styled.div`
color: black;
background: url('https://www.dw.com/image/47553312_401.jpg');
height: 30vh;
`


class App extends Component {

  render() {
    return (
      <div className="App">
        <StyledApp></StyledApp>
        <h1>SMURFS UP!</h1>
        <Form />
        <SmurfList />
      </div>
    );
  }
}

export default App;
