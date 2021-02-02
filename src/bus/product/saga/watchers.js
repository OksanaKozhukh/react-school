import { takeEvery } from "redux-saga/effects";

import { productActions } from "../actions";
import { fetchProductListWorker, fetchProductItemWorker } from "./workers";

export function* productWatcher() {
  yield takeEvery(
    [productActions.fetchProductList.request],
    fetchProductListWorker
  );
  yield takeEvery(
    [productActions.fetchProductItem.request],
    fetchProductItemWorker
  );
}
