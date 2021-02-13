import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  success: null,
  error: null,
  totalFollowers: 0,
  totalVotes: 0,
  isFollowing: false,
  vote: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GAME_STATS_INIT:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_GAME_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        totalFollowers: action.payload.totalFollowers,
        totalVotes: action.payload.totalVotes,
        isFollowing: action.payload.isFollowing,
        vote: action.payload.vote,
        success: true,
        error: false
      };
    case actionTypes.GET_GAME_STATS_FAILED:
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
