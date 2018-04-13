import React, { Component } from "react";
import styled from "styled-components";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </div>
      </Router>
    );
  }
}

const Container = styled.div`
  border: 1px solid blue;
  display: flex;
  height: 100vh;
`;

export default App;
