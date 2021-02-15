import React, { Component } from "react";
import qs from "qs";
import axios from "axios";

export default class SongInput extends Component {
  state = {
    searchResult: "",
    trackName: "",
    token: "",
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
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ trackName: value });
  };

  handleSearch = async (event) => {
    await this.handleChange(event);
    if (!this.state.trackName){
        return;
    }
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?query=${this.state.trackName}&type=track&limit=10`, 
        {headers : { Authorization: `Bearer ${this.state.token}` }}
      );
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleSearch}
          type="text"
          placeholder="search"
        ></input>
      </div>
    );
  }
}
