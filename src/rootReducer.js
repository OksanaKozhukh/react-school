import { combineReducers } from "@reduxjs/toolkit";

import modalsReducer from "bus/modals/reducer";
import cartReducer from "bus/cart/reducers/cart";
import fetchProductListReducer from "bus/product/reduсers/fetchProductList";
import fetchProductItemReducer from "bus/product/reduсers/fetchProductItem";
import filterProductListReducer from "bus/product/reduсers/filterProductList";

export const rootReducer = combineReducers({
  cart: cartReducer,
  modals: modalsReducer,
  filter: filterProductListReducer,
  productList: fetchProductListReducer,
  productItem: fetchProductItemReducer,
});
