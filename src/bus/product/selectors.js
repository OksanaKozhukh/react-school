import get from 'lodash/get';
import { createSelector } from '@reduxjs/toolkit';

// PRODUCT LIST

const selectProductState = (state) => get(state, 'productList');

export const selectProductList = createSelector([selectProductState], (state) =>
  get(state, 'products'),
);

export const selectProductListLoading = createSelector(
  [selectProductState],
  (state) => get(state, 'loading'),
);

export const selectTotalItems = createSelector([selectProductState], (state) =>
  get(state, 'totalItems'),
);

// PRODUCT ITEM

const selectProductItemState = (state) => get(state, 'productItem');

export const selectProductItem = createSelector(
  [selectProductItemState],
  (state) => get(state, 'product'),
);

// ORIGINS

export const selectOrigins = createSelector(selectProductState, (state) =>
  get(state, 'origins'),
);

// ADD

const selectAddState = (state) => get(state, 'add');

export const selectAddStateLoading = createSelector([selectAddState], (state) =>
  get(state, 'loading'),
);
// EDIT

const selectEditState = (state) => get(state, 'edit');

export const selectCurrentProduct = createSelector([selectEditState], (state) =>
  get(state, 'currentProduct'),
);

export const selectEditStateLoading = createSelector(
  [selectEditState],
  (state) => get(state, 'loading'),
);

// DELETE

const selectDeleteState = (state) => get(state, 'delete');

export const selectProductId = createSelector([selectDeleteState], (state) =>
  get(state, 'id'),
);

export const selectDeleteStateLoading = createSelector(
  [selectDeleteState],
  (state) => get(state, 'loading'),
);
