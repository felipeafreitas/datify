import React from 'react';

export default function SongCard(props) {
	return (
			<div className='d-flex w-100 align-items-center flex-wrap'>
				<img
					src={props.album.images[2].url}
					alt={`song ${props.name}`}
					className='rounded pr-2'
				/>
				<div className='pt-2'>
					<span>
						<strong>{props.name}</strong>
					</span>
					<br />
					<span>
						{props.artists[0].name} - {props.album.name}
					</span>
				</div>
			</div>
	);
}
