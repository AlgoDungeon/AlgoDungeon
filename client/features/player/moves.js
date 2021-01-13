/* eslint-disable default-case */
import store from '../../config/store.js';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants.js';

export default function handleMovement(player) {
  // calculates new position of sprite based on direction of movement
  function getNewPosition(direction) {
    const prevPosition = store.getState().player.position;
    switch (direction) {
      case 'LEFT':
        return [prevPosition[0] - SPRITE_SIZE, prevPosition[1]];

      case 'RIGHT':
        return [prevPosition[0] + SPRITE_SIZE, prevPosition[1]];

      case 'UP':
        return [prevPosition[0], prevPosition[1] - SPRITE_SIZE];

      case 'DOWN':
        return [prevPosition[0], prevPosition[1] + SPRITE_SIZE];
    }
  }

  // tracks sprite movement to prevent from walking off map
  function mapBoundaries(prevPosition, newPosition) {
    return newPosition[0] >= 0 &&
      newPosition[0] <= MAP_WIDTH - SPRITE_SIZE &&
      newPosition[1] >= 0 &&
      newPosition[1] <= MAP_HEIGHT - SPRITE_SIZE
      ? newPosition
      : prevPosition;
  }

  function avoidObjects(prevPosition, newPosition) {}

  // dispatches new position payload
  function moveDirection(direction) {
    const prevPosition = store.getState().player.position;
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: mapBoundaries(prevPosition, getNewPosition(direction)),
      },
    });
  }

  // returns direction corresponding to key pressed by user
  function handleKeyDown(e) {
    switch (e.keyCode) {
      case 37:
        return moveDirection('LEFT');

      case 38:
        return moveDirection('UP');

      case 39:
        return moveDirection('RIGHT');

      case 40:
        return moveDirection('DOWN');
    }
  }

  // listens for keydown event
  window.addEventListener('keydown', (e) => {
    e.preventDefault();
    handleKeyDown(e);
  });
  return player;
}
