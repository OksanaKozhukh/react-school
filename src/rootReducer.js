import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "bus/cart/reducers/cart";
import fetchProductListReducer from "bus/product/reduсers/fetchProductList";
import fetchProductItemReducer from "bus/product/reduсers/fetchProductItem";
import filterProductListReducer from "bus/product/reduсers/filterProductList";

export const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterProductListReducer,
  productList: fetchProductListReducer,
  productItem: fetchProductItemReducer,
});
