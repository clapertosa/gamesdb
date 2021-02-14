import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  success: null,
  error: null,
  followed: [],
  voted: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DASHBOARD_INIT:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        followed: action.payload.followedGames,
        voted: action.payload.votedGames
      };
    case actionTypes.GET_DASHBOARD_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
        followed: [],
        voted: []
      };
    default:
      return state;
  }
};

export default reducer;
