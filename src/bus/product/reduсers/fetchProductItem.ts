import { createReducer } from '@reduxjs/toolkit';

import { productActions } from 'bus/product/actions';

const initialState = {
  product: {},
  error: false,
  loading: false,
  succeed: false,
};

const fetchProductItemReducer = createReducer(initialState, {
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.fetchProductItem.start]: (state) => ({
    ...state,
    loading: true,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.fetchProductItem.success]: (state, { payload }) => ({
    ...state,
    succeed: true,
    loading: false,
    product: payload.data,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.fetchProductItem.error]: (state, { payload }) => ({
    ...state,
    error: payload.error.code,
  }),
});

export default fetchProductItemReducer;
