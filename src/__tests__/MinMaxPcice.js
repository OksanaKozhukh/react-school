import userEvent from "@testing-library/user-event";

import { renderWithRedux } from "utils/renderWithRedux";
import MinMaxPcice from "containers/Filters/FilterMinMaxPrice";

describe("MinMaxPcice container", () => {
  let getByDisplayValue, getByPlaceholderText, queryByDisplayValue, min, max;
  
  beforeEach(() => {
    ({
      getByDisplayValue,
      queryByDisplayValue,
      getByPlaceholderText,
    } = renderWithRedux(<MinMaxPcice />));
    min = getByPlaceholderText("Min price");
    max = getByPlaceholderText("Max price");
  });

  it("check placeholders", () => {
    expect(min).toBeInTheDocument();
    expect(max).toBeInTheDocument();
  });

  it("type min price value", () => {
    expect(queryByDisplayValue("100")).not.toBeInTheDocument();
    userEvent.type(min, "100");
    expect(getByDisplayValue("100")).toBeInTheDocument();
  });

  it("type max price value", () => {
    expect(queryByDisplayValue("500")).not.toBeInTheDocument();
    userEvent.type(max, "500");
    expect(getByDisplayValue("500")).toBeInTheDocument();
  });
});
