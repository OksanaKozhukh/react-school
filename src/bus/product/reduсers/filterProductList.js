import { createReducer } from "@reduxjs/toolkit";

import { productActions } from "bus/product/actions";

const initialState = {
  page: null,
  options: {
    page: 1,
    perPage: 50,
  },
  error: false,
  loading: false,
  succeed: false,
  filteredList: [],
};

const filterProductListReducer = createReducer(initialState, {
  [productActions.filterProductList.start]: (state) => ({
    ...state,
    loading: true,
  }),
  [productActions.filterProductList.success]: (state, { payload }) => ({
    ...state,
    loading: false,
    filteredList: payload.data.items,
  }),
  [productActions.filterProductList.error]: (state, { payload }) => ({
    ...state,
    error: payload.error.code,
  }),
  [productActions.filterOptions]: (state, { payload }) => {
    return {
      ...state,
      options: { ...state.options, ...payload },
    };
  },
});

export default filterProductListReducer;
