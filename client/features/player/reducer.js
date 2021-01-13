import { SPRITE_SIZE } from '../../config/constants.js';

const initialState = {
  position: [SPRITE_SIZE, SPRITE_SIZE],
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
