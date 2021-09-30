import { createAction } from '@reduxjs/toolkit';
import { createRequestAction } from 'bus/common/createAction';

import { DataItem, DataList, DataOrigins, IError, IItem } from 'interfaces';

const actionType = 'PRODUCT';

export const productActions = {
  editProduct: createRequestAction(actionType, 'EDIT_PRODUCT'),
  fetchOrigins: {
    request: createAction('FETCH_PRODUCT_ORIGINS_REQUEST'),
    start: createAction('FETCH_PRODUCT_ORIGINS_START'),
    success: createAction<DataOrigins>('FETCH_PRODUCT_ORIGINS_SUCCESS'),
    error: createAction<IError>('FETCH_PRODUCT_ORIGINS_ERROR'),
  },
  deleteProduct: createRequestAction(actionType, 'DELETE_PRODUCT'),
  addNewProduct: createRequestAction(actionType, 'ADD_NEW_PRODUCT'),
  fetchProductList: {
    request: createAction('FETCH_PRODUCT_LIST_REQUEST'),
    start: createAction('FETCH_PRODUCT_LIST_START'),
    success: createAction<DataList>('FETCH_PRODUCT_LIST_SUCCESS'),
    error: createAction<IError>('FETCH_PRODUCT_LIST_ERROR'),
  },
  fetchProductItem: {
    request: createAction<{ id: string }>('FETCH_PRODUCT_ITEM_REQUEST'),
    start: createAction('FETCH_PRODUCT_ITEM_START'),
    success: createAction<DataItem>('FETCH_PRODUCT_ITEM_SUCCESS'),
    error: createAction<IError>('FETCH_PRODUCT_ITEM_ERROR'),
  },
  selectProductForEdit: createAction<IItem, 'PRODUCT/SELECT_PRODUCT_FOR_EDIT'>(
    `${actionType}/SELECT_PRODUCT_FOR_EDIT`,
  ),
  selectProductForDelete: createAction<
    string,
    'PRODUCT/SELECT_PRODUCT_FOR_DELETE'
  >(`${actionType}/SELECT_PRODUCT_FOR_DELETE`),
};
