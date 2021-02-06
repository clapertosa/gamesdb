import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

const getGameInit = () => ({
  type: actionTypes.GET_GAME_INIT
});

const getGameCompleted = (payload) => ({
  type: actionTypes.GET_GAME_SUCCESS,
  payload
});

const getGameFailed = (payload) => {
  toast.error(payload);
  return {
    type: actionTypes.GET_GAME_FAILED,
    payload
  };
};

export const getGame = (id) => async (dispatch) => {
  dispatch(getGameInit());
  let res;
  try {
    res = await axios.post("/gdb/get_game", id);
    dispatch(getGameCompleted(res.data));
  } catch (e) {
    dispatch(getGameFailed(e?.response?.data?.message ?? "An error occurred"));
  }
};
