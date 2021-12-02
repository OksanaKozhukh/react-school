/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import uniqBy from 'lodash/uniqBy';

import { createReducer } from '@reduxjs/toolkit';

import { ICartState } from 'interfaces';
import { cartActions } from 'bus/cart/actions';

const initialState = {
  totalPrice: 0,
  cartProducts: [],
} as ICartState;

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cartActions.addToCart, (state, action) => {
      const list = [...state.cartProducts, action.payload].map((item) =>
        item.id === action.payload?.id
          ? {
              ...item,
              quantity: item?.quantity + 1,
              totalPrice: (item?.quantity + 1) * item?.price,
            }
          : item,
      );
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
        (item) => item?.id !== action.payload?.id,
      ),
      totalPrice: state.totalPrice - action.payload?.totalPrice,
    }))
    .addCase(cartActions.increaseItem, (state, action) => ({
      ...state,
      cartProducts: state.cartProducts.map((item) =>
        item.id === action.payload?.id
          ? {
              ...item,
              quantity: item?.quantity + 1,
              totalPrice: item?.totalPrice + item?.price,
            }
          : item,
      ),
      totalPrice: state.totalPrice + action.payload?.price,
    }))
    .addCase(cartActions.decreaseItem, (state, action) => ({
      ...state,
      cartProducts: state.cartProducts.map((item) =>
        item.id === action.payload?.id
          ? {
              ...item,
              quantity: item?.quantity - 1,
              totalPrice: item?.totalPrice - item?.price,
            }
          : item,
      ),
      totalPrice: state.totalPrice - action.payload?.price,
    }));
});

export default cartReducer;
