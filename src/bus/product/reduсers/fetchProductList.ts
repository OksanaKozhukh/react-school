import { createReducer } from '@reduxjs/toolkit';

import { IFetchProductList } from 'interfaces';
import { productActions } from 'bus/product/actions';

const initialState = {
  error: null,
  origins: [],
  totalItems: 0,
  loading: false,
  succeed: false,
  products: undefined,
} as IFetchProductList;

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
      products: action.payload?.data.items,
      totalItems: action.payload?.data.totalItems,
    }))
    .addCase(productActions.fetchOrigins.success, (state, action) => ({
      ...state,
      origins: action.payload?.data.items,
    }))
    .addCase(productActions.fetchProductList.error, (state, action) => ({
      ...state,
      error: action.payload,
    }));
});

export default fetchProductListReducer;
