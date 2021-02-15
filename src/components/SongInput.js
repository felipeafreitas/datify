import React, { Component } from "react";
import qs from "qs";
import axios from "axios";

// TODO refactor e comentarios

export default class SongInput extends Component {
  state = {
    searchResult: [],
    trackName: "",
    token: "",
    selectedSongId: "",
  };


  // pega o token -> opção: pode vir como prop do component homepage ou app

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
      // colocando o token no state
      this.setState({ token: tokenResponse.data.access_token });
      console.log(tokenResponse);
    } catch (err) {
      console.log(err);
    }
  };

  // handle change simples pra ter input controlado
  handleChange = async (event) => {
    const { value } = event.target;
    this.setState({ trackName: value });
  };

  // handleSearch, roda o handleChange dentro dele.

  handleSearch = async (event) => {
    // espera o handleChange terminar de rodar pra não fazer busca com delay
    await this.handleChange(event);

    // condicional necessario para não buggar quando o state tiver um caracter
    // e, quando apagar, continuar rodando normal 

    if (!this.state.trackName) {
      return;
    }

    // requisição pra API usando o trackName do input e o token como header

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?query=${this.state.trackName}&type=track&limit=3`,
        { headers: { Authorization: `Bearer ${this.state.token}` } }
      );

      // coloca o resultado da busca num array searchResult

      this.setState({ searchResult: response.data.tracks.items });
      console.log(response.data.tracks.items);
    } catch (err) {
      console.error(err);
    }

    // solução do stack overflow:
    // faz um loop pelo array de searchResult, comparando com o valor do input
    // se o valor for o mesmo, seta o state da songId pra música escolhida

    // BUG com duas musicas do mesmo nome, pois checa o VALUE(nome) das duas
    // tentar com component didUpdate??

    for (let i = 0; i < this.state.searchResult.length; i++) {
      if (
        document.getElementById("datalistOptions").options[i].value ===
        document.getElementById("exampleDataList").value
      ) {
        // obtains the data-id attrbute
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
      <div className="m-2">
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

        {/* itera pelo searchResult para criar as opções de música da busca */}
        <datalist id="datalistOptions">
          {this.state.searchResult.map((item) => (
            <option data-id={item.id} key={item.id} value={item.name}>
              {item.artists[0].name} - {item.album.name}
            </option>
          ))}
        </datalist>
        <h3 className="mt-4"> {this.state.selectedSongId}</h3>
      </div>
    );
  }
}
