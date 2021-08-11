/* eslint-disable indent */
import uniqBy from 'lodash/uniqBy';

import { createReducer } from '@reduxjs/toolkit';

import { cartActions } from 'bus/cart/actions';

const initialState = {
  cartProducts: [],
  totalPrice: 0,
};

const cartReducer = createReducer(initialState, {
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [cartActions.addToCart]: (state, { payload }) => {
    const list = [...state.cartProducts, payload]
      .map((item) =>
        item.id === payload.id
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
  },
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [cartActions.deleteFromCart]: (state, { payload }) => ({
    ...state,
    cartProducts: state.cartProducts.filter(
      (item) => (item as any).id !== payload,
    ),
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [cartActions.increaseItem]: (state, { payload }) => ({
    ...state,
    cartProducts: state.cartProducts.map((item) =>
      (item as any).id === payload
        ? {
            // @ts-expect-error ts-migrate(2698) FIXME: Spread types may only be created from object types... Remove this comment to see the full error message
            ...item,
            // @ts-expect-error ts-migrate(2698) FIXME: Spread types may only be created from object types... Remove this comment to see the full error message
            quantity: item.quantity + 1,
            // @ts-expect-error ts-migrate(2698) FIXME: Spread types may only be created from object types... Remove this comment to see the full error message
            totalPrice: item.totalPrice + item.price,
          }
        : item,
    ),
    totalPrice:
      Number(state.totalPrice) +
      Number(
        state.cartProducts
          .filter((item) => (item as any).id === payload)
          .map((item) => (item as any).price),
      ),
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [cartActions.decreaseItem]: (state, { payload }) => ({
    ...state,
    cartProducts: state.cartProducts.map((item) =>
      (item as any).id === payload
        ? {
            // @ts-expect-error ts-migrate(2698) FIXME: Spread types may only be created from object types... Remove this comment to see the full error message
            ...item,
            // @ts-expect-error ts-migrate(2698) FIXME: Spread types may only be created from object types... Remove this comment to see the full error message
            quantity: item.quantity - 1,
            // @ts-expect-error ts-migrate(2698) FIXME: Spread types may only be created from object types... Remove this comment to see the full error message
            totalPrice: item.totalPrice - item.price,
          }
        : item,
    ),
    totalPrice:
      Number(state.totalPrice) -
      Number(
        state.cartProducts
          .filter((item) => (item as any).id === payload)
          .map((item) => (item as any).price),
      ),
  }),
});

export default cartReducer;
