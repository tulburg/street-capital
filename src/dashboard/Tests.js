import React, { Component } from 'react';
import styled from 'styled-components';
import CourseIcon from '../components/CourseIcon';
import { Horizontal } from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  	render() {
	    return (
	      	<div className="main-section">
		        <div className="card-wrap">
		          	<Card number={20} icon="users" title="Ongoing Tests">
		            	<Link to="ongoing" className="card-button">
		            		<Button bg="#50e3c2" text="View Ongoing Tests" />
		            	</Link>
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
		        	<Link to="/dashboard/create-test" className="create-test-link">
		        		<h2 className="main-section__header">
		        			Create/Edit a Test <i className="fas fa-arrow-right" />
		        		</h2>
		        	</Link>
		        	<p className="main-section__sub-header">Choose a Course</p>

		        	<Horizontal>
						<Link to="/dashboard/create/civil"><CourseIcon course_title="Civil Litigation" /></Link>
						<Link to="/dashboard/create/criminal"><CourseIcon course_title="Criminal Litigation" /></Link>
						<Link to="/dashboard/create/corporate"><CourseIcon course_title="Corporate Law Practice" /></Link>
						<Link to="/dashboard/create/property"><CourseIcon course_title="Property Law Practice" /></Link>
						<Link to="/dashboard/create/professional"><CourseIcon course_title="Professional Skills and Ethics" /></Link>
		        	</Horizontal>
		      	</div>

	    );
  	}
}

const AnsweredStyle = styled.div`
width: 30%;
padding-left: 60px;
padding-top: 60px;
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
