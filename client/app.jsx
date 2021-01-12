/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Player from "./components/Player.jsx";
import Map from "./features/map/index.js";
import LoginPage from "./components/Login.jsx";
import SignupPage from "./components/SignUp.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route exact path="/home">
            <Map />
            <Player />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
