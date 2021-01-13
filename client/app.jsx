/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/Login.jsx';
import SignupPage from './components/SignUp.jsx';
import World from './features/world/index.js';

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
            {/* <SignupPage /> */}
            <World />
          </Route>
          <Route exact path="/home"></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
