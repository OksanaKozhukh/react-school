import get from 'lodash/get';
import { createSelector } from '@reduxjs/toolkit';

import { AppState } from 'rootReducer';

const selectModalState = (state: AppState) => state.modals;

export const selectModalName = createSelector(selectModalState, (state) =>
  get(state, 'name'),
);

export const selectIsModalOpened = createSelector(selectModalState, (state) =>
  get(state, 'opened'),
);
