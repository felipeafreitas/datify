import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import SongInput from './SongInput';
import './Match.css';

export default class Match extends Component {
  state={
    toogleDisplay: false
  }
	render() {
		return (
			<section
				className='d-flex justify-content-center align-items-center'
				style={{ minHeight: '100vh' }}
			>
        <div className='card shadow-lg'>
        {this.state.toogleDisplay == false ? 
					<SongInput
						token={this.props.token}
						handleClick={this.props.handleClick}
            onClick={!this.state.toogleDisplay}
						formNumber='firstForm'
					/>  : <div> </div>}

</div>
					{/* <div style={{ marginTop: '400px' }}>
					<h1>
						Primeira música selecionada:{' '}
						{this.props.firstForm.name ? this.props.firstForm.name : ''}
					</h1>
					<h2>
						Segunda música selecionada:{' '}
						{this.props.secondForm.name ? this.props.secondForm.name : ''}
					</h2>
					<Link to='/match/results' className='btn btn-primary' type='button'>
						Resultados
					</Link>
				</div>
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

				{/* <SongInput
					token={this.props.token}
					handleClick={this.props.handleClick}
					formNumber='firstForm'
				/>
				<SongInput
					token={this.props.token}
					handleClick={this.props.handleClick}
					formNumber='secondForm'
				/> */}
			</section>
		);
	}
}
