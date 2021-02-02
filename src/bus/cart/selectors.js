import get from "lodash/get";
import { createSelector } from "@reduxjs/toolkit";

const selectcartState = state => get(state,'cart');

export const selectCartProducts = createSelector(
    [selectcartState],
    state => get(state, 'cartProducts')
);
