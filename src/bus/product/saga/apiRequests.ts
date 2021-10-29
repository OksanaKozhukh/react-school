import axios, { AxiosPromise } from 'axios';

import { BOOK } from 'book';
import { API, apiKey } from 'constants/index';
import { IItem, IList, IOrigin, ProductPayload } from 'interfaces';

export const fetchProductList = (
  params: object,
  pathname: string,
): AxiosPromise<IList> =>
  axios({
    method: 'get',
    url: API.PRODUCT.PRODUCT_LIST,
    params,
    ...(pathname === BOOK.MY_PRODUCT_LIST && {
      headers: {
        Authorization: apiKey,
      },
    }),
  });

export const fetchProductItem = (
  payload: ProductPayload,
): AxiosPromise<IItem> =>
  axios({
    method: 'get',
    url: API.PRODUCT.PRODUCT_ITEM.replace(':id', payload.id),
  });

export const fetchOrigins = (): AxiosPromise<IOrigin[]> =>
  axios({ method: 'get', url: API.PRODUCT.FETCH_ORIGINS });

export const deleteProduct = (payload: ProductPayload) =>
  axios({
    method: 'delete',
    url: API.PRODUCT.PRODUCT_ITEM.replace(':id', payload.id),
    headers: {
      Authorization: apiKey,
    },
  });

export const addNewProduct = (payload: ProductPayload) =>
  axios({
    method: 'post',
    data: payload.product,
    headers: {
      Authorization: apiKey,
    },
    url: API.PRODUCT.PRODUCT_LIST,
  });

export const editProduct = (payload: ProductPayload) =>
  axios({
    method: 'patch',
    data: payload.product,
    headers: {
      Authorization: apiKey,
    },
    url: API.PRODUCT.PRODUCT_ITEM.replace(':id', payload.id),
  });
