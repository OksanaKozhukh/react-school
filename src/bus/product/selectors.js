import { createSelector } from "@reduxjs/toolkit";
import get from "lodash/get";

// PRODUCT LIST

const selectProductState = (state) => get(state, "productList");

export const selectProductList = createSelector([selectProductState], (state) =>
  get(state, "products")
);

export const selectProductListLoading = createSelector(
  [selectProductState],
  (state) => get(state, "loading")
);

export const selectTotalItems = createSelector(
  [selectProductState],
  (state) => get(state, 'totalItems')
);

// PRODUCT ITEM

const selectProductItemState = (state) => get(state, "productItem");

export const selectProductItem = createSelector(
  [selectProductItemState],
  (state) => get(state, "product")
);

// FILTER

export const selectFilteredState = (state) => get(state, "filter");

export const selectFilteredProductList = createSelector(
  [selectFilteredState],
  (state) => get(state, "filteredList")
);

export const selectFilteredProductListLoading = createSelector(
  [selectFilteredState],
  (state) => get(state, "loading")
);

export const selectFilterOptions = createSelector(
  [selectFilteredState],
  (state) => get(state, "options")
);
