import { GET_PROFILE, PROFILE_ERROR } from "./types";
import axios from "axios";
import { setAlert } from "./alert.action";

//Get current user profiles
export const getCurrentProfileStart = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("api/profile/me");
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};
