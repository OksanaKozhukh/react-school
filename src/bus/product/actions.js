import { createAction } from "@reduxjs/toolkit";

const actionType = "PRODUCT";

export const productActions = {
  fetchProductList: {
    request: createAction(`${actionType}/FETCH_PRODUCT_LIST_REQUEST`),
    start: createAction(`${actionType}/FETCH_PRODUCT_LIST_START`),
    success: createAction(`${actionType}/FETCH_PRODUCT_LIST_SUCCESS`),
    error: createAction(`${actionType}/FETCH_PRODUCT_LIST_ERROR`),
  },
  fetchProductItem: {
    request: createAction(`${actionType}/FETCH_PRODUCT_ITEM_REQUEST`),
    start: createAction(`${actionType}/FETCH_PRODUCT_ITEM_START`),
    success: createAction(`${actionType}/FETCH_PRODUCT_ITEM_SUCCESS`),
    error: createAction(`${actionType}/FETCH_PRODUCT_ITEM_ERROR`),
  },
  filterProductList: {
    request: createAction(`${actionType}/FILTER_PRODUCT_LIST_REQUEST`),
    start: createAction(`${actionType}/FILTER_PRODUCT_LIST_START`),
    success: createAction(`${actionType}/FILTER_PRODUCT_LIST_SUCCESS`),
    error: createAction(`${actionType}/FILTER_PRODUCT_LIST_ERROR`),
  },
  filterMyProductList: {
    request: createAction(`${actionType}/FILTER_MY_PRODUCT_LIST_REQUEST`),
    start: createAction(`${actionType}/FILTER_MY_PRODUCT_LIST_START`),
    success: createAction(`${actionType}/FILTER_MY_PRODUCT_LIST_SUCCESS`),
    error: createAction(`${actionType}/FILTER_MY_PRODUCT_LIST_ERROR`),
  },
  filterOptions: createAction(`${actionType}/FILTER_OPTIONS`),
  fetchOrigins: {
    request: createAction(`${actionType}/FETCH_ORIGINS_REQUEST`),
    start: createAction(`${actionType}/FETCH_ORIGINS_START`),
    success: createAction(`${actionType}/FETCH_ORIGINS_SUCCESS`),
    error: createAction(`${actionType}/FETCH_ORIGINS_ERROR`),
  },
  addNewProduct: {
    request: createAction(`${actionType}/ADD_NEW_PRODUCT_REQUEST`),
    start: createAction(`${actionType}/ADD_NEW_PRODUCT_START`),
    success: createAction(`${actionType}/ADD_NEW_PRODUCT_SUCCESS`),
    error: createAction(`${actionType}/ADD_NEW_PRODUCT_ERROR`),
  },
  editProduct: {
    request: createAction(`${actionType}/EDIT_PRODUCT_REQUEST`),
    start: createAction(`${actionType}/EDIT_PRODUCT_START`),
    success: createAction(`${actionType}/EDIT_PRODUCT_SUCCESS`),
    error: createAction(`${actionType}/EDIT_PRODUCT_ERROR`),
  },
  deleteProduct: {
    request: createAction(`${actionType}/DELETE_PRODUCT_REQUEST`),
    start: createAction(`${actionType}/DELETE_PRODUCT_START`),
    success: createAction(`${actionType}/DELETE_PRODUCT_SUCCESS`),
    error: createAction(`${actionType}/DELETE_PRODUCT_ERROR`),
  },
  selectProductForEdit: createAction(`${actionType}/SELECT_PRODUCT_FOR_EDIT`),
  selectProductForDelete: createAction(`${actionType}/SELECT_PRODUCT_FOR_DELETE`),
};
