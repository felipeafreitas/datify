import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default class Homepage extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className='d-flex justify-content-center align-items-center'>
					<Link to='/match' className='btn btn-primary' type='button'>
						Dê um Match
					</Link>
				</div>
				<footer></footer>
			</div>
		);
	}
}
