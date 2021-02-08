import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  success: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FOLLOW_GAME_INIT:
      return { ...state, loading: true };
    case actionTypes.FOLLOW_GAME_SUCCESS:
      return { ...state, loading: false, success: true, error: false };
    case actionTypes.FOLLOW_GAME_FAILED:
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
