import ItemInfo from "pages/ItemInfo";
import { renderWithReduxAndRouter } from "./renderWithReduxAndRouter";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({id: 12}),
}));

describe("ItemInfo page", () => {
  const { getByTestId, getByRole, queryByRole } = renderWithReduxAndRouter(
    <ItemInfo />,
    {
      initialState: {
        productItem: {
          product: {
            price: 100,
            origin: "asia",
            isEditable: true,
            name: "Golden Fish",
            id: 12,
          },
        },
      },
    }
  );
  it("check product details", () => {
    expect(getByRole("heading")).toHaveTextContent("Golden Fish");
    expect(getByTestId("item-origin")).toHaveTextContent("Origin: asia");
    expect(getByTestId("item-price")).toHaveTextContent("Price: $ 100");
    expect(
      queryByRole("button", { name: "Add to cart" })
    ).not.toBeInTheDocument();
  });
});
