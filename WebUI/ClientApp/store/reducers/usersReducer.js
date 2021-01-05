import * as actionTypes from "../actions/actionTypes";

const initialState = {
  email: "",
  userName: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        email: action.payload.email,
        userName: action.payload.userName,
      };
    default:
      return state;
  }
};

export default reducer;
