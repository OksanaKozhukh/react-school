import { call, put } from 'redux-saga/effects';

import { toastActions } from 'bus/toast/actions';
import { modalsActions } from 'bus/modals/actions';
import { productActions } from 'bus/product/actions';
import { addNewProduct } from 'bus/product/saga/apiRequests';

export function* addNewProductWorker({ payload }) {
  yield put(productActions.addNewProduct.start());
  try {
    const { product } = payload;
    yield call(() => addNewProduct(product));
    yield put(productActions.addNewProduct.success());

    const message = 'Product has been added';
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    yield put(toastActions.showToast({ message }));

    yield put(modalsActions.closeModal());
    yield put(productActions.fetchProductList.request());
  } catch (err) {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    yield put(productActions.addNewProduct.error(err));
  }
}
