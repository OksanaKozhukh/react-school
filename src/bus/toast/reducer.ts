import { createReducer } from '@reduxjs/toolkit';

import { toastActions } from 'bus/toast/actions';
import { makeToast } from 'bus/toast/helpers/makeToast';
import { Toast } from 'interfaces';

const initialState = {
  message: '',
} as Toast;

const toastReducer = createReducer(initialState, (builder) => {
  builder.addCase(toastActions.showToast, (state, action) => {
    const { message } = action.payload;
    makeToast(message);
  });
});

export default toastReducer;
