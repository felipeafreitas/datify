import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';

class ResultPage extends React.Component {
	state = {
		track1Name: '',
		track1Features: '',
		track2Name: '',
		track2Features: '',
	};
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

			const tracksNames = await axios.get(
				'https://api.spotify.com/v1/tracks?ids=6ewmrm2AGmipR6fGrNj5N1,5M5cnJbPIEphZvdNKaonoW',
				{
					headers: {
						Authorization: `Bearer ${tokenResponse.data.access_token}`,
					},
				}
			);

			const tracksFeaturesResponse = await axios.get(
				'https://api.spotify.com/v1/audio-features?ids=6ewmrm2AGmipR6fGrNj5N1,5M5cnJbPIEphZvdNKaonoW',
				{
					headers: {
						Authorization: `Bearer ${tokenResponse.data.access_token}`,
					},
				}
			);

			this.setState({
				track1Name: { ...tracksNames.data.tracks[0] },
				track2Name: { ...tracksNames.data.tracks[1] },
			});

			console.log(this.state.track1Name, this.state.track2Name);

			this.setState({
				track1Features: { ...tracksFeaturesResponse.data.audio_features[0] },
				track2Features: { ...tracksFeaturesResponse.data.audio_features[1] },
			});

			console.log(this.state.track1Features, this.state.track2Features);

			//Features
			// 1. danceability A value of 0.0 is least danceable and 1.0 is most danceable.
			// 2. acousticness from 0.0 to 1.0
			// 3. instrumentalness The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
			// 4. liveness Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
			// 5. speechiness The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value.
			// 6. energy from 0.0 to 1.0
			// 7. valence A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track.

			let acousticnessFeatures = [
				this.state.track1Features.acousticness,
				this.state.track2Features.acousticness,
			].sort((a, b) => a - b);

			let averageAcousticness =
				acousticnessFeatures[0] / acousticnessFeatures[1];
			console.log(averageAcousticness);

			let danceabilityFeatures = [
				this.state.track1Features.danceability,
				this.state.track2Features.danceability,
			].sort((a, b) => a - b);
			let averageDanceability =
				danceabilityFeatures[0] / danceabilityFeatures[1];
			console.log(averageDanceability);

			let energyFeatures = [
				this.state.track1Features.energy,
				this.state.track2Features.energy,
			].sort((a, b) => a - b);
			let averageEnergy = energyFeatures[0] / energyFeatures[1];
			console.log(averageEnergy);

			let instrumentalnessFeatures = [
				this.state.track1Features.instrumentalness,
				this.state.track2Features.instrumentalness,
			].sort((a, b) => a - b);
			let averageInstrumentalness =
				instrumentalnessFeatures[0] / instrumentalnessFeatures[1];
			console.log(averageInstrumentalness);

			let livenessnessFeatures = [
				this.state.track1Features.livenessness,
				this.state.track2Features.livenessness,
			].sort((a, b) => a - b);
			let averageLivenessness =
				livenessnessFeatures[0] / livenessnessFeatures[1];
			console.log(averageLivenessness);

			let speechinessFeatures = [
				this.state.track1Features.speechiness,
				this.state.track2Features.speechiness,
			].sort((a, b) => a - b);
			let averageSpeechiness = speechinessFeatures[0] / speechinessFeatures[1];
			console.log(averageSpeechiness);

			let valenceFeatures = [
				this.state.track1Features.valence,
				this.state.track2Features.valence,
			].sort((a, b) => a - b);
			let averageValence = valenceFeatures[0] / valenceFeatures[1];
			console.log(averageValence);

			let finalAverage = [
				averageAcousticness,
				averageDanceability,
				averageEnergy,
				averageInstrumentalness,
				averageLivenessness,
				averageSpeechiness,
				averageValence,
			].reduce((el, ac) => {
				if (Boolean) {
					console.log(el);
					return el + ac;
				}
			});

			console.log(finalAverage);
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<div className='d-flex'>
				<div>
					<ul></ul>
				</div>
				<div></div>
			</div>
		);
	}
}

export default ResultPage;
