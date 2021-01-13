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

  // changes orientation of sprite based on direction
  function getSpriteLocation(direction, imageIndex) {
    switch (direction) {
      case 'DOWN':
        return `${SPRITE_SIZE * imageIndex}px ${SPRITE_SIZE * 0}px`;

      case 'UP':
        return `${SPRITE_SIZE * imageIndex}px ${SPRITE_SIZE * 1}px`;

      case 'RIGHT':
        return `${SPRITE_SIZE * imageIndex}px ${SPRITE_SIZE * 2}px`;

      case 'LEFT':
        return `${SPRITE_SIZE * imageIndex}px ${SPRITE_SIZE * 3}px`;
    }
  }

  // tracks the index of each sprite within sprite image
  function getImageIndex() {
    const imageIndex = store.getState().player.imageIndex;
    return imageIndex >= 3 ? 0 : imageIndex + 1;
  }

  // tracks sprite movement to prevent from walking off map
  //if !== 0 then obstacle
  function mapBoundaries(prevPosition, newPosition) {
    return (
      newPosition[0] >= 0 &&
      newPosition[0] <= MAP_WIDTH - SPRITE_SIZE &&
      newPosition[1] >= 0 &&
      newPosition[1] <= MAP_HEIGHT - SPRITE_SIZE
    );
  }

  // prevents sprite from walking through solid objects on map
  function avoidObjects(prevPosition, newPosition) {
    const tiles = store.getState().map.tiles;
    const y = newPosition[1] / SPRITE_SIZE;
    const x = newPosition[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];
    return nextTile < 5;
  }

  // dispatches new position payload
  function moveDirection(newPosition, direction) {
    const imageIndex = getImageIndex();
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: newPosition,
        direction,
        imageIndex,
        spriteLocation: getSpriteLocation(direction, imageIndex),
      },
    });
  }

  // combines functionality to keep sprite inside map and prevent from walking through solid objects
  function tryDirection(direction) {
    const prevPosition = store.getState().player.position;
    const newPosition = getNewPosition(direction);
    if (
      mapBoundaries(prevPosition, newPosition) &&
      avoidObjects(prevPosition, newPosition)
    ) {
      moveDirection(newPosition, direction);
    }
  }

  // returns direction corresponding to key pressed by user
  function handleKeyDown(e) {
    switch (e.keyCode) {
      case 37:
        return tryDirection('LEFT');

      case 38:
        return tryDirection('UP');

      case 39:
        return tryDirection('RIGHT');

      case 40:
        return tryDirection('DOWN');
    }
  }

  // listens for keydown event
  window.addEventListener('keydown', (e) => {
    e.preventDefault();
    handleKeyDown(e);
  });
  return player;
}
