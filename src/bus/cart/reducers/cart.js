import { createReducer } from "@reduxjs/toolkit";

import { cartActions } from "bus/cart/actions";

const initialState = {
  cartProducts: [],
};

const cartReducer = createReducer(initialState, {
  [cartActions.addToCart]: (state, { payload }) => ({
      ...state,
      cartProducts: state.cartProducts.concat(payload),
  }),
});

export default cartReducer;