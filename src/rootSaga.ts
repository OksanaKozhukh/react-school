import { all, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { productWatcher } from 'bus/product/saga/watchers';

export function* rootSaga(): SagaIterator {
  yield all([call(productWatcher)]);
}
