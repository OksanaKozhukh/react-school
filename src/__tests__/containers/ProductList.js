import ProductList from 'pages/ProductsList';
import { renderWithReduxAndRouter } from 'utils/renderWithReduxAndRouter';

const list = [
  {
    id: '12',
    price: 100,
    origin: 'asia',
    isEditable: true,
    name: 'Golden Fish',
  },
  {
    id: '10',
    price: 200,
    origin: 'usa',
    isEditable: false,
    name: 'Black Cat',
  },
];

describe('ProductList page', () => {
  it('should render MainLoader on the page when loading is true', async () => {
    const { getByTestId } = renderWithReduxAndRouter(<ProductList />, {
      initialState: { productList: { loading: true } },
    });
    const loader = getByTestId('main-loader');
    expect(loader).toBeInTheDocument();
  });

  it('should render product list on the page', async () => {
    const { findAllByTestId } = renderWithReduxAndRouter(<ProductList />, {
      initialState: { productList: { products: list } },
    });
    const items = await findAllByTestId('product-item');
    expect(items).toHaveLength(2);
  });

  it('should render empty text if product list is empty', () => {
    const { getByText } = renderWithReduxAndRouter(<ProductList />, {
      initialState: { productList: { products: [] } },
    });
    const emptyText =
      'Your product list is empty. Please, tap + Add above to add new product';
    expect(getByText(emptyText)).toBeInTheDocument();
  });
});
