import { SagaIterator } from '@redux-saga/core';
import { call, fork, put } from 'redux-saga/effects';

import { ProductPayload } from 'interfaces';
import { toastActions } from 'bus/toast/actions';
import { modalsActions } from 'bus/modals/actions';
import { productActions } from 'bus/product/actions';

export function* apiReqSaga(
  action,
  { start, success, error },
  apiReq,
  message: string,
  isFetchingItem: boolean,
) {
  // console.log(isFetchingItem);
  // yield put(start());
  // try {
  //   yield call(() => apiReq(action.payload));
  //   yield put(success());

  //   yield put(toastActions.showToast({ message }));

  //   yield put(modalsActions.closeModal());
  //   yield put(productActions.fetchProductList.request());
  // } catch (err) {
  //   yield put(error(err));
  // }

  const { payload }: { payload: ProductPayload } = action;
  yield put(start());
  try {
    if (!payload) {
      const data = yield call(apiReq);
      yield put(success(data));
    }
    if (payload) {
      if (isFetchingItem) {
        const data = yield call(() => apiReq(payload));
        yield put(success(data));
      } else {
        yield call(() => apiReq(payload));
        yield put(success());

        yield put(toastActions.showToast({ message }));
        yield put(modalsActions.closeModal());
        yield put(productActions.fetchProductList.request());
      }
    }
  } catch (err) {
    yield put(error(err));
  }
}

export const createReqSaga = (
  { start, success, error },
  apiReq,
  message = '',
  isFetchingItem = false,
) =>
  function* handleReqtSaga(action): SagaIterator {
    yield fork(
      apiReqSaga,
      action,
      { start, success, error },
      apiReq,
      message,
      isFetchingItem,
    );
  };
