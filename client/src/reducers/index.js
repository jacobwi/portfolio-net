import { combineReducers } from "redux";

import authenticationReducer from "./authenticationReducer";
import errorReducer from "./errorReducer";
import notificationReducer from "./notificationReducer";
export default combineReducers({
  authentication: authenticationReducer,
  errors: errorReducer,
  notifications: notificationReducer
});
