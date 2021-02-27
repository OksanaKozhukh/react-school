import axios from "axios";
import { call, put, select } from "redux-saga/effects";

import { API, apiKey } from "constants/index";
import { productActions } from "bus/product/actions";
import { selectGeneralList } from "bus/list/selector";

const fetchProductList = (isGeneral) => {
  return axios({
    method: "get",
    url:API.PRODUCT.FETCH_PRODUCT_LIST,
    ...(!isGeneral && { params: {
      editable:true
    }}),
    ...(!isGeneral && {
      headers: {
        Authorization: apiKey,
      },
    }),
  });
};

export function* fetchProductListWorker() {
  try {
    const isGeneralList = yield select(selectGeneralList);
    const data = yield call(() => fetchProductList(isGeneralList));
    yield put(productActions.fetchProductList.success(data));
  } catch (error) {
    yield put(productActions.fetchProductList.error(error));
  }
}
