import React from 'react';
import Player from '../../components/Player.jsx';
import Map from '../map/index.js';

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
      <Map />
      <Player />
    </div>
  );
}

export default World;
