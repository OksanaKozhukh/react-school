/* eslint-disable indent */
import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GrFormClose } from 'react-icons/gr';

import { BOOK } from 'book';
import { IItem, IItemWithQuantity } from 'interfaces';
import { MODALS_NAMES } from 'constants/index';
import { cartActions } from 'bus/cart/actions';
import { modalsActions } from 'bus/modals/actions';
import { productActions } from 'bus/product/actions';

import styles from './styles.module.scss';

type Props = {
  item: IItem;
};

const ProductItem: FC<Props> = ({ item }: Props): ReactElement => {
  const dispatch = useDispatch();
  const getOriginName = (el: string) => el[0].toUpperCase() + el.slice(1);

  const handleAddClick = (el: IItem) =>
    dispatch(
      cartActions.addToCart({ ...el, quantity: 0 } as IItemWithQuantity),
    );

  const handleEditClick = (el: IItem) => {
    dispatch(modalsActions.openModal(MODALS_NAMES.EDIT_PRODUCT));
    dispatch(productActions.selectProductForEdit(el));
  };

  const handleDeleteClick = (id: string) => {
    dispatch(modalsActions.openModal(MODALS_NAMES.DELETE_PRODUCT));

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
      <h3 className={item.isEditable ? styles.nameWrapper : ''}>{item.name}</h3>

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
