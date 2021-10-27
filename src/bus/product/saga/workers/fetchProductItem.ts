import { productActions } from 'bus/product/actions';
import { fetchProductItem } from 'bus/product/saga/apiRequests';
import { createReqSaga } from 'bus/product/helpers/reqSaga';

export const fetchProductItemWorker = createReqSaga(
  productActions.fetchProductItem,
  fetchProductItem,
  '',
  true,
);
