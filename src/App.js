import React, { Component } from 'react';
import styled from 'styled-components';
import Login from './auth/Login'
import './App.css';


class App extends Component {
  render() {
    return (
      <Login/>
    );
  }
}

const Container = styled.div`
 border: 1px solid blue;
 display: flex;
 height: 100vh;
`

export default App;
