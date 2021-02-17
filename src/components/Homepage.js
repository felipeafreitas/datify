import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../imgs/09dbd61d7f6c31e68e78d7e12e139d1e.jpg';

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
							<h5>
								Best conversation starter to lead the conversation for a first
								date
							</h5>
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
								Find Out
							</Link>
						</div>
						<div className='col justify-content-center align-items-center'>
							<img src={heroImg} alt='hero-img' />
						</div>
					</div>
				</section>
			</div>
		);
	}
}
