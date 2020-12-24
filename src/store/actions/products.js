import axios from "axios";

import {
  ADD_PRODUCT_TO_CART,
  GET_ALL_PRODUCTS,
  GET_CATEGORY_PRODUCT,
  GET_SINGLE_PRODUCT,
  LOADING_ALL_PRODUCTS,
  LOADING_ALL_PRODUCTS_FAIL,
  LOADING_ALL_PRODUCTS_SUCCESS,
  REMOVE_PRODUCT_OF_CART,
} from "../constants/types";

export const addProductToCart = (product) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  });
};

export const getAllProducts = () => (dispatch) => {
  dispatch({
    type: LOADING_ALL_PRODUCTS,
  });

  axios
    .get(`${process.env.REACT_APP_ENDPOINT_FAKE_STORE_API}/products`)
    .then((res) => {
      console.log("res data ", res.data);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      });
      dispatch({
        type: LOADING_ALL_PRODUCTS_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOADING_ALL_PRODUCTS_FAIL,
      });
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

export const getCategoryProduct = (productCategory) => (dispatch) => {
  axios
    .get(
      `${process.env.REACT_APP_ENDPOINT_FAKE_STORE_API}/products/${productCategory}`
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

export const removeProductOfCart = (product) => (dispatch) => {
  dispatch({
    type: REMOVE_PRODUCT_OF_CART,
    id: product.id,
  });
};
