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
  it('render list in the page', async () => {
    const { findAllByTestId } = renderWithReduxAndRouter(<ProductList />, {
      initialState: { productList: { products: list } },
    });
    const items = await findAllByTestId('product-item');
    expect(items).toHaveLength(2);
  });
});
