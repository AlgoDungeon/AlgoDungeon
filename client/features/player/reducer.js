import { SPRITE_SIZE } from '../../config/constants.js';

const initialState = {
  position: [SPRITE_SIZE * 4, SPRITE_SIZE * 4],
  // position: [0, 0],
  spriteLocation: '0px, 0px',
  direction: 'right',
  imageIndex: 0,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_PLAYER':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
