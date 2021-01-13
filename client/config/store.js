import { createStore, combineReducers } from 'redux';
import playerReducer from '../features/player/reducer.js';
import mapsReducer from '../features/map/reducer.js';

// saves the state to local storage in browser
function saveToLocalStorage(state) {
  try {
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem('state', stringifiedState);
  } catch (error) {
    console.log(error);
  }
}

// retrieves state from local storage
function loadFromLocalStorage() {
  try {
    const stringifiedState = localStorage.getItem('state');
    if (stringifiedState === null) return undefined;
    return JSON.parse(stringifiedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapsReducer,
});

// stores retrieved state from local storage
const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
