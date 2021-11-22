import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducers";

const initialState = {};
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const Store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
