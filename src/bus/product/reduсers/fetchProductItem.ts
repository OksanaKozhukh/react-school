import { createReducer } from '@reduxjs/toolkit';

import { IFetchProductItem } from 'interfaces';
import { productActions } from 'bus/product/actions';

const initialState = {
  product: {},
  error: null,
  loading: false,
  succeed: false,
} as IFetchProductItem;

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
      product: action.payload?.data,
    }))
    .addCase(productActions.fetchProductItem.error, (state, action) => ({
      ...state,
      error: action.payload,
    }));
});

export default fetchProductItemReducer;
