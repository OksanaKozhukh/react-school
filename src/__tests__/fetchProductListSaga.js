import { runSaga } from 'redux-saga';

import * as api from 'bus/product/saga/apiRequests';
import { productActions } from 'bus/product/actions';
import { fetchProductListWorker } from 'bus/product/saga/workers';

describe('fetch product list', () => {
  let dispatched;

  beforeEach(() => dispatched = []);

  it('load products and handle them in case of success', async () => {
    const mockData = [
      {
        price: 100,
        origin: 'asia',
        isEditable: false,
        name: 'Golden Fish',
      },
      {
        price: 200,
        origin: 'usa',
        isEditable: false,
        name: 'Black Cat',
      },
    ];
    const requestProductList = jest
      .spyOn(api, 'fetchProductList')
      .mockImplementation(() => Promise.resolve(mockData));
    
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchProductListWorker,
    );

    await new Promise((res) => setTimeout(res, 1000));

    expect(requestProductList).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(
      productActions.fetchProductList.success(mockData),
    );
  });

  it('call api and dispatch error action', async () => {
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
