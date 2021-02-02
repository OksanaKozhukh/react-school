import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "bus/cart/reducers/cart";
import fetchProductListReducer from "bus/product/reduсers/fetchProductList";
import fetchProductItemReducer from "bus/product/reduсers/fetchProductItem";

export const rootReducer = combineReducers({
  cart: cartReducer,
    productList: fetchProductListReducer,
    productItem: fetchProductItemReducer,
  });