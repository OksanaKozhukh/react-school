import AddProduct from 'containers/Modals/AddProduct';
import EditProduct from 'containers/Modals/EditProduct';
import { MODALS_NAMES } from 'constants/index';
import DeleteProduct from './DeleteProduct';

const { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } = MODALS_NAMES;

export const Modals = {
  [ADD_PRODUCT]: AddProduct,
  [EDIT_PRODUCT]: EditProduct,
  [DELETE_PRODUCT]: DeleteProduct,
};
