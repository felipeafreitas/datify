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

							{this.props.firstForm.name ? (
								<div className='d-flex flex-column justify-content-end'>
									<div className='d-flex flex-wrap selectedTrackBox align-items-center flex-wrap rounded'>
										{/* <h4 class='card-header'>Selected Track</h4> */}
										<div className='imgCoverColorizer'>
											<div
												alt='cover album'
												className='imgBox rounded pr-2'
												style={{
													backgroundImage: `url(${this.props.firstForm.album.images[1].url})`,
												}}
											/>
										</div>
										<div className='d-flex flex-column pr-2'>
											<h4>
												<strong>{this.props.firstForm.name}</strong>
											</h4>
											<h5>{this.props.firstForm.artists[0].name}</h5>
											{this.props.firstForm.preview_url ? (
												<audio controls autoplay name='media'>
													<source
														src={this.props.firstForm.preview_url}
														type='audio/mpeg'
													/>
												</audio>
											) : (
												<h5>No preview Available</h5>
											)}
										</div>
									</div>
									<Link
										to='/match-2'
										className='btn btn-primary m-4'
										type='button'
									>
										Select second song
									</Link>
								</div>
							) : (
								''
							)}
							{/* <h2>
								Segunda música selecionada:{' '}
								{this.props.secondForm.name ? this.props.secondForm.name : ''}
							</h2> */}
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
			</section>
		);
	}
}
