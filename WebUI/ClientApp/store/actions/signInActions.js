import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

const signInInit = () => ({ type: actionTypes.SIGN_IN_INIT });

const signInCompleted = (payload) => {
  toast.success("Logged in!"); // TODO: delete
  return {
    type: actionTypes.SIGN_IN_COMPLETED,
    payload,
  };
};

const signInFailed = (payload) => {
  toast.error(payload);
  return {
    type: actionTypes.SIGN_IN_FAILED,
    payload,
  };
};

export const signIn = ({ email, password }) => async (dispatch) => {
  dispatch(signInInit());
  let res;
  try {
    res = await axios.post("/user/signin", {
      email,
      password,
    });
    dispatch(signInCompleted(res.data));
  } catch (e) {
    dispatch(signInFailed(e?.response?.data?.message ?? "An error occurred"));
  }
};
