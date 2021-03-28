import { runSaga } from "redux-saga";

import * as api from "bus/product/saga/apiRequests";
import { productActions } from "bus/product/actions";
import { editProductWorker } from "bus/product/saga/workers";

describe("edit product saga", () => {
  let mockProduct, mockId, dispatched;
  beforeEach(() => {
    mockProduct = {
      price: 200,
      origin: "usa",
      isEditable: false,
      name: "Black Cat",
    };
    mockId = 12;
    dispatched = [];
  });
  
  it("call api and dispatch success action", async () => {
    const editProduct = jest
      .spyOn(api, "editProduct")
      .mockImplementation(() => Promise.resolve(mockProduct));
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      editProductWorker,
      { payload: { mockProduct, mockId } }
    );
    expect(editProduct).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(productActions.editProduct.success());
  });

  it("call api and dispatch error action", async () => {
    const editProduct = jest
      .spyOn(api, "editProduct")
      .mockImplementation(() => Promise.reject());
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      editProductWorker,
      { payload: { mockProduct, mockId } }
    );
    expect(editProduct).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(productActions.editProduct.error());
  });
});
