import { all, call } from 'redux-saga/effects';

import { productWatcher } from 'bus/product/saga/watchers';

export function* rootSaga() {
  yield all([call(productWatcher)]);
}
