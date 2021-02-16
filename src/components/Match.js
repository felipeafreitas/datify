import { Link } from "react-router-dom";
import React, { Component } from "react";

import SongInput from "./SongInput";

export default class Match extends Component {
  state = {
    firstForm: {},
    secondForm: {},
    previewSong: {
      id: "",
    },
  };

  handleClick = (object, formNumber) => {
    this.setState({ [formNumber]: { ...object }, previewSong: { ...object } });
    console.log("handle Click from match fired");
  };

  render() {
    return (
      <div>
        <SongInput
          token={this.props.token}
          handleClick={this.handleClick}
          formNumber="firstForm"
        />
        <SongInput
          token={this.props.token}
          handleClick={this.handleClick}
          formNumber="secondForm"
        />
        <div style={{ marginTop: "400px" }}>
          <h1>
            Primeira música selecionada:{" "}
            {this.state.firstForm.name ? this.state.firstForm.name : ""}
          </h1>
          <h2>
            Segunda música selecionada:{" "}
            {this.state.secondForm.name ? this.state.secondForm.name : ""}
          </h2>
          <Link to="/match/results" className="btn btn-primary" type="button">
            Resultados
          </Link>
        </div>
        <div>
          {this.state.previewSong.id && (
            <iframe
              title="preview"
              src={`https://open.spotify.com/embed/track/${this.state.previewSong.id}`}
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          )}
        </div>
      </div>
    );
  }
}
