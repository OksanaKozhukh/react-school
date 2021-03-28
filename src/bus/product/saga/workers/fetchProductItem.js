import { call, put } from "redux-saga/effects";

import { productActions } from "bus/product/actions";
import { fetchProductItem } from "bus/product/saga/apiRequests";

export function* fetchProductItemWorker({ payload }) {
  yield put(productActions.fetchProductItem.start());
  try {
    const { id } = payload;
    const data = yield call(() => fetchProductItem(id));
    yield put(productActions.fetchProductItem.success(data));
  } catch (error) {
    yield put(productActions.fetchProductItem.error(error));
  }
}
