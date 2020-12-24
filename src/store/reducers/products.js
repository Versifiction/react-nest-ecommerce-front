import {
  ADD_PRODUCT_TO_CART,
  GET_ALL_PRODUCTS,
  LOADING_ALL_PRODUCTS,
  LOADING_ALL_PRODUCTS_FAIL,
  LOADING_ALL_PRODUCTS_SUCCESS,
  REMOVE_PRODUCT_OF_CART,
} from "../constants/types";

const initialState = {
  allProducts: [],
  cart: [],
  error: false,
  loadingAllProducts: false,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: action.payload };
    case ADD_PRODUCT_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case LOADING_ALL_PRODUCTS:
      return { ...state, loadingAllProducts: true };
    case LOADING_ALL_PRODUCTS_FAIL:
      return { ...state, loadingAllProducts: false, error: true };
    case LOADING_ALL_PRODUCTS_SUCCESS:
      return { ...state, loadingAllProducts: false, error: false };
    case REMOVE_PRODUCT_OF_CART:
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.id),
      };
    default:
      return state;
  }
}
