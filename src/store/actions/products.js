import axios from "axios";

import {
  ADD_PRODUCT_TO_CART,
  CHANGE_CART_PRODUCT_QUANTITY,
  GET_ALL_PRODUCTS,
  GET_CATEGORY_PRODUCT,
  GET_SINGLE_PRODUCT,
  LOADING_ALL_PRODUCTS,
  LOADING_ALL_PRODUCTS_FAIL,
  LOADING_ALL_PRODUCTS_SUCCESS,
  LOADING_SINGLE_PRODUCT,
  LOADING_SINGLE_PRODUCT_FAIL,
  LOADING_SINGLE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_OF_CART,
} from "../constants/types";

export const addProductToCart = (product) => (dispatch) => {
  const productObject = Object.assign(product, { quantity: 1 });
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: productObject,
  });
};

export const changeCartProductQuantity = (quantity, productId) => (
  dispatch
) => {
  dispatch({
    type: CHANGE_CART_PRODUCT_QUANTITY,
    quantity,
    productId,
  });
};

export const getAllProducts = () => (dispatch) => {
  dispatch({
    type: LOADING_ALL_PRODUCTS,
  });

  axios
    .get(`${process.env.REACT_APP_ENDPOINT_FAKE_STORE_API}/products`)
    .then((res) => {
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

export const getSingleProduct = (productId) => (dispatch) => {
  dispatch({
    type: LOADING_SINGLE_PRODUCT,
  });

  axios
    .get(
      `${process.env.REACT_APP_ENDPOINT_FAKE_STORE_API}/products/${productId}`
    )
    .then((res) => {
      console.log("res ", res.data);
      dispatch({
        type: GET_SINGLE_PRODUCT,
        payload: res.data,
      });
      dispatch({
        type: LOADING_SINGLE_PRODUCT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOADING_SINGLE_PRODUCT_FAIL,
      });
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
