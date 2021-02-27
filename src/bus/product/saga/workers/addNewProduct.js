import axios from "axios";
import { call, put } from "redux-saga/effects";

import { API, apiKey } from "constants/index";
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
  try {
    const { product } = payload;
    yield call(() => addNewProductRequest(product));
    yield put(productActions.addNewProduct.success());
    yield put(productActions.fetchProductList.request());
  } catch (err) {
    yield put(productActions.addNewProduct.error(err));
  }
}
