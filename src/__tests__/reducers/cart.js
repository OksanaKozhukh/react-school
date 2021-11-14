import { cartActions } from 'bus/cart/actions';
import cartReducer from 'bus/cart/reducers/cart';
import { mockedProductCart, mockedCartProductList } from 'utils/mockedData';

const initialState = {
  cartProducts: mockedCartProductList,
  totalPrice: 700,
};

describe('cartReducer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle add to cart action', () => {
    expect(
      cartReducer(initialState, {
        type: cartActions.addToCart,
        payload: mockedProductCart,
      }),
    ).toEqual({
      ...initialState,
      cartProducts: [
        ...initialState.cartProducts,
        {
          ...mockedProductCart,
          quantity: 1,
          totalPrice: mockedProductCart.price,
        },
      ],
      totalPrice: initialState.totalPrice + mockedProductCart.price,
    });
  });

  it('should handle delete from cart', () => {
    expect(
      cartReducer(initialState, {
        type: cartActions.deleteFromCart,
        payload: mockedCartProductList[0],
      }),
    ).toEqual({
      ...initialState,
      cartProducts: [mockedCartProductList[1]],
      totalPrice: initialState.totalPrice - mockedCartProductList[0].totalPrice,
    });
  });

  it('should handle increase item in cart', () => {
    expect(
      cartReducer(initialState, {
        type: cartActions.increaseItem,
        payload: mockedCartProductList[0],
      }),
    ).toEqual({
      ...initialState,
      cartProducts: [
        {
          ...mockedCartProductList[0],
          quantity: mockedCartProductList[0].quantity + 1,
          totalPrice:
            mockedCartProductList[0].totalPrice +
            mockedCartProductList[0].price,
        },
        mockedCartProductList[1],
      ],
      totalPrice: initialState.totalPrice + mockedCartProductList[0].price,
    });
  });

  it('should handle decrease item in cart', () => {
    expect(
      cartReducer(initialState, {
        type: cartActions.decreaseItem,
        payload: mockedCartProductList[1],
      }),
    ).toEqual({
      ...initialState,
      cartProducts: [
        mockedCartProductList[0],
        {
          ...mockedCartProductList[1],
          quantity: mockedCartProductList[1].quantity - 1,
          totalPrice:
            mockedCartProductList[1].totalPrice -
            mockedCartProductList[1].price,
        },
      ],
      totalPrice: initialState.totalPrice - mockedCartProductList[1].price,
    });
  });
});
