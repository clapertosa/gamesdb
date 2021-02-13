import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";
import { getGameStats } from "./gameStatsActions";

const unfollowGameInit = () => ({ type: actionTypes.UNFOLLOW_GAME_INIT });

const unfollowGameSuccess = () => ({ type: actionTypes.UNFOLLOW_GAME_SUCCESS });

const unfollowGameFailed = (data) => ({
  type: actionTypes.UNFOLLOW_GAME_FAILED,
  payload: data
});

export const unfollowGame = (game) => async (dispatch) => {
  dispatch(unfollowGameInit());
  try {
    await axios.post("game/unfollow", { game });
    dispatch(unfollowGameSuccess());
    dispatch(getGameStats(game.id));
  } catch (e) {
    dispatch(
      unfollowGameFailed(e?.response?.data?.message ?? "An error occurred")
    );
  }
};
