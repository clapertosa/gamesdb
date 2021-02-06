import { combineReducers } from "redux";
import signInReducer from "./signInReducer";
import signUpReducer from "./signUpReducer";
import userReducer from "./userReducer";
import popularGamesReducer from "./popularGamesReducer";
import topRatedMonthGamesReducer from "./topRatedMonthGamesReducer";
import bestGamesReducer from "./bestGamesReducer";

export default combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  user: userReducer,
  popularGames: popularGamesReducer,
  topRatedMonthGames: topRatedMonthGamesReducer,
  bestGames: bestGamesReducer
});
