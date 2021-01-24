import { combineReducers } from "redux";
import signInReducer from "./signInReducer";
import signUpReducer from "./signUpReducer";
import userReducer from "./userReducer";

export default combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  user: userReducer
});
