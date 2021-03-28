import { call, put } from "redux-saga/effects";

import { toastActions } from "bus/toast/actions";
import { modalsActions } from "bus/modals/actions";
import { productActions } from "bus/product/actions";
import { editProduct } from "bus/product/saga/apiRequests";

export function* editProductWorker({ payload }) {
  yield put(productActions.editProduct.start());
  try {
    const { product, id } = payload;
    yield call(() => editProduct(product, id));
    yield put(productActions.editProduct.success());

    const message = "Product has been edited";
    yield put(toastActions.showToast({ message }));
    
    yield put(modalsActions.closeModal());
    yield put(productActions.fetchProductList.request());
  } catch (err) {
    yield put(productActions.editProduct.error(err));
  }
}
