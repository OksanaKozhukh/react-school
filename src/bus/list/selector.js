import get from "lodash/get";
import { createSelector } from "@reduxjs/toolkit";

const selectDefineListState = (state) => get(state, "defineList");

export const selectGeneralList = createSelector(
    [selectDefineListState],
    state=> get(state,'generalList')
)
