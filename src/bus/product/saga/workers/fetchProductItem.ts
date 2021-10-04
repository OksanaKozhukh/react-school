import { call, put } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { DataItem } from 'interfaces';
import { productActions } from 'bus/product/actions';
import { fetchProductItem } from 'bus/product/saga/apiRequests';

type ProductItemPayload = {
  payload: { id: string };
};

export function* fetchProductItemWorker({
  payload,
}: ProductItemPayload): SagaIterator {
  yield put(productActions.fetchProductItem.start());
  try {
    const { id } = payload;
    const data: DataItem = yield call(() => fetchProductItem(id));
    yield put(productActions.fetchProductItem.success(data));
  } catch (error) {
    yield put(productActions.fetchProductItem.error(error));
  }
}
