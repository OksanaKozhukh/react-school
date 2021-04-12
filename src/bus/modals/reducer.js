import { createReducer } from '@reduxjs/toolkit';

import { modalsActions } from 'bus/modals/actions';

const initialState = {
  name: null,
  opened: false,
};

const modalsReducer = createReducer(initialState, {
  [modalsActions.openModal]: (state, { payload }) => ({
    ...state,
    opened: true,
    name: payload,
  }),
  [modalsActions.closeModal]: () => ({
    ...initialState,
  }),
});

export default modalsReducer;
