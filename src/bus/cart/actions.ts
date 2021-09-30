import { createAction } from '@reduxjs/toolkit';

import { IItemWithQuantity } from 'interfaces';

const actionType = 'CART';

export const cartActions = {
  addToCart: createAction<IItemWithQuantity, 'CART/ADD_TO_CART'>(
    `${actionType}/ADD_TO_CART`,
  ),
  deleteFromCart: createAction<string>(`${actionType}/DELETE_FROM_CART`),
  increaseItem: createAction<string>(`${actionType}/INCREASE_ITEM`),
  decreaseItem: createAction<string>(`${actionType}/DECREASE_ITEM`),
};
