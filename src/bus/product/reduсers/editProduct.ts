import { createReducer } from '@reduxjs/toolkit';

import { IEditProduct } from 'interfaces';
import { productActions } from 'bus/product/actions';

const initialState = {
  error: null,
  loading: false,
  succeed: false,
  currentProduct: {},
} as IEditProduct;

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
      error: action.payload,
    }));
});

export default editProductReducer;
