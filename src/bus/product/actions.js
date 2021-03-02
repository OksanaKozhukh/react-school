import { createAction } from "@reduxjs/toolkit"; 
import { createRequestAction } from 'bus/common/createAction';

const actionType = "PRODUCT";

export const productActions = {
  filterOptions: createAction(`${actionType}/FILTER_OPTIONS`),
  editProduct: createRequestAction(actionType, 'EDIT_PRODUCT'),
  fetchOrigins: createRequestAction(actionType, 'FETCH_ORIGINS'),
  deleteProduct: createRequestAction(actionType, 'DELETE_PRODUCT'),
  addNewProduct: createRequestAction(actionType, 'ADD_NEW_PRODUCT'),
  fetchProductList: createRequestAction(actionType, 'FETCH_PRODUCT_LIST'),
  fetchProductItem: createRequestAction(actionType, 'FETCH_PRODUCT_ITEM'),
  filterProductList: createRequestAction(actionType, 'FILTER_PRODUCT_LIST'),
  selectProductForEdit: createAction(`${actionType}/SELECT_PRODUCT_FOR_EDIT`),
  selectProductForDelete: createAction(`${actionType}/SELECT_PRODUCT_FOR_DELETE`),
};
