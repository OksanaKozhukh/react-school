import { createSelector } from "@reduxjs/toolkit";
import get from "lodash/get";

const selectProductState = (state) => get(state, "productList");

export const selectProductList = createSelector([selectProductState], (state) =>
  get(state, "products")
);

export const selectProductListLoading = createSelector(
  [selectProductState],
  (state) => get(state, "loading")
);

export const selectSelectedItem = createSelector(
  [selectProductState],
  (state) => get(state, "selectedItem")
);

const selectProductItemState = (state) => get(state, "productItem");

export const selectProductItem = createSelector(
  [selectProductItemState],
  (state) => get(state, "product")
);
