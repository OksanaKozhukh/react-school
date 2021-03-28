import ProductItem from "pages/ProductItem";
import { renderWithReduxAndRouter } from "./renderWithReduxAndRouter";

const productEditable = {
  price: 100,
  origin: "asia",
  isEditable: true,
  name: "Golden Fish",
};

const productNotEditable = {
  price: 200,
  origin: "usa",
  isEditable: false,
  name: "Black Cat",
};

describe("ProducItem component", () => {
  it("check editable product item info", () => {
    const { getByTestId, getByRole, queryByRole } = renderWithReduxAndRouter(
      <ProductItem item={productEditable} />
    );
    expect(getByRole("heading")).toHaveTextContent("Golden Fish");
    expect(getByTestId("item-origin")).toHaveTextContent("Origin: Asia");
    expect(getByTestId("item-price")).toHaveTextContent("Price: $ 100");
    expect(getByRole("button", { name: "Details" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Edit" })).toBeInTheDocument();
    expect(
      queryByRole("button", { name: "Add to cart" })
    ).not.toBeInTheDocument();
    

  });

  it("check not editable product item info", () => {
    const { getByTestId, getByRole, queryByRole } = renderWithReduxAndRouter(
      <ProductItem item={productNotEditable} />
    );
    expect(getByRole("heading")).toHaveTextContent("Black Cat");
    expect(getByTestId("item-origin")).toHaveTextContent("Origin: Usa");
    expect(getByTestId("item-price")).toHaveTextContent("Price: $ 200");
    expect(getByRole("button", { name: "Details" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Add to cart" })).toBeInTheDocument();
    expect(queryByRole("button", { name: "Edit" })).not.toBeInTheDocument();
  });
});
