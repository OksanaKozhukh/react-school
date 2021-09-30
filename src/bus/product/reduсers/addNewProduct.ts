import { createReducer } from '@reduxjs/toolkit';

import { IProductState } from 'interfaces';
import { productActions } from 'bus/product/actions';

const initialState = {
  error: null,
  loading: false,
  succeed: false,
} as IProductState;

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
      error: action.payload,
    }));
});

export default addNewProductReducer;
