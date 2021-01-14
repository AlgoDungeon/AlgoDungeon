import React from 'react';
import sprite from '../../CharacterSprites/trainer1.png';
import { SPRITE_SIZE } from '../config/constants.js';
import { connect } from 'react-redux';
import handleMovement from '../features/player/moves.js';

function Player(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${sprite}')`,
        backgroundPosition: props.spriteLocation,
        width: `${SPRITE_SIZE}px`,
        height: `${SPRITE_SIZE}px`,
      }}
    />
  );
}

function mapStateToProps(state) {
  return { ...state.player };
}

export default connect(mapStateToProps)(handleMovement(Player));
