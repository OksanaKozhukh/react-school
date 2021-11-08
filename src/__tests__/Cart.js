import userEvent from '@testing-library/user-event';

import Cart from 'pages/Cart';
import { renderWithReduxAndRouter } from 'utils/renderWithReduxAndRouter';

const initialState = {
  cart: {
    cartProducts: [
      {
        price: 100,
        quantity: 3,
        origin: 'asia',
        isEditable: false,
        name: 'Gold Fish',
        id: '12',
      },
    ],
    totalPrice: 300,
  },
};

describe('Cart page', () => {
  let total;
  let plusBtn;
  let minusBtn;
  let deleteBtn;
  let getByTestId;
  let queryByText;
  let productQuantity;

  beforeEach(() => {
    ({ getByTestId, queryByText } = renderWithReduxAndRouter(<Cart />, {
      initialState
    }));
    plusBtn = getByTestId('plus-button');
    minusBtn = getByTestId('minus-button');
    total = getByTestId('cart-total-price');
    deleteBtn = getByTestId('delete-button');
    productQuantity = getByTestId('product-quantity');
  });

  it('should increment product quantity', () => {
    expect(productQuantity).toHaveTextContent(3);
    userEvent.click(plusBtn);
    expect(productQuantity).toHaveTextContent(4);
  });

  it('should decrement product quantity', () => {
    expect(productQuantity).toHaveTextContent(3);
    userEvent.click(minusBtn);
    expect(productQuantity).toHaveTextContent(2);
  });

  it('should delete product from cart', () => {
    userEvent.click(deleteBtn);
    expect(queryByText('Generic Steel Fish')).not.toBeInTheDocument();
  });

  it('should display initial total price', () => {
    expect(total).toHaveTextContent('Total price: 300 $');
  });

  it('should display total price after increment product quantity', () => {
    expect(productQuantity).toHaveTextContent(3);
    userEvent.click(plusBtn);
    expect(total).toHaveTextContent('Total price: 400 $');
  });

  it('should display total price after decrement product quantity', () => {
    expect(productQuantity).toHaveTextContent(3);
    userEvent.click(minusBtn);
    expect(productQuantity).toHaveTextContent(2);
    expect(total).toHaveTextContent('Total price: 200 $');
  });
});
