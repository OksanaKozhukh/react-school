import { createReducer } from '@reduxjs/toolkit';

import { productActions } from 'bus/product/actions';

const initialState = {
  origins: [],
  products: [],
  error: false,
  loading: false,
  succeed: false,
  totalItems: null,
};

const fetchProductListReducer = createReducer(initialState, {
  [productActions.fetchProductList.start]: (state) => ({
    ...state,
    loading: true,
  }),
  [productActions.fetchProductList.success]: (state, { payload }) => ({
    ...state,
    succeed: true,
    loading: false,
    products: payload.data.items,
    totalItems: payload.data.totalItems,
  }),
  [productActions.fetchOrigins.success]: (state, { payload }) => ({
    ...state,
    origins: payload.data.items,
  }),
  [productActions.fetchProductList.error]: (state, { payload }) => ({
    ...state,
    error: payload.error.code,
  }),
});

export default fetchProductListReducer;
