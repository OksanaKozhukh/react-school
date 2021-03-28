import { runSaga } from "redux-saga";

import * as api from "bus/product/saga/apiRequests";
import { productActions } from "bus/product/actions";
import { addNewProductWorker } from "bus/product/saga/workers";

describe("add new product saga", () => {
  let mockProduct, dispatched;
  beforeEach(() => {
    mockProduct = {
      price: 200,
      origin: "usa",
      isEditable: false,
      name: "Black Cat",
    };
    dispatched = [];
  });

  it("call api and dispatch success action", async () => {
    const addProduct = jest
      .spyOn(api, "addNewProduct")
      .mockImplementation(() => Promise.resolve(mockProduct));
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      addNewProductWorker,
      { payload: { mockProduct } }
    );
    expect(addProduct).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(productActions.addNewProduct.success());
  });

  it("call api and dispatch error action", async () => {
    const addProduct = jest
      .spyOn(api, "addNewProduct")
      .mockImplementation(() => Promise.reject());
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      addNewProductWorker,
      { payload: { mockProduct } }
    );
    expect(addProduct).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(productActions.addNewProduct.error());
  });
});
