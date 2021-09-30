/* eslint-disable indent */
import uniqBy from 'lodash/uniqBy';

import { createReducer } from '@reduxjs/toolkit';

import { CartState } from 'types';
import { cartActions } from 'bus/cart/actions';

const initialState = {
  cartProducts: [],
  totalPrice: 0,
} as CartState;

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cartActions.addToCart, (state, action) => {
      const list = [...state.cartProducts, action.payload]
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
        .map((el) => Object.assign(el, { totalPrice: el.price }));
      const uniqList = uniqBy(list, 'id');
      return {
        ...state,
        cartProducts: uniqList,
        totalPrice: uniqList.reduce(
          (sum, cur) => sum + cur.quantity * cur.price,
          0,
        ),
      };
    })
    .addCase(cartActions.deleteFromCart, (state, action) => ({
      ...state,
      cartProducts: state.cartProducts.filter(
        (item) => item.id !== action.payload,
      ),
    }))
    .addCase(cartActions.increaseItem, (state, action) => ({
      ...state,
      cartProducts: state.cartProducts.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + item.price,
            }
          : item,
      ),
      totalPrice:
        Number(state.totalPrice) +
        Number(
          state.cartProducts
            .filter((item) => item.id === action.payload)
            .map((item) => item.price),
        ),
    }))
    .addCase(cartActions.decreaseItem, (state, action) => ({
      ...state,
      cartProducts: state.cartProducts.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.totalPrice - item.price,
            }
          : item,
      ),
      totalPrice:
        Number(state.totalPrice) -
        Number(
          state.cartProducts
            .filter((item) => item.id === action.payload)
            .map((item) => item.price),
        ),
    }));
});

export default cartReducer;
