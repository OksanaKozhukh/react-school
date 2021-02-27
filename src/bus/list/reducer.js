import { createReducer } from "@reduxjs/toolkit";

import { defineListActions } from "./actions";

const initialState = {
  generalList: false,
};

const defineListReducer = createReducer(initialState, {
  [defineListActions.setGeneralList]: (state) => ({
    ...state,
    generalList: true,
  }),
  [defineListActions.clearGeneralList]: (state) => ({
    ...initialState,
  }),
});

export default defineListReducer;
