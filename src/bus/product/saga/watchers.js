import { takeLatest } from "redux-saga/effects";

import { productActions } from "../actions";
import {
  editProductWorker,
  fetchOriginsWorker,
  addNewProductWorker,
  deleteProductWorker,
  fetchProductListWorker,
  fetchProductItemWorker,
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
  yield takeLatest([productActions.editProduct.request], editProductWorker);
  yield takeLatest([productActions.fetchOrigins.request], fetchOriginsWorker);
  yield takeLatest([productActions.addNewProduct.request], addNewProductWorker);
  yield takeLatest([productActions.deleteProduct.request], deleteProductWorker);
}
