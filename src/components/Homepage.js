import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default class Homepage extends Component {
	render() {
		return (
			<div style={{ height: '100vh' }}>
				<header>
					<Navbar />
				</header>
				<section
					className='d-flex justify-content-center align-items-center'
					style={{ height: '100%' }}
				>
					<div className='row align-items-center justify-content-center'>
						<div className='col justify-content-center align-items-center'>
							<h1>Encontre o mozão musical</h1>
							<br />
							<h5>Não quero saber quem molhou, eu só quero passar o rodo</h5>
							<br />
							<p>
								Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois
								divoltis porris, paradis. Si num tem leite então bota uma pinga
								aí cumpadi! Posuere libero varius. Nullam a nisl ut ante blandit
								hendrerit. Aenean sit amet nisi. Tá deprimidis, eu conheço uma
								cachacis que pode alegrar sua vidis.
							</p>
							<br />
							<Link to='/match' className='btn btn-primary' type='button'>
								Dê um Match
							</Link>
						</div>
						<div className='col justify-content-center align-items-center'></div>
					</div>
				</section>

				<footer></footer>
			</div>
		);
	}
}
