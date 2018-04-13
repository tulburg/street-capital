import React, { Component } from "react";
import styled from "styled-components";

class ResetPassword extends Component {
  render() {
    return (
      <LoginContainer>
        <LoginContent>
          <div className="header-wrap">
            <h1>Lawyr</h1>
            <h6>Learning Resource for Law Students</h6>
          </div>

          <LoginForm>
            <h6 className="form__header">enter your email address</h6>
            <span className="form__subheader">
              You'd receive a link to reset your password
            </span>
            <div className="form__input-wrap">
              <input className="form__input" type="email" placeholder="Email" />
            </div>
            <div style={{ marginTop: "15px", marginBottom: "35px" }}>
              <a href="#" className="form__fpw">
                forgot password?
              </a>
            </div>
            <button className="form__btn">Reset</button>
          </LoginForm>
        </LoginContent>
      </LoginContainer>
    );
  }
}

const LoginForm = styled.div`
  width: 565px;
  border: 1px solid black;
  margin-top: 76px;
  border-radius: 14px;
  box-shadow: 0 20px 37px 0 rgba(132, 140, 163, 0.14);
  background-color: #ffffff;
  border: solid 1px rgba(155, 155, 155, 0.24);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  .form__header {
    font-size: 18px;
    color: #1c2d41;
    text-transform: uppercase;
    margin-bottom: 25px;
  }

  .form__subheader {
    opacity: 0.59;
    font-size: 14px;
    color: #4a4a4a;
    margin-bottom: 40px;
  }

  .form__input-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .form__input {
    border-radius: 5px;
    background-color: #f5f6fa;
    border: solid 1px #979797;
    padding: 15px;
    padding-left: 30px;
    width: 341px;
    height: 63px;
  }

  .form__fpw {
    text-decoration: underline;
    font-size: 13px;
    color: #000;
    text-transform: capitalize;
  }

  .form__btn {
    background-color: #1c2d41;
    width: 143px;
    height: 55px;
    border-radius: 9px;
    color: #fff;
    border: 0;
    font-size: 18px;
    font-weight: bold;
  }
`;

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;

  .header-wrap {
    text-align: center;

    h1 {
      font-size: 86px;
      margin-bottom: 22px;
    }

    h6 {
      font-size: 18px;
    }
  }
`;

export default ResetPassword;
