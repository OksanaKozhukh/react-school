import axios from "axios";
import { call, put } from "redux-saga/effects";

import { API, apiKey } from "constants/index";
import { toastActions } from "bus/toast/actions";
import { productActions } from "bus/product/actions";

const deleteProductRequest = (id) =>
  axios({
    method: "delete",
    url: API.PRODUCT.PRODUCT_ITEM.replace(":id", id),
    headers: {
      Authorization: apiKey,
    },
  });

export function* deleteProductWorker({ payload }) {
  try {
    const { id } = payload;
    yield call(() => deleteProductRequest(id));
    yield put(productActions.deleteProduct.success());

    const message = "Product has been deleted";
    yield put(toastActions.showToast({ message }));

    yield put(productActions.fetchProductList.request());
  } catch (err) {
    yield put(productActions.deleteProduct.error(err));
  }
}
