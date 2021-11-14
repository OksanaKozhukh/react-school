import { runSaga } from 'redux-saga';

import * as api from 'bus/product/saga/apiRequests';
import { productActions } from 'bus/product/actions';
import { apiReqSaga } from 'bus/product/helpers/reqSaga';
import {
  addNewProduct,
  fetchProductItem,
} from 'bus/product/saga/apiRequests';

describe('add new product saga', () => {
  let dispatched;
  let mockProduct;

  beforeEach(() => {
    dispatched = [];
    mockProduct = {
      price: 200,
      origin: 'usa',
      name: 'Black Cat',
    };
  });

  it('should call api and dispatch success action for add new product', async () => {
    const addProduct = jest
      .spyOn(api, 'addNewProduct')
      .mockImplementation(() => Promise.resolve(mockProduct));
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      apiReqSaga,
      { payload: { product: mockProduct } },
      productActions.addNewProduct,
      addNewProduct,
      { message: 'Product has been added' },
      { isFetchingItem: false },
    );
    expect(addProduct).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(
      productActions.addNewProduct.success(mockProduct),
    );
  });

  it('should call api and dispatch error action for add new product', async () => {
    const addProduct = jest
      .spyOn(api, 'addNewProduct')
      .mockImplementation(() => Promise.reject());
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      apiReqSaga,
      { payload: { mockProduct } },
      productActions.addNewProduct,
      addNewProduct,
      { isFetchingItem: false },
    );
    expect(addProduct).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(productActions.addNewProduct.error());
  });

  it('should call api and dispatch success action for fetch item', async () => {
    const fetchItem = jest
      .spyOn(api, 'fetchProductItem')
      .mockImplementation(() => Promise.resolve(mockProduct));
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      apiReqSaga,
      { payload: {id: '12'} },
      productActions.fetchProductItem,
      fetchProductItem,
      { isFetchingItem: true },
    );
    expect(fetchItem).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(productActions.fetchProductItem.success());
  });

  it('should call api and dispatch error action for fetch item', async () => {
    const fetchItem = jest
      .spyOn(api, 'fetchProductItem')
      .mockImplementation(() => Promise.reject());
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      apiReqSaga,
      { payload: {id: '12'} },
      productActions.fetchProductItem,
      fetchProductItem,
      { isFetchingItem: true },
    );
    expect(fetchItem).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(productActions.fetchProductItem.error());
  });
});

