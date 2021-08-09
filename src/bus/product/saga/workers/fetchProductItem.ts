import { call, put } from 'redux-saga/effects';

import { productActions } from 'bus/product/actions';
import { fetchProductItem } from 'bus/product/saga/apiRequests';

export function* fetchProductItemWorker({ payload }) {
  yield put(productActions.fetchProductItem.start());
  try {
    const { id } = payload;
    const data = yield call(() => fetchProductItem(id));
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    yield put(productActions.fetchProductItem.success(data));
  } catch (error) {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    yield put(productActions.fetchProductItem.error(error));
  }
}
