import axios from "axios";

import { BOOK } from "book";
import { API, apiKey } from "constants/index";

export const fetchProductList = (params, pathname) => {
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

export const fetchProductItem = (id) => {
  return axios({
    method: "get",
    url: API.PRODUCT.PRODUCT_ITEM.replace(":id", id),
  });
};

export const fetchOrigins = () =>
  axios({ method: "get", url: API.PRODUCT.FETCH_ORIGINS });

export const deleteProduct = (id) =>
  axios({
    method: "delete",
    url: API.PRODUCT.PRODUCT_ITEM.replace(":id", id),
    headers: {
      Authorization: apiKey,
    },
  });

export const addNewProduct = (product) =>
  axios({
    method: "post",
    data: { product },
    headers: {
      Authorization: apiKey,
    },
    url: API.PRODUCT.PRODUCT_LIST,
  });

export const editProduct = (product, id) =>
  axios({
    method: "patch",
    data: { product },
    headers: {
      Authorization: apiKey,
    },
    url: API.PRODUCT.PRODUCT_ITEM.replace(":id", id),
  });
