import { createReducer } from "@reduxjs/toolkit";

import { productActions } from "bus/product/actions";

const initialState = {
  id: null,
  error: false,
  loading: false,
  succeed: false,
};

const deleteProductReducer = createReducer(initialState, {
  [productActions.selectProductForDelete]: (state, { payload }) => ({
    ...state,
    id: payload,
  }),
  [productActions.deleteProduct.start]: (state) => ({
    ...state,
    loading: true,
  }),
  [productActions.deleteProduct.success]: (state, { payload }) => ({
      ...state,
      succeed: true,
      loading: false,
  }),
  [productActions.deleteProduct.error]: (state, { payload }) => ({
      ...state,
      error: payload.error.code
  })
});

export default deleteProductReducer;
