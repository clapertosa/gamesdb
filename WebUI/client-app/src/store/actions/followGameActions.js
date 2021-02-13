import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";
import { getGameStats } from "./gameStatsActions";

const followGameInit = () => ({ type: actionTypes.FOLLOW_GAME_INIT });

const followGameSuccess = () => {
  toast.success("Following game");
  return { type: actionTypes.FOLLOW_GAME_SUCCESS };
};

const followGameFailed = (data) => ({
  type: actionTypes.FOLLOW_GAME_FAILED,
  payload: data
});

export const followGame = (game) => async (dispatch) => {
  dispatch(followGameInit());
  try {
    await axios.post("game/follow", { game });
    dispatch(followGameSuccess());
    dispatch(getGameStats(game.id));
  } catch (e) {
    dispatch(
      followGameFailed(e?.response?.data?.message ?? "An error occurred")
    );
  }
};
