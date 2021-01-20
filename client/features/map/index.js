/* eslint-disable default-case */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { SPRITE_SIZE, ROWS, COLUMNS } from '../../config/constants.js';
import styles from '../../styles/styles.scss';
import store from '../../config/store.js';

function createSpriteTile(type) {
  switch (type) {
    case 0:
      return 'grass';

    case 5:
      return 'tree';

    case 6:
      return 'rock';
  }
}

function MapTile(props) {

  return (
    <div
      className={`tile ${createSpriteTile(props.tile)}`}
      style={{ height: SPRITE_SIZE, width: SPRITE_SIZE }}
    />
  );
}

function MapRow(props) {
  return (
    <div className="row" style={{ height: SPRITE_SIZE }}>
      {props.tiles.map((tile) => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
}
let checker = true
function Map(props) {

  let largeMap = props.tiles;
  //selecting out small portion of map based on current player location

  let playerPos = JSON.parse(JSON.stringify(props.position));
  playerPos[0] = playerPos[0]/32 - 1;
  playerPos[1] = playerPos[1]/32 - 1;
  console.log(playerPos)
  let adjustX = Math.floor(COLUMNS / 2);
  let adjustY = Math.floor(ROWS / 2);



  let fixedMap = [];

  for (let i = playerPos[1] - adjustY; i < playerPos[1] + adjustY ; i++) {
    let inner = [];
    for (let j = playerPos[0] - adjustX; j < playerPos[0] + adjustX; j++) {
      if (j > largeMap.length - 1 || j < 0 || i > largeMap[0].length - 1 || i < 0) {
        inner.push(99);   
      }
      else {
        inner.push(largeMap[i][j]);
      }
    }
    fixedMap.push(inner);
  }

  return (
    <div
      style={{
        width: `${SPRITE_SIZE * COLUMNS}`,
        height: `${SPRITE_SIZE * ROWS}`,
        margin: '100px auto',
      }}
    >
      {fixedMap.map((row) => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles,
    position: state.player.position
  };
}

export default connect(mapStateToProps)(Map);
