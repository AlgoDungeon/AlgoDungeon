import { SPRITE_SIZE } from '../../config/constants.js';

const initialState = {
  position: [SPRITE_SIZE * 13, SPRITE_SIZE * 9],
  // position: [0, 0],
  spriteLocation: '0px, 0px',
  direction: 'right',
  imageIndex: 0,
  enemyChallenged: false,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_PLAYER':
      return {
        ...action.payload,
      };
    case 'PLAYER_CHALLENGED':
      console.log('here!')
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
