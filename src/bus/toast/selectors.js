import get from "lodash/get";
import { createSelector } from "@reduxjs/toolkit";

const selectToastState = (state) => get(state, "toast");

export const selectIsToastOpened = createSelector(selectToastState, (state) =>
  get(state, "opened")
);