import { call, put } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { toastActions } from 'bus/toast/actions';
import { modalsActions } from 'bus/modals/actions';
import { productActions } from 'bus/product/actions';
import { deleteProduct } from 'bus/product/saga/apiRequests';

type DeleteProductPayload = {
  payload: { id: string };
};

export function* deleteProductWorker({
  payload,
}: DeleteProductPayload): SagaIterator {
  yield put(productActions.deleteProduct.start());
  try {
    const { id } = payload;
    yield call(() => deleteProduct(id));
    yield put(productActions.deleteProduct.success());

    const message = 'Product has been deleted';
    yield put(toastActions.showToast({ message }));

    yield put(modalsActions.closeModal());
    yield put(productActions.fetchProductList.request());
  } catch (err) {
    yield put(productActions.deleteProduct.error(err));
  }
}
