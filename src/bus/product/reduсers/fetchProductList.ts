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

const fetchProductListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(productActions.fetchProductList.start, (state) => ({
      ...state,
      loading: true,
    }))
    .addCase(productActions.fetchProductList.success, (state, action) => ({
      ...state,
      succeed: true,
      loading: false,
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
      products: action.payload.data.items,
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message

      totalItems: action.payload.data.totalItems,
    }))
    .addCase(productActions.fetchOrigins.success, (state, action) => ({
      ...state,
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
      origins: action.payload.data.items,
    }))
    .addCase(productActions.fetchProductList.error, (state, action) => ({
      ...state,
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
      error: action.payload.error.code,
    }));
});

export default fetchProductListReducer;
