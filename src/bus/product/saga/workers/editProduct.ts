import { productActions } from 'bus/product/actions';
import { editProduct } from 'bus/product/saga/apiRequests';
import { createReqSaga } from 'bus/product/helpers/reqSaga';

const message = 'Product has been edited';

export const editProductWorker = createReqSaga(
  productActions.editProduct,
  editProduct,
  message,
);
