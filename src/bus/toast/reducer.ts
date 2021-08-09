import { createReducer } from '@reduxjs/toolkit';

import { toastActions } from 'bus/toast/actions';
import { makeToast } from 'bus/toast/helpers/makeToast';

const initialState = {};

const toastReducer = createReducer(initialState, {
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [toastActions.showToast]: (state, { payload }) => {
    const { message } = payload;
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    makeToast(message);
  },
});

export default toastReducer;
