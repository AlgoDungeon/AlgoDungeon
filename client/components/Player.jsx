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
<<<<<<< HEAD
        width: '40px',
        height: '40px',
=======
        width: '32px',
        height: '32px',
>>>>>>> 8fcdd361b9513cf0b599822943f7000c1997979d
      }}
    />
  );
}

function mapStateToProps(state) {
  return { ...state.player };
}

export default connect(mapStateToProps)(handleMovement(Player));
