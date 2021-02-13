import { combineReducers } from "redux";
import signInReducer from "./signInReducer";
import signUpReducer from "./signUpReducer";
import userReducer from "./userReducer";
import popularGamesReducer from "./popularGamesReducer";
import topRatedMonthGamesReducer from "./topRatedMonthGamesReducer";
import bestGamesReducer from "./bestGamesReducer";
import gameReducer from "./gameReducer";
import gameStatsReducer from "./gameStatsReducer";
import followGameReducer from "./followGameReducer";
import unfollowGameReducer from "./unfollowGameReducer";
import voteGameReducer from "./voteGameReducer";

export default combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  user: userReducer,
  popularGames: popularGamesReducer,
  topRatedMonthGames: topRatedMonthGamesReducer,
  bestGames: bestGamesReducer,
  game: gameReducer,
  gameStats: gameStatsReducer,
  followGame: followGameReducer,
  unfollowGame: unfollowGameReducer,
  voteGame: voteGameReducer
});
