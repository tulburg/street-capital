import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Modal from '../components/Modal';
import Header from '../components/Header';
import { Content, SendInvite } from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import Tests from './Tests';
import OngoingTests from './OngoingTests';

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
        <Header />
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
            exact
            path="/dashboard"
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
                      Invitation Email to user@devcenter.co sent{' '}
                    </span>
                  </SendInvite>
                </Modal>
                <h2 className="main-section__header">Overview</h2>
                <div className="card-wrap">
                  <Card
                    bg="invert"
                    icon="address-card"
                    number={3600}
                    title="signed up users"
                  >
                    <Button
                      onClick={() => this.setState({ showModal: true })}
                      color="#000"
                      text="Invite Users"
                      bg="#50e3c2"
                    />
                  </Card>
                  <Card icon="users" number={400} title="Active users">
                    <Button text="View Ongoing Tests" bg="#1c2d41" />
                  </Card>
                  <Card icon="file-alt" number={1000} title="Paid users">
                    <Button text="View purchases" bg="#1c2d41" />
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
          <Route path={`${this.props.match.url}/tests`} component={Tests} />
          <Route
            path={`${this.props.match.url}/flashcards`}
            component={OngoingTests}
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
