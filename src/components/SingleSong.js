import React, { Component } from "react";
import axios from "axios";
import qs from "qs";

export default class SingleSong extends Component {
  state = {
    token: "",
    imgSrc: "",
    trackName: "",
    artist: "",
    album: "",
    id: ""
  };

  componentDidMount = async () => {
    try {
      const tokenResponse = await axios.post(
        "https://accounts.spotify.com/api/token",
        qs.stringify({ grant_type: "client_credentials" }),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic ZmE2MWQ3Mzk3YmMwNGVmMzg3NGNmY2Q5YjRiOTY1YjU6M2RjZDE5NzI0OTU3NDNiM2JkYTU1YTJkYWQ0MjMyZDc=",
          },
        }
      );

      this.setState({ token: tokenResponse.data.access_token });
      console.log(tokenResponse);
    } catch (err) {
      console.log(err);
    }
    try {
      const {
        data,
      } = await axios.get(
        `https://api.spotify.com/v1/tracks/${this.props.match.params.id}`,
        { headers: { Authorization: `Bearer ${this.state.token}` } }
      );
      this.setState({
        imgSrc: data.album.images[2].url,
        trackName: data.name,
        artist: data.artists[0].name,
        album: data.album.name,
        id: data.id
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    console.log(this.state);
    return (
      <div class="card">
        <img className="w-25" src={this.state.imgSrc} alt="Car cap" />
        <div class="card-body">
          <h5 class="card-title">{this.state.trackName}</h5>
          <p class="card-text">
            {this.state.artist}
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">{this.state.album}</small>
        </div>
      </div>
    );
  }
}
