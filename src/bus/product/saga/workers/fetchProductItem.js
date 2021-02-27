import axios from "axios";
import { call, put } from "redux-saga/effects";

import { API } from "constants/index";
import { productActions } from "bus/product/actions";

const fetchProductItem = id => {
  return axios({
    method: "get",
    url: API.PRODUCT.PRODUCT_ITEM.replace(':id', id),
  });
};

export function* fetchProductItemWorker({ payload }) {
  try {
    const { id } = payload;
    const data = yield call(() => fetchProductItem(id));
    yield put(productActions.fetchProductItem.success(data));
  } catch (error) {
    yield put(productActions.fetchProductItem.error(error));
  }
}
