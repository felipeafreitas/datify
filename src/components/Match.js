import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import SongInput from './SongInput';
import './Match.css';

export default class Match extends Component {
	state = {
		toogleDisplay: false,
	};
	render() {
		return (
			<section
				className='d-flex justify-content-center align-items-center'
				style={{ minHeight: '100vh' }}
			>
				{this.props.isFirstForm && (
					<div>
						<div className='cardMatch d-flex flex-column align-items-center shadow-lg'>
							<SongInput
								token={this.props.token}
								handleClick={this.props.handleClick}
								onClick={!this.state.toogleDisplay}
								formNumber='firstForm'
							/>
							<div class='card'>
								<div class='card-header'>Featured</div>
								<div class='card-body'>
									<h5 class='card-title'>Test</h5>
									<p class='card-text'>
										With supporting text below as a natural lead-in to
										additional content.
									</p>
									<a href='#' class='btn btn-primary'>
										Go somewhere
									</a>
								</div>
							</div>


							<Link to='/match-2' className='btn btn-primary' type='button'>
								Select second song
							</Link>
						</div>
					</div>
				)}

				{this.props.isSecondForm && (
					<div>
						<div className='card shadow-lg'>
							<SongInput
								token={this.props.token}
								handleClick={this.props.handleClick}
								onClick={!this.state.toogleDisplay}
								formNumber='secondForm'
							/>
						</div>
						<div className='d-flex row-flex'>
							<Link to='/match-1' className='btn btn-primary' type='button'>
								return
							</Link>
							<Link
								to='/match/results'
								className='btn btn-primary'
								type='button'
							>
								Resultados
							</Link>
						</div>
					</div>
				)}

				{/* </div>
				<div>
					{this.props.previewSong.id && (
						<iframe
							title='preview'
							src={`https://open.spotify.com/embed/track/${this.props.previewSong.id}`}
							width='300'
							height='80'
							frameBorder='0'
							allowtransparency='true'
							allow='encrypted-media'
						></iframe>
					)}
				</div> */}

				{/* 
				<SongInput
					token={this.props.token}
					handleClick={this.props.handleClick}
					formNumber='secondForm'
				/> */}
			</section>
		);
	}
}
