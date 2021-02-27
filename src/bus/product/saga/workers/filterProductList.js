import axios from "axios";
import { call, put, select } from "redux-saga/effects";

import { API, apiKey } from "constants/index";
import { productActions } from "bus/product/actions";
import { selectGeneralList } from "bus/list/selector";
import { selectFilterOptions } from "bus/product/selectors";

const fetchFilterList = (params, isGeneral) => {
  return axios({
    method: "get",
    url: API.PRODUCT.PRODUCT_LIST,
    params,
    ...(!isGeneral && {
      headers: {
        Authorization: apiKey,
      },
    }),
  });
};

export function* filterProductListWorker() {
  try {
    const isGenaralList = yield select(selectGeneralList);
    const paramsFilter = yield select(selectFilterOptions);
    const params = {
      ...paramsFilter,
      ...(!isGenaralList && { editable: true }),
    };
    const data = yield call(() => fetchFilterList(params, isGenaralList));
    yield put(productActions.filterProductList.success(data));
  } catch (error) {
    yield put(productActions.filterProductList.error(error));
  }
}
