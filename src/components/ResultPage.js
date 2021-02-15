import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';

export default class ResultPage extends Component {
	async componentDidMount() {
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

			console.log(tokenResponse.data);
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return <div></div>;
	}
}
