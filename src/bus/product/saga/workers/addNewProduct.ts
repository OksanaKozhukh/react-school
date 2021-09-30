import { call, put } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { toastActions } from 'bus/toast/actions';
import { modalsActions } from 'bus/modals/actions';
import { productActions } from 'bus/product/actions';
import { addNewProduct } from 'bus/product/saga/apiRequests';

export function* addNewProductWorker({ payload }): SagaIterator {
  yield put(productActions.addNewProduct.start());
  try {
    const { product } = payload;
    yield call(() => addNewProduct(product));
    yield put(productActions.addNewProduct.success());

    const message = 'Product has been added';
    yield put(toastActions.showToast({ message }));

    yield put(modalsActions.closeModal());
    yield put(productActions.fetchProductList.request());
  } catch (err) {
    yield put(productActions.addNewProduct.error(err));
  }
}
