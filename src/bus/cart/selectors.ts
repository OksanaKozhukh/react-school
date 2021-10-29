import get from 'lodash/get';
import { createSelector } from '@reduxjs/toolkit';

import { AppState } from 'rootReducer';

const selectcartState = (state: AppState) => state.cart;

export const selectCartProducts = createSelector([selectcartState], (state) =>
  get(state, 'cartProducts'),
);

export const selectTotalPrice = createSelector([selectcartState], (state) =>
  get(state, 'totalPrice'),
);
