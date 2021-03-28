import { runSaga } from "redux-saga";

import * as api from "bus/product/saga/apiRequests";
import { productActions } from "bus/product/actions";
import { fetchProductItemWorker } from "bus/product/saga/workers";

describe("fetch product item", () => {
  it("load product and handle it in case of success", async () => {
    const mockId = 15;
    const mockProduct = {
      price: 100,
      origin: "asia",
      isEditable: false,
      name: "Golden Fish",
    };
    const requestProduct = jest
      .spyOn(api, "fetchProductItem")
      .mockImplementation(() => Promise.resolve(mockProduct));
    const dispached = [];
    await runSaga(
      {
        dispatch: (action) => dispached.push(action),
      },
      fetchProductItemWorker, 
      { payload: { mockId } }
    );
    
    expect(requestProduct).toHaveBeenCalledTimes(1);
    expect(dispached[1]).toEqual(
      productActions.fetchProductItem.success(mockProduct)
    );
  });

  it("call api and dispatch error action", async () => {
    const mockId = 15;
    const requestProduct = jest
      .spyOn(api, "fetchProductItem")
      .mockImplementation(() => Promise.reject());
    const dispached = [];
    await runSaga(
      {
        dispatch: (action) => dispached.push(action),
      },
      fetchProductItemWorker, 
      { payload: { mockId } }
    );

    expect(requestProduct).toHaveBeenCalledTimes(1);
    expect(dispached[1]).toEqual(
      productActions.fetchProductItem.error()
    );
  });
});
