import { call, put } from 'redux-saga/effects';

import { IOrigin } from 'interfaces';
import { productActions } from 'bus/product/actions';
import { fetchOrigins } from 'bus/product/saga/apiRequests';

export function* fetchOriginsWorker() {
  yield put(productActions.fetchOrigins.start());
  try {
    const data: IOrigin = yield call(fetchOrigins);
    yield put(productActions.fetchOrigins.success(data));
  } catch (err) {
    yield put(productActions.fetchOrigins.error(err));
  }
}
