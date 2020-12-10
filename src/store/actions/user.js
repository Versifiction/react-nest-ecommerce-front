import axios from "axios";

import { GET_ERRORS } from "../constants/types";

export const registerUser = (userData) => (dispatch) => {
  axios
    .post(
      `${process.env.REACT_APP_ENDPOINT_SERVER}/api/users/register`,
      userData
    )
    .then((res) => (window.location.href = "/"))
    .catch((err) => {
      console.log("err ", err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
