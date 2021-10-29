import { createReducer } from '@reduxjs/toolkit';

import { IDeleteProduct } from 'interfaces';
import { productActions } from 'bus/product/actions';

const initialState = {
  id: '',
  error: null,
  loading: false,
  succeed: false,
} as IDeleteProduct;

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
      error: action.payload,
    }));
});

export default deleteProductReducer;
