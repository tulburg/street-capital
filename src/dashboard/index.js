import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from "../components/Modal";

const SendInvite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 48px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #9b9b9b;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.3px;
    color: #000000;
    margin-bottom: 20px;

    &.uppercase {
      text-transform: uppercase;
    }
  }

  .subtext {
    opacity: 0.59;
    font-size: 14px;
    color: #4a4a4a;
  }

  .textbox {
    width: 456px;
    height: 63px;
    border-radius: 5px;
    background-color: #f5f6fa;
    border: solid 1px #979797;
    font-size: 18px;
    color: #9b9b9b;
    padding-left: 15px;
    margin-top: 25px;
    margin-bottom: 35px;
  }

  button {
    width: 143px;
    height: 55px;
    border-radius: 9px;
    background-color: #50e3c2;
    border: 0;
    font-size: 18px;
    font-weight: bold;
    color: #1c2d41;
  }

  .input-wrap {
    position: relative;

    &__btn {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      border: 0;
      position: absolute;
      right: 12px;
      top: 38px;
      background-color: #50e3c2;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .invite-sent {
    font-size: 14px;
    color: #000000;
  }
`;
export default class Dashboard extends Component {
  state = {
    showModal: true,
    showDoneModal: false
  };

  onCloseModal = () => {
    this.setState({
      showModal: false,
      showDoneModal: false
    });
  };
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
                <Link
                  to={`${this.props.match.url}`}
                  className="navigation__link"
                >
                  <span className="navigation__link-icon">
                    <i className="fas fa-home" />
                  </span>
                  <span className="navigation__link-text">Home</span>
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  to={`${this.props.match.url}/tests`}
                  className="navigation__link"
                >
                  <span className="navigation__link-icon">
                    <i className="far fa-file-alt" />
                  </span>
                  <span className="navigation__link-text">Tests</span>
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  to={`${this.props.match.url}/flashcards`}
                  className="navigation__link"
                >
                  <span className="navigation__link-icon">
                    <i className="fas fa-sticky-note" />
                  </span>
                  <span className="navigation__link-text">Flashcards</span>
                </Link>
              </li>
              <li>
                <hr />
              </li>
              <li className="navigation__item">
                <Link
                  to={`${this.props.match.url}/payments`}
                  className="navigation__link"
                >
                  <span className="navigation__link-icon">
                    <i className="far fa-credit-card" />
                  </span>
                  <span className="navigation__link-text">Payments</span>
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  to={`${this.props.match.url}/users`}
                  className="navigation__link"
                >
                  <span className="navigation__link-icon">
                    <i className="fas fa-user" />
                  </span>
                  <span className="navigation__link-text">All Users</span>
                </Link>
              </li>
            </NavigationCard>
          </div>

          <Route
            path={`${this.props.match.url}`}
            render={() => (
              <div className="main-section">
                <Modal
                  closeModal={this.onCloseModal}
                  visible={this.state.showModal}
                >
                  <SendInvite>
                    <h4 className="header">Invite users</h4>
                    <span className="subtext">
                      Enter an Email Address to Continue
                    </span>
                    <input className="textbox" placeholder="Email Address" />
                    <button
                      onClick={() =>
                        this.setState({ showDoneModal: true, showModal: false })
                      }
                    >
                      Invite
                    </button>
                  </SendInvite>
                </Modal>
                <Modal
                  closeModal={this.onCloseModal}
                  visible={this.state.showDoneModal}
                >
                  <SendInvite>
                    <h1 className="header--large">Done!</h1>
                    <h4 className="header uppercase">
                      Invite more users to use lawyr
                    </h4>
                    <span className="subtext">
                      Enter another Email Address to Continue
                    </span>
                    <div className="input-wrap">
                      <input className="textbox" placeholder="Email Address" />
                      <div type="button" className="input-wrap__btn">
                        <i className="fas fa-plus" />
                      </div>
                    </div>
                    <span className="invite-sent">
                      Invitation Email to user@devcenter.co sent{" "}
                    </span>
                  </SendInvite>
                </Modal>
                <h2 className="main-section__header">Overview</h2>
                <div className="card-wrap">
                  <Card>
                    <div className="top">
                      <div className="icon">
                        <i className="far fa-address-card" />
                      </div>
                      <div className="card__info">
                        <h2>3600</h2>
                        <p>Signed Up Users</p>
                      </div>
                    </div>
                    <button onClick={() => this.setState({ showModal: true })}>
                      Invite Users
                    </button>
                  </Card>
                  <Card className="card--white">
                    <div className="top">
                      <div className="icon">
                        <i className="fas fa-users" />
                      </div>
                      <div className="card__info">
                        <h2>400</h2>
                        <p>Active Users</p>
                      </div>
                    </div>
                    <button onClick={() => this.setState({ showModal: true })}>
                      Invite Users
                    </button>
                  </Card>
                  <Card className="card--white">
                    <div className="top">
                      <div className="icon">
                        <i className="far fa-file-alt" />
                      </div>
                      <div className="card__info">
                        <h2>1000</h2>
                        <p>Paid Users</p>
                      </div>
                    </div>
                    <button onClick={() => this.setState({ showModal: true })}>
                      Invite Users
                    </button>
                  </Card>
                </div>

                <div className="main-section__separator" />

                <h2 className="main-section__header">Content</h2>
                <div className="card-wrap">
                  <FlashCard>
                    <p className="flashcard__text">Create a Flash card</p>
                    <span className="flashcard__icon">
                      <i className="fas fa-arrow-right fa-lg" />
                    </span>
                  </FlashCard>
                  <FlashCard>
                    <p className="flashcard__text">Create a Test</p>
                    <span className="flashcard__icon">
                      <i className="fas fa-arrow-right fa-lg" />
                    </span>
                  </FlashCard>
                  <div className="quick-links">
                    <p className="quick-links__header">quick links</p>
                    <p className="quick-links__link">
                      <span>Edit Flashcards</span>
                      <span>
                        <i className="fas fa-arrow-right" />
                      </span>
                    </p>
                    <p className="quick-links__link">
                      <span>Edit Courses</span>
                      <span>
                        <i className="fas fa-arrow-right" />
                      </span>
                    </p>
                  </div>
                </div>

                <div className="main-section__separator" />

                <div className="invite-users">
                  <h2 className="invite-users__header">Invite users</h2>
                  <div className="invite-users__input-wrap">
                    <input />
                    <button>invite</button>
                  </div>
                  <p className="invite-users__link">
                    <a href="/">Go to users page</a>
                  </p>
                </div>
              </div>
            )}
          />
        </Content>
      </div>
    );
  }
}

const FlashCard = styled.div`
  width: 30%;
  height: 158px;
  border-radius: 12px;
  background-color: #d6dce3;
  display: flex;
  justify-content: space-around;
  justify-content: space-evenly;
  align-items: center;

  .flashcard__text {
    font-size: 28px;
    width: 50%;
  }

  .flashcard__icon {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    background-color: #1c2d41;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 30%;
  padding: 32px 30px;
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
      color: #99a0a9;
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

    p {
      font-size: 18px;
    }
  }

  .icon {
    margin-right: 25px;
    font-size: 3em;
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

    .navigation__link-icon {
      margin-right: 20px;
    }

    .navigation__link-text {
      width: 55%;
    }
  }
`;

const Content = styled.div`
  background-color: #f6f6f6;
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

    .main-section__separator {
      opacity: 0.33;
      border: solid 1px #979797;
      margin-top: 62px;
      margin-bottom: 42px;
    }

    .quick-links {
      width: 30%;
      display: flex;
      flex-direction: column;
      padding: 10px 0;
      justify-content: space-around;

      &__header {
        color: red;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 2.3px;
        color: #9b9b9b;
      }

      &__link {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.22;
        color: #1c2d41;

        span:first-child {
          margin-right: 10px;
        }
      }
    }

    .invite-users {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__header {
        margin-bottom: 34px;
        font-size: 24px;
      }

      &__input-wrap {
        position: relative;

        input {
          width: 487px;
          height: 68px;
          border-radius: 9px;
          box-shadow: 0 8px 17px 0 rgba(153, 160, 169, 0.23);
          background-color: #ffffff;
          border: solid 1px rgba(179, 179, 179, 0.3);
        }

        button {
          width: 115px;
          height: 53px;
          border: 0;
          border-radius: 9px;
          background-color: #50e3c2;
          position: absolute;
          right: 8px;
          top: 8px;
          font-size: 18px;
          font-weight: bold;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #1c2d41;
        }
      }

      &__link {
        margin-top: 25px;

        a {
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 2px;
          color: #1c2d41;
        }
      }
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
    background-color: #f6f6f6;
  }
`;
