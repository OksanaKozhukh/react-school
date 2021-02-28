import { combineReducers } from "@reduxjs/toolkit";

import toastReducer from "bus/toast/reducer";
import modalsReducer from "bus/modals/reducer";
import cartReducer from "bus/cart/reducers/cart";
import defineListReducer from "bus/list/reducer";
import editProductReducer from "bus/product/reduсers/editProduct";
import deleteProductReducer from "bus/product/reduсers/deleteProduct";
import fetchProductListReducer from "bus/product/reduсers/fetchProductList";
import fetchProductItemReducer from "bus/product/reduсers/fetchProductItem";
import filterProductListReducer from "bus/product/reduсers/filterProductList";

export const rootReducer = combineReducers({
  cart: cartReducer,
  toast: toastReducer,
  modals: modalsReducer,
  edit: editProductReducer,
  delete: deleteProductReducer,
  defineList: defineListReducer,
  filter: filterProductListReducer,
  productList: fetchProductListReducer,
  productItem: fetchProductItemReducer,
});
