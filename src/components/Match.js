import { Link } from "react-router-dom";
import React, { Component } from "react";
import SongInput from "./SongInput";
import "./Match.css";
import "./index.css";

export default class Match extends Component {
  state = {
    toogleDisplay: false,
  };

  componentDidUpdate = (prevProps) => {
    console.log("did update props:", this.props);
  };

  render() {
    return (
      <section
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        {this.props.isFirstForm && (
          <div className="slide-in-from-right">
            <div className="cardMatch d-flex flex-column align-items-center shadow-lg">
              <SongInput
                token={this.props.token}
                handleClick={this.props.handleClick}
                onClick={!this.state.toogleDisplay}
                formNumber="firstForm"
              />

              {this.props.firstForm.name ? (
                <div className="fade-in d-flex flex-column justify-content-end">
                  <div className="d-flex flex-wrap selectedTrackBox align-items-center flex-wrap rounded" >
                    <div style={{position: 'relative'}}>
                      <div
                        alt="cover album"
                        className="imgBox rounded"
                        style={{
                          background: `linear-gradient(
															rgba(26, 188, 156, 0.6),
															rgba(231, 76, 60, 0.6)
														)`,
														position: 'relative',
														zIndex: '2'	
														
														
                        }}
                      >
					 
					  
					  </div>
					  <img
                        className="img-fluid"
                        style={{
                          width: "150px",
                          height: "auto",
                          display: "inline-block",
						  position: 'absolute',
						  top: '0',
						  left: '0',
						  zIndex: '1'					  
                        }}
                        src={this.props.firstForm.album.images[1].url}
                        alt="inferno"
                      />
					  
                    </div>
                    <div className="d-flex flex-column pr-3 pl-3">
                      <h4>
                        <strong>{this.props.firstForm.name}</strong>
                      </h4>
                      <h5>{this.props.firstForm.artists[0].name}</h5>
                      {this.props.firstForm.preview_url ? (
                        <audio controls autoplay name="media">
                          <source
                            src={this.props.firstForm.preview_url}
                            type="audio/mpeg"
                          />
                        </audio>
                      ) : (
                        <h5>No preview Available</h5>
                      )}
                    </div>
                  </div>
                  <Link
                    to="/match-2"
                    className="btn btn-primary m-4"
                    type="button"
                  >
                    Select second song
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        )}

        {this.props.isSecondForm && (
          <div className="slide-in-from-left">
            <div className="cardMatch d-flex flex-column align-items-center shadow-lg">
              <SongInput
                token={this.props.token}
                handleClick={this.props.handleClick}
                onClick={!this.state.toogleDisplay}
                formNumber="secondForm"
              />

              {this.props.secondForm.name ? (
                <div className="fade-in d-flex flex-column justify-content-end">
                  <div className="d-flex flex-wrap selectedTrackBox align-items-center flex-wrap rounded">
                    <div className="imgCoverColorizer">
                      <div
                        alt="cover album"
                        className="imgBox rounded pr-2"
                        style={{
                          background: `linear-gradient(
															rgba(26, 188, 156, 0.7),
															rgba(231, 76, 60, 0.7)
														), url(${this.props.secondForm.album.images[1].url})`,
                          backgroundSize: "150px",
                        }}
                      />
                    </div>
                    <div className="d-flex flex-column pr-3 pl-3">
                      <h4>
                        <strong>{this.props.secondForm.name}</strong>
                      </h4>
                      <h5>{this.props.secondForm.artists[0].name}</h5>
                      {this.props.secondForm.preview_url ? (
                        <audio controls autoplay name="media">
                          <source
                            src={this.props.secondForm.preview_url}
                            type="audio/mpeg"
                          />
                        </audio>
                      ) : (
                        <h5>No preview Available</h5>
                      )}
                    </div>
                  </div>
                  <div className="fade-in d-flex justify-content-between m-4">
                    <Link
                      to="/match-1"
                      className="btn btn-primary"
                      type="button"
                    >
                      Return
                    </Link>
                    <Link
                      to="/match/results"
                      className="btn btn-primary"
                      type="button"
                    >
                      Results
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </section>
    );
  }
}
