import { runSaga } from 'redux-saga';

import * as api from 'bus/product/saga/apiRequests';
import { mockedProductList }from 'utils/mockedData';
import { productActions } from 'bus/product/actions';
import { fetchProductListWorker } from 'bus/product/saga/workers';

describe('fetch product list', () => {
  let dispatched;

  beforeEach(() => dispatched = []);

  it('should load products and handle them in case of success', async () => {
    const requestProductList = jest
      .spyOn(api, 'fetchProductList')
      .mockImplementation(() => Promise.resolve(mockedProductList));
    
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchProductListWorker,
    );

    await new Promise((res) => setTimeout(res, 1000));

    expect(requestProductList).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(
      productActions.fetchProductList.success(mockedProductList),
    );
  });

  it('should call api and dispatch error action', async () => {
    const requestProduct = jest
      .spyOn(api, 'fetchProductList')
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchProductListWorker,
    );

    await new Promise((res) => setTimeout(res, 1000));

    expect(requestProduct).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(productActions.fetchProductList.error());
  });
});
