import { combineReducers } from "redux";
import alertReducer from "./reducers/alertReducer";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  profile: profileReducer,
});
