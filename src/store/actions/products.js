import axios from "axios";

import { GET_ALL_PRODUCTS } from "../constants/types";

export const getAllProducts = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_ENDPOINT_FAKE_STORE_API}/products`)
    .then((res) => {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("err ", err);
    });
};
