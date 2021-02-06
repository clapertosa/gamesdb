import * as actionTypes from "../actions/actionTypes";

const initialState = {
  games: [],
  loading: false,
  success: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BEST_GAMES_INIT:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_BEST_GAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        games: action.payload,
        success: true,
        error: false
      };
    case actionTypes.GET_BEST_GAMES_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
