import {
  GET_PROFILE,
  DELETE_ACCOUNT,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
} from "./types";
import axios from "axios";
import { setAlertStart } from "./alert.action";

//Get current user profiles
export const getCurrentProfileStart = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/profile/me");
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
//Create or update profile
export const createProfileStart = (formData, history, edit = false) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/api/profile", formData, config);
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
      dispatch(
        setAlertStart(edit ? "Profile Updated" : "Profile Created", "success")
      );
      if (!edit) {
        history.push("/dashboard");
      }
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlertStart(error.msg, "danger")));
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};
//Add experience
export const addExperienceStart = (formData, history) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.put("/api/profile/experience", formData, config);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      });
      dispatch(setAlertStart("Experience Added", "success"));

      history.push("/dashboard");
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlertStart(error.msg, "danger")));
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};

//Add education
export const addEducationStart = (formData, history) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.put("/api/profile/education", formData, config);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      });
      dispatch(setAlertStart("Education Added", "success"));

      history.push("/dashboard");
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlertStart(error.msg, "danger")));
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};

//Delete experience
export const deleteExperienceStart = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlertStart("Experience Removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete education
export const deleteEducationStart = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlertStart("Education Removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete Account & profile
export const deleteAccountStart = () => async (dispatch) => {
  if (
    window.confirm("Are you sure you want to delete your account permanently")
  ) {
    try {
      axios.delete("/api/profile");
      dispatch({
        type: CLEAR_PROFILE,
      });
      dispatch({
        type: DELETE_ACCOUNT,
      });
      dispatch(setAlertStart("Your account has been deleted"));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
