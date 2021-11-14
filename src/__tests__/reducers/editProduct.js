import { productActions } from 'bus/product/actions';
import { mockedError, mockedProduct } from 'utils/mockedData';
import editProductReducer from 'bus/product/reduсers/editProduct';

const initialState = {
  error: null,
  loading: false,
  succeed: false,
  currentProduct: {},
};

describe('editProductReducer', () => {
  it('should return the initial state', () => {
    expect(editProductReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle edit product start action', () => {
    expect(
      editProductReducer(initialState, productActions.editProduct.start),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle edit product success action', () => {
    expect(
      editProductReducer(initialState, productActions.editProduct.success),
    ).toEqual({
      ...initialState,
      succeed: true,
      loading: false,
    });
  });

  it('should handle edit product error action', () => {
    expect(
      editProductReducer(initialState, {
        type: productActions.editProduct.error,
        payload: mockedError,
      }),
    ).toEqual({
      ...initialState,
      error: mockedError,
    });
  });

  it('should handle select product for edit action', () => {
    expect(
      editProductReducer(initialState, {
        type: productActions.selectProductForEdit,
        payload: mockedProduct,
      }),
    ).toEqual({
      ...initialState,
      currentProduct: mockedProduct,
    });
  });
});
