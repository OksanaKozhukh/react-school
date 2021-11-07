import CartItem from 'pages/CartItem';
import { renderWithRedux } from 'utils/renderWithRedux';

const product = {
  id: '12',
  price: 100,
  quantity: 2,
  origin: 'asia',
  totalPrice: 200,
  name: 'Gold Fish',
  isEditable: false,
};

describe('CartItem component', () => {
  it('should display correct product details in cart', () => {
    const { getByText, getByTestId } = renderWithRedux(
      <CartItem item={product} />,
    );
    expect(getByText('Gold Fish')).toBeInTheDocument();
    expect(getByTestId('product-quantity')).toHaveTextContent(2);
    expect(getByTestId('product-total-price')).toHaveTextContent(200);
  });
});
