import { createReducer } from '@reduxjs/toolkit';

import { productActions } from 'bus/product/actions';

const initialState = {
  product: {},
  error: false,
  loading: false,
  succeed: false,
};

const fetchProductItemReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(productActions.fetchProductItem.start, (state) => ({
      ...state,
      loading: true,
    }))
    .addCase(productActions.fetchProductItem.success, (state, action) => ({
      ...state,
      succeed: true,
      loading: false,
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
      product: action.payload?.data,
    }))
    .addCase(productActions.fetchProductItem.error, (state, action) => ({
      ...state,
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message

      error: action.payload.error.code,
    }));
});

export default fetchProductItemReducer;
