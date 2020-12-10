import axios from "axios";

import {
  GET_ALL_PRODUCTS,
  GET_CATEGORY_PRODUCT,
  GET_SINGLE_PRODUCT,
} from "../constants/types";

export const getAllProducts = (productLimit, productSort) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_ENDPOINT_FAKE_STORE_API}/products`,
    {
      params: {
        limit: productLimit,
        sort: productSort,
      },
    })
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

export const getSingleProduct = (productId, productLimit, productSort) => (
  dispatch
) => {
  axios
    .get(
      `${process.env.REACT_APP_ENDPOINT_FAKE_STORE_API}/products/${productId}`,
      {
        params: {
          limit: productLimit,
          sort: productSort,
        },
      }
    )
    .then((res) => {
      dispatch({
        type: GET_SINGLE_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("err ", err);
    });
};

export const getCategoryProduct = (productCategory, productLimit, productSort) => (dispatch) => {
  axios
    .get(
      `${process.env.REACT_APP_ENDPOINT_FAKE_STORE_API}/products/${productCategory}`,
      {
        params: {
          limit: productLimit,
          sort: productSort,
        },
    )
    .then((res) => {
      dispatch({
        type: GET_CATEGORY_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("err ", err);
    });
};
