/* eslint-disable default-case */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { SPRITE_SIZE } from '../../config/constants.js';
import styles from '../../styles/styles.scss';

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
    <div className="row" style={{height: SPRITE_SIZE}}>
      {props.tiles.map((tile) => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
}

function Map(props) {
  return (
    <div
      style={{
        width: `${SPRITE_SIZE * 28}`,
        height: `${SPRITE_SIZE * 18}`,
        margin: '100px auto',
      }}
    >
      {props.tiles.map((row) => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles,
  }
}

export default connect(mapStateToProps)(Map);
