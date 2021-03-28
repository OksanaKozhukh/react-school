import { call, put } from "redux-saga/effects";

import { productActions } from "bus/product/actions";
import { fetchOrigins } from 'bus/product/saga/apiRequests';

export function* fetchOriginsWorker() {
  yield put(productActions.fetchOrigins.start());
  try {
    const data = yield call(fetchOrigins);
    yield put(productActions.fetchOrigins.success(data));
  } catch (err) {
    yield put(productActions.fetchOrigins.error(err));
  }
}
