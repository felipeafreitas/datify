import React, { Component } from 'react';
import axios from 'axios';
import SongCard from './SongCard';
import './SongInput.css';

export default class SongInput extends Component {
	state = {
		searchResult: [],
		searchTerm: '',
	};

	handleChange = async (event) => {
		const { value } = event.target;
		this.setState({ searchTerm: value });
	};

	handleSearch = async (event) => {
		await this.handleChange(event);

		if (!this.state.searchTerm) {
			this.setState({ searchResult: [] });
			return;
		}

		try {
			const response = await axios.get(
				`https://api.spotify.com/v1/search?query=${this.state.searchTerm}&type=track&limit=3`,
				{ headers: { Authorization: `Bearer ${this.props.token}` } }
			);

			this.setState({ searchResult: [...response.data.tracks.items] });
			console.log(response.data.tracks.items);
		} catch (err) {
			console.error(err);
		}
	};

	render() {
		return (
			<div
				className='d-flex flex-column m-5 align-items-center'
				style={{ width: '90%' }}
			>
				<input
					onChange={this.handleSearch}
					className='form-control rounded-pill'
					list='datalistOptions'
					id='exampleDataList'
					placeholder='Type to search...'
				/>
				<br />
				<ul className='list-group' style={{ width: '95%' }}>
					{this.state.searchResult.map((item) => (
						<li
							className='list-group-item list-group-item-action'
							key={item.id}
							onClick={() =>
								this.props.handleClick(item, this.props.formNumber)
							}
						>
							<SongCard {...item} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}
