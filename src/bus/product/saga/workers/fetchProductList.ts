/* eslint-disable no-undef */
import qs from 'query-string';
import { call, put, delay } from 'redux-saga/effects';

import { BOOK } from 'book';
import { IList } from 'interfaces';
import { productActions } from 'bus/product/actions';
import { fetchProductList } from 'bus/product/saga/apiRequests';

export function* fetchProductListWorker() {
  const queryParams = qs.parse(window.location.search.substr(1));
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
    const data: IList = yield call(() => fetchProductList(params, pathname));
    yield put(productActions.fetchProductList.success(data));
  } catch (error) {
    yield put(productActions.fetchProductList.error(error));
  }
}