import { SET_ALERT, REMOVE_ALERT } from "../../actions/types";
const initialState = {
  error: [],
};

const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALERT:
      return { ...state, error: [...state.error, payload] };
    case REMOVE_ALERT:
      return {
        ...state,
        error: state.error.filter((item) => item.id != payload),
      };
    default:
      return state;
  }
};

export default alertReducer;
