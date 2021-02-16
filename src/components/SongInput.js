import React, { Component } from "react";
import qs from "qs";
import axios from "axios";
import { Link } from "react-router-dom";
import SongCard from './SongCard';

export default class SongInput extends Component {
  state = {
    searchResult: [],
    searchTerm: "",
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
    this.setState({ searchTerm: value });
  };

  handleSearch = async (event) => {
    await this.handleChange(event);

    if (!this.state.searchTerm) {
      this.setState({ searchResult: []})
      return;
    }

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?query=${this.state.searchTerm}&type=track&limit=3`,
        { headers: { Authorization: `Bearer ${this.state.token}` } }
      );

      this.setState({ searchResult: [...response.data.tracks.items] });
      console.log(response.data.tracks.items);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="d-flex m-2">
        <input
          onChange={this.handleSearch}
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        />

        {/* itera pelo searchResult para criar as opções de música da busca */}
        {this.state.searchResult.map((item) => (
          <Link to={`/track/${item.id}`}>
            <SongCard {...item} />
          </Link>
        ))}

        <h3 className="mt-4"> {this.state.selectedSongId}</h3>
      </div>
    );
  }
}
