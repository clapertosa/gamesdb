import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

const getTopRatedMonthGamesInit = () => ({
  type: actionTypes.GET_TOP_RATED_GAMES_INIT
});

const getTopRatedMonthGamesCompleted = (payload) => ({
  type: actionTypes.GET_TOP_RATED_GAMES_SUCCESS,
  payload
});

const getTopRatedMonthGamesFailed = (payload) => {
  toast.error(payload);
  return {
    type: actionTypes.GET_TOP_RATED_GAMES_FAILED,
    payload
  };
};

export const getTopRatedMonthGames = () => async (dispatch) => {
  dispatch(getTopRatedMonthGamesInit());
  let res;
  try {
    res = await axios.post("/gdb/get_top_rated_month_games");
    dispatch(getTopRatedMonthGamesCompleted(res.data));
  } catch (e) {
    dispatch(
      getTopRatedMonthGamesFailed(
        e?.response?.data?.message ?? "An error occurred"
      )
    );
  }
};
