import { createReducer } from "@reduxjs/toolkit";

import { productActions } from "bus/product/actions";

const initialState = {
  error: false,
  loading: false,
  succeed: false,
};

const addNewProductReducer = createReducer(initialState, {
  [productActions.addNewProduct.start]: (state) => ({
    ...state,
    loading: true,
  }),
  [productActions.addNewProduct.success]: (state, { payload }) => ({
      ...state,
      succeed: true,
      loading: false,
  }),
  [productActions.addNewProduct.error]: (state, { payload }) => ({
      ...state,
      error: payload.error.code
  })
});

export default addNewProductReducer;
