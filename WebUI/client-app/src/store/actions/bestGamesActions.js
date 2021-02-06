import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

const getBestGamesInit = () => ({
  type: actionTypes.GET_BEST_GAMES_INIT
});

const getBestGamesCompleted = (payload) => ({
  type: actionTypes.GET_BEST_GAMES_SUCCESS,
  payload
});

const getBestGamesFailed = (payload) => {
  toast.error(payload);
  return {
    type: actionTypes.GET_BEST_GAMES_FAILED,
    payload
  };
};

export const getBestGames = () => async (dispatch) => {
  dispatch(getBestGamesInit());
  let res;
  try {
    res = await axios.post("/gdb/get_best_ever_games");
    dispatch(getBestGamesCompleted(res.data));
  } catch (e) {
    dispatch(
      getBestGamesFailed(e?.response?.data?.message ?? "An error occurred")
    );
  }
};
