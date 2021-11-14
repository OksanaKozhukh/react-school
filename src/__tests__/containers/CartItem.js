import CartItem from 'pages/CartItem';
import { renderWithRedux } from 'utils/renderWithRedux';

import { mockedProductItemModified } from 'utils/mockedData';

describe('CartItem component', () => {
  it('should display correct product details in cart', () => {
    const { getByText, getByTestId } = renderWithRedux(
      <CartItem item={mockedProductItemModified} />,
    );
    expect(getByText(mockedProductItemModified.name)).toBeInTheDocument();
    expect(getByTestId('product-quantity')).toHaveTextContent(mockedProductItemModified.quantity);
    expect(getByTestId('product-total-price')).toHaveTextContent(mockedProductItemModified.totalPrice);
  });
});
