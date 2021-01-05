import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  success: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_INIT:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SIGN_IN_COMPLETED:
      return {
        ...state,
        loading: false,
        success: action.payload,
        error: false,
      };
    case actionTypes.SIGN_IN_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
