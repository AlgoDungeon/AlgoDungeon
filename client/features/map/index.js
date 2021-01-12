/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function createSpriteTile(type) {}

function MapTile(props) {
  return <div>{props.tile}</div>;
}

function MapRow(props) {
  return (
    <div className="row">
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
        width: '640px',
        height: '320px',
        margin: '10px auto',
      }}
    >
      {props.tiles.map((row) => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
}

export default Map;
