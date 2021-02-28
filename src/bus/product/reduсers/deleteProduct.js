import { createReducer } from "@reduxjs/toolkit";

import { productActions } from "bus/product/actions";

const initialState = {
  id: null,
};

const deleteProductReducer = createReducer(initialState, {
  [productActions.selectProductForDelete]: (state, { payload }) => ({
    ...state,
    id: payload,
  }),
});

export default deleteProductReducer;
