import { IProductState } from 'interfaces';
import { productActions } from 'bus/product/actions';
import { reqReducer } from 'bus/product/helpers/reqReducer';

const initialState = {
  error: null,
  loading: false,
  succeed: false,
} as IProductState;

const addNewProductReducer = reqReducer<IProductState>(
  initialState,
  productActions.addNewProduct,
);

export default addNewProductReducer;
