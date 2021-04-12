import { createReducer } from '@reduxjs/toolkit';

import { productActions } from 'bus/product/actions';

const initialState = {
  product: {},
  error: false,
  loading: false,
  succeed: false,
};

const fetchProductItemReducer = createReducer(initialState, {
  [productActions.fetchProductItem.start]: (state) => ({
    ...state,
    loading: true,
  }),
  [productActions.fetchProductItem.success]: (state, { payload }) => ({
    ...state,
    succeed: true,
    loading: false,
    product: payload.data,
  }),
  [productActions.fetchProductItem.error]: (state, { payload }) => ({
    ...state,
    error: payload.error.code,
  }),
});

export default fetchProductItemReducer;
