import { GET_ERRORS } from "../constants/types";

const initialState = {};

export default function errors(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
