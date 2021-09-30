import axios, { AxiosPromise } from 'axios';

import { BOOK } from 'book';
import { IItem, IList, IOriginList, IProductState } from 'interfaces';
import { API, apiKey } from 'constants/index';

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

export const fetchProductItem = (id: string): AxiosPromise<IItem> =>
  axios({
    method: 'get',
    url: API.PRODUCT.PRODUCT_ITEM.replace(':id', id),
  });

export const fetchOrigins = (): AxiosPromise<IOriginList> =>
  axios({ method: 'get', url: API.PRODUCT.FETCH_ORIGINS });

export const deleteProduct = (id: string) =>
  axios({
    method: 'delete',
    url: API.PRODUCT.PRODUCT_ITEM.replace(':id', id),
    headers: {
      Authorization: apiKey,
    },
  });

export const addNewProduct = (product: IProductState) =>
  axios({
    method: 'post',
    data: { product },
    headers: {
      Authorization: apiKey,
    },
    url: API.PRODUCT.PRODUCT_LIST,
  });

export const editProduct = (product: IProductState, id: string) =>
  axios({
    method: 'patch',
    data: { product },
    headers: {
      Authorization: apiKey,
    },
    url: API.PRODUCT.PRODUCT_ITEM.replace(':id', id),
  });
