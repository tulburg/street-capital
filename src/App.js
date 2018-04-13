import React, { Component } from 'react';
import styled from 'styled-components';
import Login from './auth/Login';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';

import './App.css';


class App extends Component {
  render() {
    return (
      <ResetPassword/>
    );
  }
}

const Container = styled.div`
 border: 1px solid blue;
 display: flex;
 height: 100vh;
`

export default App;
