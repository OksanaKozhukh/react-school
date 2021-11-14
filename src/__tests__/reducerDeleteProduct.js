import { mockedError } from 'utils/mockedData';
import { productActions } from 'bus/product/actions';
import deleteProductReducer from 'bus/product/reduсers/deleteProduct';

const initialState = {
  id: '',
  error: null,
  loading: false,
  succeed: false,
};

describe('deleteProductReducer', () => {
  it('should return the initial state', () => {
    expect(deleteProductReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle delete product start action', () => {
    expect(
      deleteProductReducer(initialState, productActions.deleteProduct.start),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle delete product success action', () => {
    expect(
      deleteProductReducer(initialState, productActions.deleteProduct.success),
    ).toEqual({
      ...initialState,
      succeed: true,
      loading: false,
    });
  });

  it('should handle delete product error action', () => {
    expect(
      deleteProductReducer(initialState, {
        type: productActions.deleteProduct.error,
        payload: mockedError,
      }),
    ).toEqual({
      ...initialState,
      error: mockedError,
    });
  });

  it('should handle select product for delete action', () => {
    expect(
      deleteProductReducer(initialState, {
        type: productActions.selectProductForDelete,
        payload: '5',
      }),
    ).toEqual({
      ...initialState,
      id: '5',
    });
  });
});
