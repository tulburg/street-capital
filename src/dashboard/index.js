import React, { Component } from "react";
import styled from "styled-components";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header>
          <div className="header__logo">Lawyr</div>
          <div>
            <button className="btn-signout">Sign out</button>
          </div>
        </Header>
        <Content>
          <div className="navigation">
            <NavigationCard>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Home
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Tests
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Flashcards
                </a>
              </li>
              <li>
                <hr />
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Payments
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  All users
                </a>
              </li>
            </NavigationCard>
          </div>

          <div className="main-section">
            <h2 className='main-section__header'>Overview</h2>
            <div className="card-wrap">
              <Card>
                <div className="top">
                  <div className="icon" />
                  <div className="card__info">
                    <h2>3600</h2>
                    <p>Signed Up Users</p>
                  </div>
                </div>
                <button>Invite Users</button>
              </Card>
              <Card className='card--white'>
                <div className="top">
                  <div className="icon" />
                  <div className="card__info">
                    <h2>3600</h2>
                    <p>Signed Up Users</p>
                  </div>
                </div>
                <button>Invite Users</button>
              </Card>
              <Card className='card--white'>
                <div className="top">
                  <div className="icon" />
                  <div className="card__info">
                    <h2>3600</h2>
                    <p>Signed Up Users</p>
                  </div>
                </div>
                <button>Invite Users</button>
              </Card>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

const Card = styled.div`
  // max-width: 324px;
  width: 30%;
  padding: 32px 30px;
  // height: 223px;
  border-radius: 12px;
  box-shadow: 0 18px 29px 0 rgba(132, 140, 163, 0.44);
  background-color: #1c2d41;
  border: solid 1px rgba(155, 155, 155, 0.24);
  display: flex;
  flex-direction: column;
  color: #fff;

  &.card--white {
    background-color: #fff;
    color: #1c2d41;

    p {
      color: #99a0a9
    }

    button {
      background-color: #1c2d41;
      color: #fff;
    }
  }

  .top {
    display: flex;
    margin-bottom: 25px;
  }

  .card__info {
    h2 {
      margin-bottom: 10px;
      font-size: 28px;
    }

    p { font-size: 18px;}
  }

  .icon {
    height: 50px;
    width: 50px;
    border: 1px solid #fff;
    margin-right: 15px;
  }

  button {
    height: 50px;
    border-radius: 8px;
    background-color: #50e3c2;
    border: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

const NavigationCard = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(153, 160, 169, 0.29);
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  font-size: 18px;

  hr {
    opacity: 0.17;
    border: solid 1px #979797;
  }

  .navigation__link {
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #4a4a4a;
    text-decoration: none;
    height: 50px;

    &:hover {
      background-color: #1c2d41;
      color: #fff;
    }
  }
`;

const Content = styled.div`
  background-color: #f6f6f6;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 78px 94px;

  .navigation {
    width: 15%;
  }

  .main-section {
    // border: 1px solid red;
    width: 80%;

    .main-section__header {
      margin-bottom: 25px;
    }

    .card-wrap {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 90px;
  padding-right: 90px;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);

  .header__logo {
    font-size: 32px;
    font-weight: bold;
    color: #000;
  }

  .btn-signout {
    font-size: 14px;
    letter-spacing: 0.9px;
    color: #000;
    width: 131px;
    height: 50px;
    border-radius: 8px;
    border: 0;
  }
`;
