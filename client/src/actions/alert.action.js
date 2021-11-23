import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 as uuidv4 } from "uuid";

export const setAlert = (msg, alertType, id) => ({
  type: SET_ALERT,
  payload: { msg, alertType, id },
});

export const setAlertStart = (msg, alertType) => {
  const id = uuidv4();
  return (dispatch) => {
    dispatch(setAlert(msg, alertType, id));
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
  };
};
