import { takeLatest } from "redux-saga/effects";

import { productActions } from "../actions";
import {
  fetchProductListWorker,
  fetchProductItemWorker,
  filterProductListWorker,
} from "./workers";

export function* productWatcher() {
  yield takeLatest(
    [productActions.fetchProductList.request],
    fetchProductListWorker
  );
  yield takeLatest(
    [productActions.fetchProductItem.request],
    fetchProductItemWorker
  );
  yield takeLatest(
    [productActions.filterProductList.request],
    filterProductListWorker, 
  );
}
