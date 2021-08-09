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
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.fetchProductList.start]: (state) => ({
    ...state,
    loading: true,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.fetchProductList.success]: (state, { payload }) => ({
    ...state,
    succeed: true,
    loading: false,
    products: payload.data.items,
    totalItems: payload.data.totalItems,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.fetchOrigins.success]: (state, { payload }) => ({
    ...state,
    origins: payload.data.items,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.fetchProductList.error]: (state, { payload }) => ({
    ...state,
    error: payload.error.code,
  }),
});

export default fetchProductListReducer;
