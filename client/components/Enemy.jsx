import React from 'react';
import sprite from '../../CharacterSprites/trainer1.png';
import { SPRITE_SIZE } from '../config/constants.js';
import { connect } from 'react-redux';
import handleMovement from '../features/enemy/moves.js';

function Enemy(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${sprite}')`,
        backgroundPosition: '0 0',
        width: `${SPRITE_SIZE}px`,
        height: `${SPRITE_SIZE}px`,
      }}
    />
  );
}

export default Enemy;