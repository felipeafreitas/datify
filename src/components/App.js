
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Homepage";
import ResultPage from "./ResultPage";
import Match from "./Match";
import axios from 'axios';
import qs from 'qs';


class App extends Component {

  state = {
    token: "",
    firstForm: "",
    secondForm: ""
  }

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
  }



  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/match/results" component={ResultPage} />

          <Route exact path="/match">
            <Match token={this.state.token} />
          </Route>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
