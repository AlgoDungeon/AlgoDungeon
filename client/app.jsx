/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/Login.jsx';
import SignupPage from './components/SignUp.jsx';
import World from './features/world/index.js';
import AlgoQuestionInput from './components/AlgoQuestionInput.jsx';
import PlayerStats from './components/PlayerStats.jsx';
import store from './config/store.js';

class App extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const enemyChallenged = store.getState().player.enemyChallenged;
    console.log('app:', enemyChallenged)
    return (
      <div >
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/game">
            <PlayerStats />
            {enemyChallenged ? <AlgoQuestionInput /> : <World />}
          </Route>
          <Route exact path="/home"></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
