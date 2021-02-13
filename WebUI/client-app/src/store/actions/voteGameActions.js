import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";
import { getGameStats } from "./gameStatsActions";

const voteGameInit = () => ({ type: actionTypes.VOTE_GAME_INIT });

const voteGameSuccess = () => {
  toast.success("Success");
  return { type: actionTypes.VOTE_GAME_SUCCESS };
};

const voteGameFailed = (data) => ({
  type: actionTypes.VOTE_GAME_FAILED,
  payload: data
});

export const voteGame = ({ game, vote }) => async (dispatch) => {
  dispatch(voteGameInit());
  try {
    await axios.post("game/vote", { game, vote });
    dispatch(voteGameSuccess());
    dispatch(getGameStats(game.id));
  } catch (e) {
    dispatch(voteGameFailed(e?.response?.data?.message ?? "An error occurred"));
  }
};
