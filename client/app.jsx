/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Player from './components/Player.jsx';
import Map from './features/map/index.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Map />
        <Player />
      </div>
    );
  }
}

export default App;
