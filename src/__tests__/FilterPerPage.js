import { fireEvent } from "@testing-library/react";

import { renderWithRedux } from "utils/renderWithRedux";
import FilterPerPage from "containers/Filters/FilterPerPage";

jest.mock("react-select", () => ({ options, value, onChange }) => {
  function handleChange(event) {
    const option = options.find(
      (option) => option.value === event.currentTarget.value
    );
    onChange(option);
  }

  return (
    <select data-testid="select" value={value} onChange={handleChange}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});

describe("FilterPerPage container", () => {
  let getByDisplayValue, getByTestId, queryByDisplayValue, page;

  beforeEach(() => {
    ({ getByDisplayValue, getByTestId, queryByDisplayValue } = renderWithRedux(
      <FilterPerPage />
    ));
    page = getByTestId("select");
  });

  it("select 10 per page", () => {
    fireEvent.change(page, {
      target: { value: "10" },
    });
    expect(getByDisplayValue("10")).toBeInTheDocument();
  });

  it("change from 10 to 25 per page", () => {
    fireEvent.change(page, {
      target: { value: "10" },
    });
    fireEvent.change(page, {
      target: { value: "25" },
    });
    expect(queryByDisplayValue("10")).not.toBeInTheDocument();
    expect(getByDisplayValue("25")).toBeInTheDocument();
  });
});
