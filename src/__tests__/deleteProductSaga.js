import { runSaga } from "redux-saga";

import * as api from "bus/product/saga/apiRequests";
import { productActions } from "bus/product/actions";
import { deleteProductWorker } from "bus/product/saga/workers";

describe("delete product saga", () => {
  let mockId, dispatched;
  beforeEach(() => {
    mockId = 123;
    dispatched = [];
  });
  
  it("call api and dispatch success action", async () => {
    const deleteProduct = jest
      .spyOn(api, "deleteProduct")
      .mockImplementation(() => Promise.resolve());
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      deleteProductWorker,
      { payload: { mockId } }
    );
    expect(deleteProduct).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(productActions.deleteProduct.success());
  });

  it("call api and dispatch error action", async () => {
    const deleteProduct = jest
      .spyOn(api, "deleteProduct")
      .mockImplementation(() => Promise.reject());
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      deleteProductWorker,
      { payload: { mockId } }
    );
    expect(deleteProduct).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(productActions.deleteProduct.error());
  });
});
