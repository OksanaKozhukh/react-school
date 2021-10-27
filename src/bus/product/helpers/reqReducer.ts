import { createReducer } from '@reduxjs/toolkit';

export const reqReducer = (initialState, reqAction) =>
  createReducer(initialState, (builder) => {
    builder
      .addCase(reqAction.start, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(reqAction.success, (state) => ({
        ...state,
        succeed: true,
        loading: false,
      }))
      .addCase(reqAction.error, (state, action) => ({
        ...state,
        error: action.payload,
      }));
  });
