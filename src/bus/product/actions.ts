import { createAction } from '@reduxjs/toolkit';
import { createRequestAction } from 'bus/common/createAction';

import {
  IItem,
  IProduct,
  IDataItem,
  IDataList,
  IDataOrigins,
} from 'interfaces';

const actionType = 'PRODUCT';

enum ProductActionName {
  EDIT_PRODUCT = 'EDIT_PRODUCT',
  FETCH_ORIGINS = 'FETCH_ORIGINS',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST',
  FETCH_PRODUCT_ITEM = 'FETCH_PRODUCT_ITEM',
  SELECT_PRODUCT_FOR_EDIT = 'SELECT_PRODUCT_FOR_EDIT',
  SELECT_PRODUCT_FOR_DELETE = 'SELECT_PRODUCT_FOR_DELETE',
}

export const productActions = {
  editProduct: createRequestAction<{ id: string; product: IProduct }, void>(
    actionType,
    `${ProductActionName.EDIT_PRODUCT}`,
  ),
  fetchOrigins: createRequestAction<void, IDataOrigins>(
    actionType,
    `${ProductActionName.FETCH_ORIGINS}`,
  ),
  deleteProduct: createRequestAction<{ id: string }, void>(
    actionType,
    `${ProductActionName.DELETE_PRODUCT}`,
  ),
  addNewProduct: createRequestAction<{ product: IProduct }, void>(
    actionType,
    `${ProductActionName.ADD_NEW_PRODUCT}`,
  ),
  fetchProductList: createRequestAction<void, IDataList>(
    actionType,
    `${ProductActionName.FETCH_PRODUCT_LIST}`,
  ),
  fetchProductItem: createRequestAction<{ id: string }, IDataItem>(
    actionType,
    `${ProductActionName.FETCH_PRODUCT_ITEM}`,
  ),
  selectProductForEdit: createAction<IItem>(
    `${actionType}/${ProductActionName.SELECT_PRODUCT_FOR_EDIT}`,
  ),
  selectProductForDelete: createAction<string>(
    `${actionType}/${ProductActionName.SELECT_PRODUCT_FOR_DELETE}`,
  ),
};
