import { productActions } from 'bus/product/actions';
import { deleteProduct } from 'bus/product/saga/apiRequests';
import { createReqSaga } from 'bus/product/helpers/reqSaga';

const message = 'Product has been deleted';

export const deleteProductWorker = createReqSaga(
  productActions.deleteProduct,
  deleteProduct,
  message,
);
