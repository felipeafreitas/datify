import React from "react";
import axios from "axios";
import { Radar } from "react-chartjs-2";
import "./ResultPage.css";
import "./index.css";
import $ from "jquery";


class ResultPage extends React.Component {
  state = {
    track1Name: "",
    track1Features: "",
    track2Name: "",
    track2Features: "",
    finalAverage: "",
    recommendedTracks: "",
    token: this.props.token,
    loading: false,
  };

  getDistance = (a, b, factor) => {
    let subtraction = 1 - Math.abs(a - b);
    return subtraction * factor;
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const tracksFeaturesResponse = await axios.get(
        `https://api.spotify.com/v1/audio-features?ids=${this.props.firstForm.id},${this.props.secondForm.id}`,
        {
          headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
        }
      );

      const tracksRecommendationResponse = await axios.get(
        "https://api.spotify.com/v1/recommendations?limit=20&seed_tracks=6ewmrm2AGmipR6fGrNj5N1,5M5cnJbPIEphZvdNKaonoW",
        {
          headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
        }
      );

      this.setState({
        recommendedTracks: { ...tracksRecommendationResponse.data.tracks },
      });

      this.setState({
        track1Name: this.props.firstForm.name,
        track2Name: this.props.secondForm.name,
      });

      this.setState({
        track1Features: { ...tracksFeaturesResponse.data.audio_features[0] },
        track2Features: { ...tracksFeaturesResponse.data.audio_features[1] },
      });

      console.log(this.state.track1Features, this.state.track2Features);

      //CÁLCULO DE FEATURES E MÉDIAS PARCIAIS
      // 1. danceability 2 A value of 0.0 is least danceable and 1.0 is most danceable.
      // 2. acousticness 1 from 0.0 to 1.0
      // 3. instrumentalness 1 The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
      // 4. liveness 1 Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
      // 5. speechiness 1 The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value.
      // 6. energy 3 from 0.0 to 1.0
      // 7. valence 3 A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track.

      // formula pra
      // 1 - Math.abs(a - b)

      const factorNumber = 41;

      let averageDanceability = this.getDistance(
        this.state.track1Features.danceability,
        this.state.track2Features.danceability,
        8
      );
      console.log("dance", averageDanceability);

      let averageAcousticness = this.getDistance(
        this.state.track1Features.acousticness,
        this.state.track2Features.acousticness,
        5
      );

      console.log("acoustic", averageAcousticness);

      let averageEnergy = this.getDistance(
        this.state.track1Features.energy,
        this.state.track2Features.energy,
        5
      );

      let averageInstrumentalness = this.getDistance(
        this.state.track1Features.instrumentalness,
        this.state.track2Features.instrumentalness,
        10
      );

      let averageLiveness = this.getDistance(
        this.state.track1Features.liveness,
        this.state.track2Features.liveness,
        2
      );

      let averageSpeechiness = this.getDistance(
        this.state.track1Features.speechiness,
        this.state.track2Features.speechiness,
        1
      );

      let averageValence = this.getDistance(
        this.state.track1Features.valence,
        this.state.track2Features.valence,
        10
      );

      //CÁLCULO DE MÉDIA FINAL

      // maximo das distancias
      // 1 - Math.max(finalfeatures)

      // media ponderada
      // faz a distancia -> atribui peso -> soma dos valores -> divide pelos pesos
      // atribuir pesos pra cada um
      // dividido pela soma dos pesos

      let finalFeaturesFiltered = [
        averageAcousticness,
        averageDanceability,
        averageEnergy,
        averageInstrumentalness,
        averageLiveness,
        averageSpeechiness,
        averageValence,
      ];

      let finalAverage =
        (finalFeaturesFiltered.reduce((ac, cv) => {
          return ac + cv;
        }, 0) /
          factorNumber) *
        100;

      this.setState({ finalAverage: finalAverage });

      //RENDERIZANDO GRÁFICO
      const data = {
        labels: [
          "Danceability",
          "Acousticness",
          "Energy",
          "Instrumentalness",
          "Liveness",
          "Speechiness",
          "Valence",
        ],
        datasets: [
          {
            label: this.props.firstForm.name,
            data: [
              this.state.track1Features.danceability,
              this.state.track1Features.acousticness,
              this.state.track1Features.energy,
              this.state.track1Features.instrumentalness,
              this.state.track1Features.liveness,
              this.state.track1Features.speechiness,
              this.state.track1Features.valence,
            ],

            backgroundColor: ["rgba(164, 184, 196, 0.2)"],
            borderColor: ["rgba(164, 184, 196, 1)"],
            borderWidth: 1,
          },
          {
            label: this.props.secondForm.name,
            data: [
              this.state.track2Features.danceability,
              this.state.track2Features.acousticness,
              this.state.track2Features.energy,
              this.state.track2Features.instrumentalness,
              this.state.track2Features.liveness,
              this.state.track2Features.speechiness,
              this.state.track2Features.valence,
            ],
            backgroundColor: ["rgba(12, 202, 74, 0.2)"],
            borderColor: ["rgba(12, 202, 74, 1)"],
            borderWidth: 2,
          },
        ],
      };

      const options = {
        legend: {
          usePointStyle: true,
          labels: {
            fontColor: "#6E8387",
            fontWeight: 500,
            fontSize: 14,
            usePointStyle: true,
          },
        },
      };

      this.setState({ data, options, loading: false });
      $(".progress-bar").animate(
        {
          width: `${this.state.finalAverage}%`,
        },
        1000
      );
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <div
          className="mt-5 mb-5 row align-items-center justify-content-center"
          style={{ height: "90vh" }}
        >
          {this.state.loading && (
            <div class="d-flex justify-content-center">
              <div
                class="spinner-grow"
                style={{
                  width: "15rem",
                  height: "15rem",
                  backgroundColor: "#0CCA4A",
                }}
                role="status"
              ></div>
            </div>
          )}
          {!this.state.loading && (
            <div
              className="fade-in pt-4 chart-container shadow-lg bg-body rounded col justify-content-center align-items-center"
              style={{ width: "80vw", maxWidth: "800px" }}
            >
              <Radar
                width={500}
                height={300}
                data={this.state.data}
                options={this.state.options}
              />

              <h2 className="text-center m-4 fs-5 fw-bold">
                {Math.round(this.state.finalAverage * 100) / 100}%
              </h2>
              <div className="progress active mb-5" style={{ height: "20px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "0%",
                    backgroundColor: "#0CCA4A",
                  }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          )}

          {/* <div className="col">

            <iframe
              title="preview"
              src="https://open.spotify.com/embed/track/5M5cnJbPIEphZvdNKaonoW"
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div> */}
        </div>
      </div>
    );
  }
}

export default ResultPage;
