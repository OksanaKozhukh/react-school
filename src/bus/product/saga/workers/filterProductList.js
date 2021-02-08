import axios from "axios";
import { call, put, select } from "redux-saga/effects";

import { API } from "constants/index";
import { productActions } from "bus/product/actions";
import { selectFilterOptions } from "bus/product/selectors";

const fetchFilterList = (params) => {
  return axios({
    method: "get",
    url: API.PRODUCT.FETCH_PRODUCT_LIST,
    params,
  });
};

export function* filterProductListWorker() {
  try {
    const params = yield select(selectFilterOptions);
    const data = yield call(() => fetchFilterList(params));
    yield put(productActions.filterProductList.success(data));
  } catch (error) {
    yield put(productActions.filterProductList.error(error));
  }
}
