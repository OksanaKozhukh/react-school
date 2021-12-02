/* eslint-disable no-undef */
import { call, put, delay } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { BOOK } from 'book';
import { IDataList } from 'interfaces';
import { productActions } from 'bus/product/actions';
import { getParams } from 'bus/product/helpers/formUrlQuery';
import { fetchProductList } from 'bus/product/saga/apiRequests';

export function* fetchProductListWorker(): SagaIterator {
  const queryParams = getParams();
  if (queryParams) yield delay(1000);

  const { pathname } = window.location;
  const defaultParams = {
    page: 1,
    perPage: 50,
    ...(pathname === BOOK.MY_PRODUCT_LIST && { editable: true }),
  };
  const params = { ...defaultParams, ...queryParams };

  yield put(productActions.fetchProductList.start());

  try {
    const data: IDataList = yield call(() =>
      fetchProductList(params, pathname),
    );
    yield put(productActions.fetchProductList.success(data));
  } catch (error) {
    yield put(productActions.fetchProductList.error(error));
  }
}
