import { productActions } from 'bus/product/actions';
import { addNewProduct } from 'bus/product/saga/apiRequests';
import { createReqSaga } from 'bus/product/helpers/reqSaga';

const message = 'Product has been added';

export const addNewProductWorker = createReqSaga(
  productActions.addNewProduct,
  addNewProduct,
  message,
);
