import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import store from '../store';

export default class Header extends Component {
	logout = () => { this.setState({logout: true}); store.dispatch({ type: 'LOGOUT_ACTION', payload: {} }); }
	state = { logout: false }
  	render() {
  		if(this.state.logout) { return (<Redirect to="/"/>); }
	    return (
		  	<header>
		    	<Link to="/" className="no-decoration"><div className="header__logo">Lawyr</div></Link>
		    	<div>
		      		<button className="btn-signout" onClick={() => this.logout() }>Sign out</button>
				</div>
		  	</header>
		)
	}
}
