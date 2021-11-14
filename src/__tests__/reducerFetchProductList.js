import { productActions } from 'bus/product/actions';
import { mockedError, mockedProduct } from 'utils/mockedData';
import fetchProductListReducer from 'bus/product/reduсers/fetchProductList';

const initialState = {
  error: null,
  origins: [],
  totalItems: 0,
  loading: false,
  succeed: false,
  products: undefined,
};

describe('fetchProductListReducer', () => {
  it('should return the initial state', () => {
    expect(fetchProductListReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle fetch product list start action', () => {
    expect(
      fetchProductListReducer(
        initialState,
        productActions.fetchProductList.start,
      ),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle fetch product list success action', () => {
    expect(
      fetchProductListReducer(initialState, {
        type: productActions.fetchProductList.success,
        payload: { data: { items: mockedProduct, totalItems: 1 } },
      }),
    ).toEqual({
      ...initialState,
      totalItems: 1,
      succeed: true,
      loading: false,
      products: mockedProduct,
    });
  });

  it('should handle fetch product list error action', () => {
    expect(
      fetchProductListReducer(initialState, {
        type: productActions.fetchProductList.error,
        payload: mockedError,
      }),
    ).toEqual({
      ...initialState,
      error: mockedError,
    });
  });
});
