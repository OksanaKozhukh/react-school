import { createAction } from '@reduxjs/toolkit';

const actionType = 'CART';

export const cartActions = {
  addToCart: createAction(`${actionType}/ADD_TO_CART`),
  deleteFromCart: createAction(`${actionType}/DELETE_FROM_CART`),
  increaseItem: createAction(`${actionType}/INCREASE_ITEM`),
  decreaseItem: createAction(`${actionType}/DECREASE_ITEM`),
};
