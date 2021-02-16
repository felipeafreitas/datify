import React from 'react'

export default function SongCard(props) {
    return (
        <div className="card" style={{ width: "200px", height: "100px" }}>
              <img
                className="card-img-top"
                src={props.album.images[2].url}
                alt={`song ${props.name}`}
              />
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                  <strong>
                    {props.artists[0].name} - {props.album.name}
                  </strong>
                </p>
              </div>
            </div>
    )
}

