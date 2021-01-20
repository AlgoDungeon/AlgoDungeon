import { SPRITE_SIZE } from '../../config/constants.js';

const initialState = {
  position: [SPRITE_SIZE, SPRITE_SIZE * 1],
};

const enemyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_ENEMY':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default enemyReducer;
