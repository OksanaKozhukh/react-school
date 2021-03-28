import { runSaga } from "redux-saga";

import * as api from "bus/product/saga/apiRequests";
import { productActions } from "bus/product/actions";
import { fetchOriginsWorker } from "bus/product/saga/workers/fetchOrigins";

describe("fetch origins saga", () => {
  it("load origins and handle them in case of success", async () => {
    const mockOrigins = [
      { value: "europe", label: "Europe" },
      { value: "usa", label: "Usa" },
      { value: "africa", label: "Africa" },
      { value: "asia", label: "Asia" },
    ];
    const requestOrigins = jest
      .spyOn(api, "fetchOrigins")
      .mockImplementation(() => Promise.resolve(mockOrigins));
    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchOriginsWorker
    );
    expect(requestOrigins).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(
      productActions.fetchOrigins.success(mockOrigins)
    );
  });

  it("call api and dispatch error action", async () => {
    const requestOrigins = jest
      .spyOn(api, "fetchOrigins")
      .mockImplementation(() => Promise.reject());
    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchOriginsWorker
    );
    expect(requestOrigins).toHaveBeenCalledTimes(1);
    expect(dispatched[1]).toEqual(productActions.fetchOrigins.error());
  });
});
