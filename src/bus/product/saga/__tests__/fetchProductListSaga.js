import { runSaga } from "redux-saga";

import * as api from "bus/product/saga/apiRequests";
import { productActions } from "bus/product/actions";
import { fetchProductListWorker } from "bus/product/saga/workers";

describe("fetch product list", () => {
  it("load products and handle them in case of success", async () => {
    const mockData = [
      {
        price: 100,
        origin: "asia",
        isEditable: false,
        name: "Golden Fish",
      },
      {
        price: 200,
        origin: "usa",
        isEditable: false,
        name: "Black Cat",
      },
    ];
    const mockPath = "/mock-path";
    const mockParams = {
      page: 5,
      perPage: 25,
    };
    const requestProductList = jest
      .spyOn(api, "fetchProductList")
      .mockImplementation(() => Promise.resolve(mockData));
    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchProductListWorker
    );
    expect(requestProductList).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(
      productActions.fetchProductList.success(mockData)
    );
  });
});
