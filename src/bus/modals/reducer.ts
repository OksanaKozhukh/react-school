import { createReducer } from '@reduxjs/toolkit';

import { modalsActions } from 'bus/modals/actions';

const initialState = {
  name: '',
  opened: false,
};

const modalsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(modalsActions.openModal, (state, action) => ({
      ...state,
      opened: true,
      name: action.payload,
    }))
    .addCase(modalsActions.closeModal, () => ({ ...initialState }));
});

export default modalsReducer;
