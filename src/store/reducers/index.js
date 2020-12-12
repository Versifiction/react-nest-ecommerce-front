import { combineReducers } from "redux";

import errors from "./errors";
import loading from "./loading";
import user from "./user";
import products from "./products";

const rootReducer = combineReducers({
  errors,
  loading,
  user,
  products,
});

export default rootReducer;
