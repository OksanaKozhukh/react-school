import { createReducer } from '@reduxjs/toolkit';

import { productActions } from 'bus/product/actions';

const initialState = {
  error: false,
  loading: false,
  succeed: false,
};

const addNewProductReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(productActions.addNewProduct.start, (state) => ({
      ...state,
      loading: true,
    }))
    .addCase(productActions.addNewProduct.success, (state) => ({
      ...state,
      succeed: true,
      loading: false,
    }))
    .addCase(productActions.addNewProduct.error, (state, action) => ({
      ...state,
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
      error: action.payload.error.code,
    }));
});

export default addNewProductReducer;
