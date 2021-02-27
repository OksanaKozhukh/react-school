import axios from "axios";
import { call, put } from "redux-saga/effects";

import { API, apiKey } from "constants/index";
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
  try {
    const { product, id } = payload;
    yield call(() => editProductRequest(product, id));
    yield put(productActions.editProduct.success());
    yield put(productActions.fetchProductList.request());
  } catch (err) {
    yield put(productActions.editProduct.error(err));
  }
}
