import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import ResultPage from './ResultPage';
import Match from './Match';
import axios from 'axios';
import qs from 'qs';
import Navbar from './Navbar';

class App extends Component {
	state = {
		token: '',
		firstForm: '',
		secondForm: '',
		previewSong: '',
	};

	componentDidMount = async () => {
		try {
			const tokenResponse = await axios.post(
				'https://accounts.spotify.com/api/token',
				qs.stringify({ grant_type: 'client_credentials' }),
				{
					headers: {
						'content-type': 'application/x-www-form-urlencoded',
						Authorization:
							'Basic ZmE2MWQ3Mzk3YmMwNGVmMzg3NGNmY2Q5YjRiOTY1YjU6M2RjZDE5NzI0OTU3NDNiM2JkYTU1YTJkYWQ0MjMyZDc=',
					},
				}
			);

			this.setState({ token: tokenResponse.data.access_token });
			console.log(tokenResponse);
		} catch (err) {
			console.log(err);
		}
	};

	handleClick = (object, formNumber) => {
		this.setState({ [formNumber]: { ...object }, previewSong: { ...object } });
		console.log('handle Click from match fired from APP component');
	};

	render() {
		console.log(this.state);
		return (
			<div className='container'>
				<Navbar />
				<BrowserRouter>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/match/results'>
						<ResultPage token={this.state.token} />
					</Route>

					<Route exact path='/match-1'>
						<Match
							firstForm={this.state.firstForm}
							secondForm={this.state.secondForm}
							previewSong={this.state.previewSong}
							handleClick={this.handleClick}
							token={this.state.token}
						/>
					</Route>
					<Route exact path='/match-2'>
						<Match
							secondForm={this.state.secondForm}
							previewSong={this.state.previewSong}
							handleClick={this.handleClick}
							token={this.state.token}
						/>
					</Route>
				</BrowserRouter>
				<footer className='container column fixed-bottom'>
					<hr />
					<div className='row justify-content-between'>
						<p>©2021</p>

						<p>Send Feedback</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default App;
