/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Player from '../../components/Player.jsx';
import Map from '../map/index.js';

import { tiles } from '../../maps/map-1.js';

function World(props) {
  return (
    <div
      style={{
        position: 'relative',
        width: '640px',
        height: '320px',
        margin: '20px auto',
      }}
    >
      <Map tiles={tiles} />
      <Player />
    </div>
  );
}

export default World;
