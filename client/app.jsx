/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/Login.jsx";
import SignupPage from "./components/SignUp.jsx";
import World from "./features/world/index.js";
import AlgoQuestionInput from "./components/AlgoQuestionInput.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }
  //temporarily moved / route to send us to the game - Miguel
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/game">
            <World />
            <AlgoQuestionInput />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
