import React, { Component } from "react";
import qs from "qs";
import axios from "axios";

export default class SongInput extends Component {
  state = {
    searchResult: [],
    trackName: "",
    token: "",
    selectedSongId: "",
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

  handleChange = async (event) => {
    const { value } = event.target;
    this.setState({ trackName: value });
  };

  handleSearch = async (event) => {
    await this.handleChange(event);
    if (!this.state.trackName) {
      return;
    }
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?query=${this.state.trackName}&type=track&limit=10`,
        { headers: { Authorization: `Bearer ${this.state.token}` } }
      );
      this.setState({ searchResult: response.data.tracks.items });
      console.log(response.data.tracks.items);
    } catch (err) {
      console.error(err);
    }
    for (let i = 0; i < this.state.searchResult.length; i++) {
      if (
        document.getElementById("datalistOptions").options[i].value ===
        document.getElementById("exampleDataList").value
      ) {
        // obtains the data-company attrbute
        this.setState({
          selectedSongId: document
            .getElementById("datalistOptions")
            .options[i].getAttribute("data-id"),
        });
        break;
      }
    }
  };

  render() {
    return (
      <div>
        <label htmlFor="exampleDataList" className="form-label">
          Música
        </label>
        <input
          onChange={this.handleSearch}
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        />
        <datalist id="datalistOptions">
          {this.state.searchResult.map((item) => (
            <option data-id={item.id} key={item.id} value={item.name}></option>
          ))}
        </datalist>
        {this.state.selectedSongId}
      </div>
    );
  }
}
