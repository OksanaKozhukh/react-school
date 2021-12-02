import get from 'lodash/get';
import { createSelector } from '@reduxjs/toolkit';

import { AppState } from 'rootReducer';

const selectCartState = (state: AppState) => state.cart;

export const selectCartProducts = createSelector([selectCartState], (state) =>
  get(state, 'cartProducts'),
);

export const selectTotalPrice = createSelector([selectCartState], (state) =>
  get(state, 'totalPrice'),
);
