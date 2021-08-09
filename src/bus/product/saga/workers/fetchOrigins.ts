import { call, put } from 'redux-saga/effects';

import { productActions } from 'bus/product/actions';
import { fetchOrigins } from 'bus/product/saga/apiRequests';

export function* fetchOriginsWorker() {
  yield put(productActions.fetchOrigins.start());
  try {
    const data = yield call(fetchOrigins);
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    yield put(productActions.fetchOrigins.success(data));
  } catch (err) {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    yield put(productActions.fetchOrigins.error(err));
  }
}
