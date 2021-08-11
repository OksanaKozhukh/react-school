import { createReducer } from '@reduxjs/toolkit';

import { productActions } from 'bus/product/actions';

const initialState = {
  id: '',
  error: false,
  loading: false,
  succeed: false,
};

const deleteProductReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(productActions.selectProductForDelete, (state, action) => ({
      ...state,
      id: action.payload,
    }))
    .addCase(productActions.deleteProduct.start, (state) => ({
      ...state,
      loading: true,
    }))
    .addCase(productActions.deleteProduct.success, (state) => ({
      ...state,
      succeed: true,
      loading: false,
    }))
    .addCase(productActions.deleteProduct.error, (state, action) => ({
      ...state,
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
      error: action.payload.error.code,
    }));
});

export default deleteProductReducer;
