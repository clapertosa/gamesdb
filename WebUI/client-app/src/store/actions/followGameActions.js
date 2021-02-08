import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

const followGameInit = () => ({ type: actionTypes.FOLLOW_GAME_INIT });

const followGameSuccess = () => ({ type: actionTypes.FOLLOW_GAME_SUCCESS });

const followGameFailed = (data) => ({
  type: actionTypes.FOLLOW_GAME_FAILED,
  payload: data
});

export const followGame = (game) => async (dispatch) => {
  dispatch(followGameInit());
  try {
    await axios.post("game/follow", { game });
    dispatch(followGameSuccess());
  } catch (e) {
    dispatch(
      followGameFailed(e?.response?.data?.message ?? "An error occurred")
    );
  }
};
