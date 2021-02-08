import uniqBy from "lodash/uniqBy";

import { createReducer } from "@reduxjs/toolkit";

import { cartActions } from "bus/cart/actions";

const initialState = {
  cartProducts: [],
  totalPrice: 0,
};

const cartReducer = createReducer(initialState, {
  [cartActions.addToCart]: (state, { payload }) => {
    const list = [...state.cartProducts, payload].map((item) =>
      item.id === payload.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
    const uniqList = uniqBy(list, "id");
    return {
      ...state,
      cartProducts: uniqList,
      totalPrice: uniqList.reduce((sum, cur) => sum + (cur.quantity * cur.price), 0),
    };
  },
  [cartActions.deleteFromCart]: (state, { payload }) => ({
    ...state,
    cartProducts: state.cartProducts.filter((item) => item.id !== payload),
  }),
  [cartActions.increaseItem]: (state, { payload }) => ({
    ...state,
    cartProducts: state.cartProducts.map((item) =>
      item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
    ),
  }),
  [cartActions.decreaseItem]: (state, { payload }) => ({
    ...state,
    cartProducts: state.cartProducts.map((item) =>
      item.id === payload ? { ...item, quantity: item.quantity - 1 } : item
    ),
  }),
});

export default cartReducer;
