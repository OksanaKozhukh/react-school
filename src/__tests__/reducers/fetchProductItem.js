import { productActions } from 'bus/product/actions';
import { mockedError, mockedProduct } from 'utils/mockedData';
import fetchProductItemReducer from 'bus/product/reduсers/fetchProductItem';

const initialState = {
  product: {},
  error: null,
  loading: false,
  succeed: false,
};

describe('fetchProductItemReducer', () => {
  it('should return the initial state', () => {
    expect(fetchProductItemReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle fetch product item start action', () => {
    expect(
      fetchProductItemReducer(initialState, productActions.fetchProductItem.start),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle fetch product item success action', () => {
    expect(
      fetchProductItemReducer(initialState, {
        type:productActions.fetchProductItem.success, 
        payload: {data: mockedProduct}
      })).toEqual({
      ...initialState,
      succeed: true,
      loading: false,
      product: mockedProduct,
    });
  });

  it('should handle fetch product item error action', () => {
    expect(
      fetchProductItemReducer(initialState, {
        type: productActions.fetchProductItem.error,
        payload: mockedError,
      }),
    ).toEqual({
      ...initialState,
      error: mockedError,
    });
  });
});
