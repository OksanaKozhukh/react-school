import { createReducer } from '@reduxjs/toolkit';

import { productActions } from 'bus/product/actions';

const initialState = {
  currentProduct: {},
  error: false,
  loading: false,
  succeed: false,
};

const editProductReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(productActions.selectProductForEdit, (state, action) => ({
      ...state,
      currentProduct: action.payload,
    }))
    .addCase(productActions.editProduct.start, (state) => ({
      ...state,
      loading: true,
    }))
    .addCase(productActions.editProduct.success, (state) => ({
      ...state,
      succeed: true,
      loading: false,
    }))
    .addCase(productActions.editProduct.error, (state, action) => ({
      ...state,
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
      error: action.payload.error.code,
    }));
});

export default editProductReducer;
