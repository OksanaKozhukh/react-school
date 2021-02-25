import axios from "axios";
import { call, put } from "redux-saga/effects";

import { API } from "constants/index";
import { productActions } from "bus/product/actions";

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IkRlbnlzIE1hcnRzeW5pdWsiLCJpYXQiOjE2MTExNzQwNDIsImV4cCI6MTYxNjM1ODA0Mn0.u1pqG4EN1Of-AcPlQbi7oa7bAN5WcRp36jELJzTM24k";

const addNewProductRequest = (product) => {
  console.log("123");
  return axios({
    method: "post",
    data: { product },
    headers: {
      'Authorization': apiKey,
    },
    url: API.PRODUCT.FETCH_PRODUCT_LIST,
  });
};

export function* addNewProductWorker({ payload }) {
  try {
    const { product } = payload;
    yield call(() => addNewProductRequest(product));
    yield put(productActions.addNewProduct.success());
  } catch (err) {
    yield put(productActions.addNewProduct.error(err));
  }
}
