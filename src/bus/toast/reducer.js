import { createReducer } from '@reduxjs/toolkit';

import { toastActions } from 'bus/toast/actions';
import { makeToast } from 'bus/toast/helpers/makeToast';

const initialState = {};

const toastReducer = createReducer(initialState, {
  [toastActions.showToast]: (state, { payload }) => {
    const { message } = payload;
    makeToast(message);
  },
});

export default toastReducer;
