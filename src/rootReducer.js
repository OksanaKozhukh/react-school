import { combineReducers } from "@reduxjs/toolkit";

import toastReducer from "bus/toast/reducer";
import modalsReducer from "bus/modals/reducer";
import cartReducer from "bus/cart/reducers/cart";
import editProductReducer from "bus/product/reduсers/editProduct";
import deleteProductReducer from "bus/product/reduсers/deleteProduct";
import addNewProductReducer from "bus/product/reduсers/addNewProduct";
import fetchProductListReducer from "bus/product/reduсers/fetchProductList";
import fetchProductItemReducer from "bus/product/reduсers/fetchProductItem";

export const rootReducer = combineReducers({
  cart: cartReducer,
  toast: toastReducer,
  modals: modalsReducer,
  edit: editProductReducer,
  add: addNewProductReducer,
  delete: deleteProductReducer,
  productList: fetchProductListReducer,
  productItem: fetchProductItemReducer,
});
