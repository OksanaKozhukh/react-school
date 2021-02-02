import axios from "axios";
import { call, put } from "redux-saga/effects";

import { API } from "constants/index";
import { productActions } from "bus/product/actions";

const fetchProductList = () => {
  return axios({
    method: "get",
    url: API.PRODUCT.FETCH_PRODUCT_LIST,
  });
};

export function* fetchProductListWorker() {
  try {
    const data = yield call(fetchProductList);
    yield put(productActions.fetchProductList.success(data));
  } catch (error) {
    yield put(productActions.fetchProductList.error(error));
  }
}
