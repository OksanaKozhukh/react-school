import { createReducer } from '@reduxjs/toolkit';

import { modalsActions } from 'bus/modals/actions';

const initialState = {
  name: null,
  opened: false,
};

const modalsReducer = createReducer(initialState, {
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [modalsActions.openModal]: (state, { payload }) => ({
    ...state,
    opened: true,
    name: payload,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [modalsActions.closeModal]: () => ({
    ...initialState,
  }),
});

export default modalsReducer;
