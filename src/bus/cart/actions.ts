import { createAction } from '@reduxjs/toolkit';

import { IItemWithQuantity } from 'interfaces';

const actionType = 'CART';

enum CartActionName {
  ADD_TO_CART = 'ADD_TO_CART',
  INCREASE_ITEM = 'INCREASE_ITEM',
  DECREASE_ITEM = 'DECREASE_ITEM',
  DELETE_FROM_CART = 'DELETE_FROM_CART',
}

export const cartActions = {
  addToCart: createAction<IItemWithQuantity>(
    `${actionType}/${CartActionName.ADD_TO_CART}`,
  ),
  deleteFromCart: createAction<IItemWithQuantity>(
    `${actionType}/${CartActionName.DELETE_FROM_CART}`,
  ),
  increaseItem: createAction<IItemWithQuantity>(
    `${actionType}/${CartActionName.INCREASE_ITEM}`,
  ),
  decreaseItem: createAction<IItemWithQuantity>(
    `${actionType}/${CartActionName.DECREASE_ITEM}`,
  ),
};
