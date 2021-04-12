import CartItem from 'pages/CartItem';
import { renderWithRedux } from 'utils/renderWithRedux';

const product = {
  price: 100,
  quantity: 2,
  origin: 'asia',
  isEditable: false,
  name: 'Gold Fish',
  id: '12',
};

describe('CartItem component', () => {
  it('check product in cart', () => {
    const { getByText, getByTestId } = renderWithRedux(
      <CartItem item={product} />,
    );
    expect(getByText('Gold Fish')).toBeInTheDocument();
    expect(getByTestId('product-quantity')).toHaveTextContent(2);
    expect(getByTestId('product-price')).toHaveTextContent(100);
  });
});
