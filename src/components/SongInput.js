import React, { Component } from "react";
import axios from "axios";
import SongCard from "./SongCard";

export default class SongInput extends Component {
  state = {
    searchResult: [],
    searchTerm: "",
    token: "",
    selectedSongId: "",
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
      <div className="d-flex m-2">
        <input
          onChange={this.handleSearch}
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        />

        {this.state.searchResult.map((item) => (
          <div key={item.id} onClick={() => this.props.handleClick(item, this.props.formNumber)}>
            <SongCard  {...item} />
          </div>
        ))}

        <h3 className="mt-4"> {this.state.selectedSongId}</h3>
      </div>
    );
  }
}
