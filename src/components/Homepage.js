import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import heroImg2 from '../imgs/e09925e8c2c15863bcf3ac4ba71fefd9.jpg';
import './Homepage.css'

export default class Homepage extends Component {
	render() {
		return (
			<div>
				<section
					className='d-flex justify-content-center align-items-center'
					style={{ minHeight: '100vh' }}
				>
					<div className='row align-items-center justify-content-center'>
						<div className='col justify-content-center align-items-center '>
							{/* <h1>Music connecting people</h1> */}
							<h1>What kind of music are you into?</h1>
							<br />
							<h5>Best conversation starter to lead for a first date</h5>
							<br />
							<p>
								Have you ever wanted to seduce someone with your music? “Music
								and rhythm find their way into the secret places of the soul.” ―
								Plato. “Without music, life would be a mistake.” ― Friedrich
								Nietzsche. "O outono é sempre igual." - Sandy e Júnior.
							</p>
							<br />
							<Link
								to='/match-1/'
								className='btn btn-success btn-lg'
								type='button'
							>
								<strong>Find Out</strong>
							</Link>
						</div>
						<div className='col justify-content-center align-items-center'>
							<img src={heroImg2} alt='hero-img' />
						</div>
					</div>
				</section>
			</div>
		);
	}
}
