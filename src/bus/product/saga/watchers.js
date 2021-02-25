import { takeLatest } from "redux-saga/effects";

import { productActions } from "../actions";
import {
  fetchOriginsWorker,
  addNewProductWorker,
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
    filterProductListWorker
  );
  yield takeLatest([productActions.fetchOrigins.request], fetchOriginsWorker);
  yield takeLatest([productActions.addNewProduct.request], addNewProductWorker);
}
