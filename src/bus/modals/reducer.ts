import { createReducer } from '@reduxjs/toolkit';

import { ModalState } from 'interfaces';
import { modalsActions } from 'bus/modals/actions';

const initialState = {
  name: '',
  opened: false,
} as ModalState;

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
