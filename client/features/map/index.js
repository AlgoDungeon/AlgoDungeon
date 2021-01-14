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

  let playerPos = props.position;
  console.log(playerPos)

  let fixedX = (playerPos[0]/32) - 3;
  let fixedY = (playerPos[1]/32) - 3;
  console.log(fixedX)


  let fixedMap = [];
  let correction = Math.floor(ROWS/2);
  let correctionX = Math.floor(COLUMNS/2);

  for (let i = fixedY - correction; i <= fixedY + correction; i++) {
    let inner = [];
    if (i < 0) fixedY += 1;
    else if (i > largeMap.length - 1) break;
    else {
      for (let j = fixedX - correctionX; j <= fixedX + correctionX; j++) {
        if (j < 0) fixedX += 1;
        else if (j > largeMap[0].length - 1) break;
        else {
          inner.push(largeMap[i][j]);
        }

        }
        fixedMap.push(inner);
    }

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
