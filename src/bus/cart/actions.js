import { createAction } from "@reduxjs/toolkit";

const actionType = "CART";

export const cartActions = {
    addToCart: createAction(`${actionType}/ADD_TO_CART`)
}