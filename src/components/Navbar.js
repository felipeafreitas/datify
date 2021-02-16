import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo.png';

export default function Navbar() {
	return (
		<header>
			<nav className='navbar fixed-top navbar-expand-lg navbar-light pt-4 container'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/'>
						<img
							src={logo}
							alt=''
							width='30'
							height='24'
							className='d-inline-block align-top'
						/>
						Datify
					</a>
					<div>
						<button
							className='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>

						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'
						>
							<ul className='navbar-nav mr-auto'>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										About
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										Contact Us
									</a>
								</li>
								<button className='btn btn-primary' type='button'>
									View on Github
								</button>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
