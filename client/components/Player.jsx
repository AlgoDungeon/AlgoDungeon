import React, { useState, useEffect } from 'react';
import sprite from '../../CharacterSprites/trainer1.png';
import { SPRITE_SIZE, ROWS, COLUMNS } from '../config/constants.js';
import { connect } from 'react-redux';
import handleMovement from '../features/player/moves.js';

function Player(props) {

  return (
    <div
      style={{
        position: 'absolute',
        top: 9 * 32,
        left: 13 * 32,
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
