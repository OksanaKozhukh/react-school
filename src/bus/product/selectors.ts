import get from 'lodash/get';
import { createSelector } from '@reduxjs/toolkit';

import { AppState } from 'rootReducer';

// PRODUCT LIST

const selectProductState = (state: AppState) => state.productList;

export const selectProductList = createSelector(selectProductState, (state) =>
  get(state, 'products'),
);

export const selectProductListLoading = createSelector(
  [selectProductState],
  (state) => get(state, 'loading'),
);

export const selectTotalItems = createSelector(selectProductState, (state) =>
  get(state, 'totalItems'),
);

// PRODUCT ITEM

const selectProductItemState = (state: AppState) => state.productItem;

export const selectProductItem = createSelector(
  [selectProductItemState],
  (state) => get(state, 'product'),
);

export const selectProductItemLoading = createSelector(
  [selectProductItemState],
  (state) => get(state, 'loading'),
);

// ORIGINS

export const selectOrigins = createSelector(selectProductState, (state) =>
  get(state, 'origins'),
);

// ADD

const selectAddState = (state: AppState) => state.add;

export const selectAddStateLoading = createSelector([selectAddState], (state) =>
  get(state, 'loading'),
);

// EDIT

const selectEditState = (state: AppState) => state.edit;

export const selectCurrentProduct = createSelector(selectEditState, (state) =>
  get(state, 'currentProduct'),
);

export const selectEditStateLoading = createSelector(selectEditState, (state) =>
  get(state, 'loading'),
);

// DELETE

const selectDeleteState = (state: AppState) => state.delete;

export const selectProductId = createSelector([selectDeleteState], (state) =>
  get(state, 'id'),
);

export const selectDeleteStateLoading = createSelector(
  selectDeleteState,
  (state) => get(state, 'loading'),
);
