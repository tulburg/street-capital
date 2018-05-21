import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Header from '../components/Header';
import CourseIcon from '../components/CourseIcon';
import { Content, Horizontal } from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="main-section">
        <div className="card-wrap">
          <Card number={20} icon="users" title="Ongoing Tests">
            <Button bg="#50e3c2" text="View Ongoing Tests" />
          </Card>

          <AnsweredStyle>
            <p className="title">Most Answered</p>
            <h2>Criminal Law</h2>
            <span className="subtext">Year 2012</span>
          </AnsweredStyle>
          <AnsweredStyle>
            <p className="title">Least Answered</p>
            <h2>Criminal Law</h2>
            <span className="subtext">Year 2012</span>
          </AnsweredStyle>
        </div>

        <div className="main-section__separator" />

        <h2 className="main-section__header">Create/Edit a Test</h2>
        <p className="main-section__sub-header">Choose a Course</p>

        <Horizontal>
          <CourseIcon course_title="Criminal Law" />
          <CourseIcon course_title="Criminal Law" />
          <CourseIcon course_title="Ethics" />
          <CourseIcon course_title="Corporate Law" />
          <CourseIcon course_title="Property Law" />
        </Horizontal>
      </div>
    );
  }
}

const AnsweredStyle = styled.div`
  .title {
    color: #4a4a4a;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 14px;
  }

  .subtext {
    color: #9b9b9b;
  }
`;
