import { call, put } from 'redux-saga/effects';

import { toastActions } from 'bus/toast/actions';
import { modalsActions } from 'bus/modals/actions';
import { productActions } from 'bus/product/actions';
import { deleteProduct } from 'bus/product/saga/apiRequests';

export function* deleteProductWorker({ payload }) {
  yield put(productActions.deleteProduct.start());
  try {
    const { id } = payload;
    yield call(() => deleteProduct(id));
    yield put(productActions.deleteProduct.success());

    const message = 'Product has been deleted';
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    yield put(toastActions.showToast({ message }));

    yield put(modalsActions.closeModal());
    yield put(productActions.fetchProductList.request());
  } catch (err) {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    yield put(productActions.deleteProduct.error(err));
  }
}
