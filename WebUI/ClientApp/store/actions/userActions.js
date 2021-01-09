import * as actionTypes from "./actionTypes";

export const setCurrentUser = (payload) => ({
  type: actionTypes.SET_CURRENT_USER,
  payload
});

export const signOut = () => {
  localStorage.removeItem("user");
  return { type: actionTypes.SIGN_OUT };
};
