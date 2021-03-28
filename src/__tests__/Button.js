import { fireEvent, render } from "@testing-library/react";

import Button from "components/Button";

describe("Button component", () => {
  let getByRole, btn;
  const handleClick = jest.fn();
  
  beforeEach(
    () => {
      ({ getByRole } = render(
        <Button title="Edit" onClick={handleClick} />
      ));
      btn = getByRole("button", { name: "Edit" });
    }
  );

  it("render button with title", () => {
    expect(btn).toBeInTheDocument();
  });

  it("handle click events", () => {
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });
});
