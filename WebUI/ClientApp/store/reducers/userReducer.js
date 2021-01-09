import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  avatar: undefined,
  email: undefined,
  userName: undefined,
  token: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        avatar: action.payload.avatar,
        email: action.payload.email,
        userName: action.payload.userName,
        token: action.payload.token
      };
    case actionTypes.SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        avatar: undefined,
        email: undefined,
        userName: undefined,
        token: ""
      };
    default:
      return state;
  }
};

export default reducer;
