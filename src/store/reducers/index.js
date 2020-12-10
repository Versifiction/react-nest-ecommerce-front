import { combineReducers } from "redux";

import errors from "./errors";
import loading from "./loading";
import cart from "./cart";
import user from "./user";

const rootReducer = combineReducers({
  errors,
  loading,
  cart,
  user,
});

export default rootReducer;
