import {
  ADD_PRODUCT_TO_CART,
  GET_ALL_PRODUCTS,
  REMOVE_PRODUCT_OF_CART,
} from "../constants/types";

const initialState = {
  all: [],
  cart: [],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, all: action.payload };
    case ADD_PRODUCT_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_PRODUCT_OF_CART:
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.id),
      };
    default:
      return state;
  }
}
