import { createReducer } from "@reduxjs/toolkit";

import { productActions } from "bus/product/actions";

const initialState = {
  products: [],
  error: false,
  loading: false,
  succeed: false,
};

const fetchProductListReducer = createReducer(initialState, {
  [productActions.fetchProductList.start]: (state) => ({
    ...state,
    loading: true,
  }),
  [productActions.fetchProductList.success]: (state, { payload }) => ({
      ...state,
      succeed: true,
      loading: false,
      products: payload.data.items
  }),
  [productActions.fetchProductList.error]: (state, { payload }) => ({
      ...state,
      error: payload.error.code
  }),
});

export default fetchProductListReducer;