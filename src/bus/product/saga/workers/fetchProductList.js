import axios from "axios";
import qs from "query-string";
import { call, put, delay } from "redux-saga/effects";

import { BOOK } from "book";
import { API, apiKey } from "constants/index";
import { productActions } from "bus/product/actions";

const fetchProductList = (params, pathname) => {
  return axios({
    method: "get",
    url: API.PRODUCT.PRODUCT_LIST,
    params,
    ...(pathname === BOOK.MY_PRODUCT_LIST && {
      headers: {
        Authorization: apiKey,
      },
    }),
  });
};

export function* fetchProductListWorker() {
  const queryParams = qs.parse(window.location.search.substr(1));
  if (queryParams) yield delay(1000);

  const pathname = window.location.pathname;
  const defaultParams = {
    page: 1,
    perPage: 50,
    ...(pathname === BOOK.MY_PRODUCT_LIST && { editable: true }),
  };

  yield put(productActions.fetchProductList.start());

  try {
    const params = { ...defaultParams, ...queryParams };
    const data = yield call(() => fetchProductList(params, pathname));
    yield put(productActions.fetchProductList.success(data));
  } catch (error) {
    yield put(productActions.fetchProductList.error(error));
  }
}
