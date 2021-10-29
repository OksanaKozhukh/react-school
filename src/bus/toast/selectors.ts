import get from 'lodash/get';
import { createSelector } from '@reduxjs/toolkit';

import { AppState } from 'rootReducer';

const selectToastState = (state: AppState) => state.toast;

export const selectIsToastOpened = createSelector(selectToastState, (state) =>
  get(state, 'opened'),
);
