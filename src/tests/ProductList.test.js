import ProductList from "pages/ProductsList";
import { renderWithReduxAndRouter } from "./renderWithReduxAndRouter";

const list = [
  {
    price: 100,
    origin: "asia",
    isEditable: true,
    name: "Golden Fish",
    id: "12",
  },
  {
    price: 200,
    origin: "usa",
    isEditable: false,
    name: "Black Cat",
    id: "10",
  },
];

describe("ProductList page", () => {
  it("render list in the page", async () => {
    const { findAllByTestId } = renderWithReduxAndRouter(<ProductList />, {
      initialState: { productList: { products: list } },
    });
    const items = await findAllByTestId("product-item");
    expect(items).toHaveLength(2);
  });
});
