const initialState = {
  playerName: 'Parzival',
  totalSolves: 0,
  totalPoints: 0,
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SOLVED_ALGO':
      let totalPoints = state.totalPoints + 5;
      let totalSolves = state.totalSolves + 1;
      return {
        ...state,
        totalPoints,
        totalSolves,
      };

    case 'PLAYER_NAME':
      return {
        ...state,
        playerName: action.payload,
      };
    default:
      return state;
  }
};

export default statsReducer;
