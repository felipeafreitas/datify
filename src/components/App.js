import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Homepage";
import ResultPage from "./ResultPage";
import Match from "./Match";

class App extends Component {

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/match/results" component={ResultPage} />

          <Route exact path="/match" component={Match} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
