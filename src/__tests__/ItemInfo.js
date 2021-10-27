import ItemInfo from 'pages/ItemInfo';
import { renderWithReduxAndRouter } from 'utils/renderWithReduxAndRouter';

const initialState = {
  productItem: {
    product: {
      id: 12,
      price: 100,
      origin: 'asia',
      isEditable: true,
      name: 'Golden Fish',
    },
  },
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 12 }),
}));

describe('ItemInfo page', () => {
  const { getByTestId, getByRole, queryByRole } = renderWithReduxAndRouter(
    <ItemInfo />, { initialState },
  );
  it('check product details', () => {
    expect(getByRole('heading')).toHaveTextContent('Golden Fish');
    expect(getByTestId('item-origin')).toHaveTextContent('Origin: Asia');
    expect(getByTestId('item-price')).toHaveTextContent('Price: $ 100');
    expect(
      queryByRole('button', { name: 'Add to cart' }),
    ).not.toBeInTheDocument();
  });
});
