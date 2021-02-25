import axios from "axios";
import { call, put } from "redux-saga/effects";

import { API } from "constants/index";
import { productActions } from "bus/product/actions";

const fetchOrigins = () =>
  axios({ method: "get", url: API.PRODUCT.FETCH_ORIGINS });

export function* fetchOriginsWorker() {
  try {
    const data = yield call(fetchOrigins);
    yield put(productActions.fetchOrigins.success(data));
  } catch (err) {
    yield put(productActions.fetchOrigins.error(err));
  }
}
