import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

const getDashboardGamesInit = () => ({
  type: actionTypes.GET_DASHBOARD_INIT
});

const getDashboardGamesSuccess = (data) => ({
  type: actionTypes.GET_DASHBOARD_SUCCESS,
  payload: data
});

const getDashboardGamesFailed = (error) => ({
  type: actionTypes.GET_DASHBOARD_FAILED,
  payload: error
});

export const getDashboardGames = () => async (dispatch) => {
  dispatch(getDashboardGamesInit());

  try {
    const res = await axios.get("user/current_profile", {
      headers: { "Content-Type": "application/json" }
    });
    dispatch(getDashboardGamesSuccess(res.data));
  } catch (e) {
    dispatch(
      getDashboardGamesFailed(e?.response?.data?.message ?? "An error occurred")
    );
  }
};
