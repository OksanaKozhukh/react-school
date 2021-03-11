import axios from "axios";
import { call, put } from "redux-saga/effects";

import { API, apiKey } from "constants/index";
import { toastActions } from "bus/toast/actions";
import { modalsActions } from "bus/modals/actions";
import { productActions } from "bus/product/actions";

const editProductRequest = (product, id) =>
  axios({
    method: "patch",
    data: { product },
    headers: {
      Authorization: apiKey,
    },
    url: API.PRODUCT.PRODUCT_ITEM.replace(":id", id),
  });

export function* editProductWorker({ payload }) {
  yield put(productActions.editProduct.start());
  try {
    const { product, id } = payload;
    yield call(() => editProductRequest(product, id));
    yield put(productActions.editProduct.success());

    const message = "Product has been edited";
    yield put(toastActions.showToast({ message }));
    
    yield put(modalsActions.closeModal());
    yield put(productActions.fetchProductList.request());
  } catch (err) {
    yield put(productActions.editProduct.error(err));
  }
}
