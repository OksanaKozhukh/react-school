import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GrFormClose } from 'react-icons/gr';

import { BOOK } from 'book';
import { MODALS_NAMES } from 'constants/index';
import { cartActions } from 'bus/cart/actions';
import { modalsActions } from 'bus/modals/actions';

import { productActions } from 'bus/product/actions';
import styles from './styles.module.scss';

type Props = {
  item?: any;
};

const ProductItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const getOriginName = (el) => el[0].toUpperCase() + el.slice(1);

  const handleAddClick = (el) =>
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    dispatch(cartActions.addToCart({ ...el, quantity: 0 }));

  const handleEditClick = (el) => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    dispatch(modalsActions.openModal(MODALS_NAMES.EDIT_PRODUCT));
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    dispatch(productActions.selectProductForEdit(el));
  };

  const handleDeleteClick = (id) => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    dispatch(modalsActions.openModal(MODALS_NAMES.DELETE_PRODUCT));
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    dispatch(productActions.selectProductForDelete(id));
  };

  return (
    <div className={styles.wrapper} data-testid="product-item">
      {item.isEditable && (
        <GrFormClose
          size={25}
          className={styles.icon}
          data-testid="delete-icon"
          onClick={() => handleDeleteClick(item.id)}
        />
      )}
      {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'string | null' is not assignable to type 'st... Remove this comment to see the full error message */}
      <h3 className={item.isEditable ? styles.nameWrapper : null}>
        {item.name}
      </h3>

      <div>
        <p data-testid="item-origin">Origin: {getOriginName(item.origin)}</p>
        <p data-testid="item-price"> Price: $ {item.price}</p>
      </div>
      <div className={styles.btn}>
        <Link to={BOOK.PRODUCT_ITEM.replace(':id', item.id)}>
          <button type="button">Details</button>
        </Link>
        {item.isEditable ? (
          <button type="button" onClick={() => handleEditClick(item)}>
            Edit
          </button>
        ) : (
          <button type="button" onClick={() => handleAddClick(item)}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
