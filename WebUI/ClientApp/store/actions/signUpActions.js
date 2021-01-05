import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

const signUpInit = () => ({ type: actionTypes.SIGN_UP_INIT });

const signUpCompleted = (payload) => {
  toast.success("Registration successful");
  setTimeout(() => {
    window.location = "/";
  }, [3000]);
  return {
    type: actionTypes.SIGN_UP_COMPLETED,
    payload,
  };
};

const signUpFailed = (payload) => {
  toast.error(payload);
  return {
    type: actionTypes.SIGN_UP_FAILED,
    payload,
  };
};

export const signUp = ({ avatar, userName, email, password }) => async (
  dispatch
) => {
  dispatch(signUpInit());
  let res;
  try {
    res = await axios.post("/user/signup", {
      avatar,
      userName,
      email,
      password,
    });
    dispatch(signUpCompleted(res.data));
  } catch (e) {
    dispatch(signUpFailed(e.response.data.message));
  }
};
