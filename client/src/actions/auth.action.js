import { REGISTER_FAIL, REGISTER_SUCCESS } from "./types";
import axios from "axios";
import { setAlertStart } from "./alert.action";

//Register User
export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const registerFail = () => ({
  type: REGISTER_FAIL,
});

export const registerationStart = ({ name, email, password }) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post("/api/users", body, config);
      console.log(res.data);
      dispatch(registerSuccess(res.data));
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlertStart(error.msg, "danger")));
      }
      dispatch(registerFail());
    }
  };
};
