import { createAction } from "@reduxjs/toolkit";

const actionType = "PRODUCT";

export const productActions = {
  fetchProductList: {
    request: createAction(`${actionType}/FETCH_PRODUCT_LIST_START`),
    start: createAction(`${actionType}/FETCH_PRODUCT_LIST_START`),
    success: createAction(`${actionType}/FETCH_PRODUCT_LIST_SUCCESS`),
    error: createAction(`${actionType}/FETCH_PRODUCT_LIST_ERROR`),
  },
  fetchProductItem: {
    request: createAction(`${actionType}/FETCH_PRODUCT_ITEM_START`),
    start: createAction(`${actionType}/FETCH_PRODUCT_ITEM_START`),
    success: createAction(`${actionType}/FETCH_PRODUCT_ITEM_SUCCESS`),
    error: createAction(`${actionType}/FETCH_PRODUCT_ITEM_ERROR`),
  },
};
