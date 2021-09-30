import { call, put } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { DataOrigins } from 'interfaces';
import { productActions } from 'bus/product/actions';
import { fetchOrigins } from 'bus/product/saga/apiRequests';

export function* fetchOriginsWorker(): SagaIterator {
  yield put(productActions.fetchOrigins.start());
  try {
    const data: DataOrigins = yield call(fetchOrigins);
    yield put(productActions.fetchOrigins.success(data));
  } catch (err) {
    yield put(productActions.fetchOrigins.error(err));
  }
}
