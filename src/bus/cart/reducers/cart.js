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
    ).map(el => Object.assign(el, {totalPrice: el.price}));
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
      item.id === payload ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + item.price } : item
    ),
    totalPrice: Number(state.totalPrice) + Number(state.cartProducts.filter(item => item.id === payload).map(item => item.price)),
  }),
  [cartActions.decreaseItem]: (state, { payload }) => ({
    ...state,
    cartProducts: state.cartProducts.map((item) =>
      item.id === payload ? { ...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - item.price } : item
    ),
    totalPrice: Number(state.totalPrice) - Number(state.cartProducts.filter(item => item.id === payload).map(item => item.price)),
  }),
});

export default cartReducer;
