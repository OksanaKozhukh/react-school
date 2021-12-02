import { createReducer } from '@reduxjs/toolkit';

import { IModalState } from 'interfaces';
import { modalsActions } from 'bus/modals/actions';

const initialState = {
  name: '',
  opened: false,
} as IModalState;

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
