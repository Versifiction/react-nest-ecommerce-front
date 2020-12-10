import isEmpty from "is-empty";

import { LOGIN, LOGOUT, SET_CURRENT_USER } from "../constants/types";

const initialState = {
  current: {},
  isConnected: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isConnected: true };
    case LOGOUT:
      return { ...state, isConnected: false, current: {} };
    case SET_CURRENT_USER:
      return {
        ...state,
        isConnected: !isEmpty(action.payload),
        current: action.payload,
      };
    default:
      return state;
  }
}
