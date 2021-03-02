import { createReducer } from "@reduxjs/toolkit";

import { productActions } from "bus/product/actions";

const initialState = {
  currentProduct: {},
  error: false,
  loading: false,
  succeed: false,
};

const editProductReducer = createReducer(initialState, {
  [productActions.selectProductForEdit]: (state, { payload }) => ({
    ...state,
    currentProduct: payload,
  }),
  [productActions.editProduct.start]: (state) => ({
    ...state,
    loading: true,
  }),
  [productActions.editProduct.success]: (state, { payload }) => ({
      ...state,
      succeed: true,
      loading: false,
  }),
  [productActions.editProduct.error]: (state, { payload }) => ({
      ...state,
      error: payload.error.code
  })
});

export default editProductReducer;
