import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

const getPopularGamesInit = () => ({
  type: actionTypes.GET_POPULAR_GAMES_INIT
});

const getPopularGamesCompleted = (payload) => ({
  type: actionTypes.GET_POPULAR_GAMES_SUCCESS,
  payload
});

const getPopularGamesFailed = (payload) => {
  toast.error(payload);
  return {
    type: actionTypes.GET_POPULAR_GAMES_FAILED,
    payload
  };
};

export const getPopularGames = () => async (dispatch) => {
  dispatch(getPopularGamesInit());
  let res;
  try {
    res = await axios.post("/gdb/get_popular_games");
    dispatch(getPopularGamesCompleted(res.data));
  } catch (e) {
    dispatch(
      getPopularGamesFailed(e?.response?.data?.message ?? "An error occurred")
    );
  }
};
