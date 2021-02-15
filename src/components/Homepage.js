import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
	render() {
		return (
			<div>
				<nav>
					<Link to='/'></Link>
					<Link to='/about'></Link>
					<Link to='/about'></Link>
				</nav>
				<div className='Hero'></div>
				<footer></footer>
			</div>
		);
	}
}
