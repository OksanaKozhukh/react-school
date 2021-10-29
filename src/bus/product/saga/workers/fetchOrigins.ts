import { productActions } from 'bus/product/actions';
import { fetchOrigins } from 'bus/product/saga/apiRequests';
import { createReqSaga } from 'bus/product/helpers/reqSaga';

export const fetchOriginsWorker = createReqSaga(
  productActions.fetchOrigins,
  fetchOrigins,
);
