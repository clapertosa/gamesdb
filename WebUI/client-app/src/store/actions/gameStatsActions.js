import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

const getGameStatsInit = () => ({
  type: actionTypes.GET_GAME_STATS_INIT
});

const getGameStatsCompleted = (payload) => ({
  type: actionTypes.GET_GAME_STATS_SUCCESS,
  payload
});

const getGameStatsFailed = (payload) => {
  toast.error(payload);
  return {
    type: actionTypes.GET_GAME_STATS_FAILED,
    payload
  };
};

export const getGameStats = (id) => async (dispatch) => {
  dispatch(getGameStatsInit());

  try {
    const userStats = await axios.post("/game/get_game_stats", { gameId: id });
    dispatch(getGameStatsCompleted(userStats?.data));
  } catch (e) {
    dispatch(
      getGameStatsFailed(e?.response?.data?.message ?? "An error occurred")
    );
    window.location.href = "/";
  }
};
