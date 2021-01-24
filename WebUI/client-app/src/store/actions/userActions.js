import axiosInstance from "../../axiosInstance";
import * as actionTypes from "./actionTypes";

let refreshTokenTimeout;
window.refreshToken = () => {};

export const setCurrentUser = (payload) => {
  localStorage.setItem("user", JSON.stringify(payload));
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload
  };
};

export const getCurrentUserCompleted = (payload) => (dispatch) => {
  dispatch(setCurrentUser(payload));
  return {
    type: actionTypes.GET_CURRENT_USER_COMPLETED,
    payload
  };
};

export const getCurrentUserFailed = (payload) => {
  localStorage.removeItem("user");
  return {
    type: actionTypes.GET_CURRENT_USER_FAILED,
    payload
  };
};

export const signOut = () => {
  localStorage.removeItem("user");
  return { type: actionTypes.SIGN_OUT };
};

export const startRefreshTokenTimer = () => (dispatch) => {
  const user = JSON.parse(localStorage.user);
  if (!user.token) dispatch(signOut());
  const { exp } = JSON.parse(atob(user?.token?.split(".")[1] ?? "") ?? "{}");
  const expires = new Date(exp * 1000);
  const timeout = expires.getTime() - Date.now() - 60 * 1000;
  refreshTokenTimeout = setTimeout(() => {
    dispatch(window.refreshToken());
  }, timeout);
};

export const getCurrentUser = () => (dispatch) => {
  axiosInstance
    .get("/user/current_user")
    .then((res) => dispatch(getCurrentUserCompleted(res.data)))
    .catch(() => {});
  return { type: actionTypes.GET_CURRENT_USER_INIT };
};

window.refreshToken = () => (dispatch) => {
  clearTimeout(refreshTokenTimeout);
  axiosInstance
    .post("/user/refresh_token")
    .then(({ data }) => {
      dispatch(setCurrentUser(data));
      dispatch(startRefreshTokenTimer());
    })
    .catch(() => dispatch(signOut()));
};
