import { combineReducers } from "redux";
import alertReducer from "./reducers/alertReducer";

export default combineReducers({
  alert: alertReducer,
});
