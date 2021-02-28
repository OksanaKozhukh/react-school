import { createReducer } from "@reduxjs/toolkit";

import { productActions } from "bus/product/actions";

const initialState = {
  currentProduct: {},
};

const editProductReducer = createReducer(initialState, {
  [productActions.selectProductForEdit]: (state, { payload }) => ({
    ...state,
    currentProduct: payload,
  }),
});

export default editProductReducer;
