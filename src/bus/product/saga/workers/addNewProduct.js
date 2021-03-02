import axios from "axios";
import { call, put } from "redux-saga/effects";

import { API, apiKey } from "constants/index";
import { toastActions } from "bus/toast/actions";
import { productActions } from "bus/product/actions";

const addNewProductRequest = (product) =>
  axios({
    method: "post",
    data: { product },
    headers: {
      Authorization: apiKey,
    },
    url: API.PRODUCT.PRODUCT_LIST,
  });

export function* addNewProductWorker({ payload }) {
  yield put(productActions.addNewProduct.start());
  try {
    const { product } = payload;
    yield call(() => addNewProductRequest(product));
    yield put(productActions.addNewProduct.success());

    const message = "Product has been added";
    yield put(toastActions.showToast({ message }));

    yield put(productActions.fetchProductList.request());
  } catch (err) {
    yield put(productActions.addNewProduct.error(err));
  }
}
