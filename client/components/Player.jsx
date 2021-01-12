import React from 'react';
import walkSprite from '../../CharacterSprites/personajes-lanto.png';
import { connect } from 'react-redux';
import handleMovement from '../features/player/moves.js';

function Player(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: '0 0',
        width: '32px',
        height: '32px',
      }}
    />
  );
}

function mapStateToProps(state) {
  return { ...state.player };
}

export default connect(mapStateToProps)(handleMovement(Player));
