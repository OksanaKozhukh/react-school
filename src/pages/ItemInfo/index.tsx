import { useDispatch, useSelector } from 'react-redux';

import { selectProductItem } from 'bus/product/selectors';
import Header from 'components/Header';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { IItemWithQuantity } from 'interfaces';
import { cartActions } from 'bus/cart/actions';
import { productActions } from 'bus/product/actions';

import styles from './styles.module.scss';

const ItemInfo = () => {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();

  useEffect(
    // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
    () => dispatch(productActions.fetchProductItem.request({ id })),
    [id, dispatch],
  );

  const item: IItemWithQuantity = useSelector(selectProductItem);

  const handleAddClick = (el: IItemWithQuantity) =>
    dispatch(cartActions.addToCart(el));

  return (
    <>
      <Header />

      <div className={styles.infoWrapper}>
        <h2> {item.name}</h2>
        <p data-testid="item-origin">Origin: {item.origin}</p>
        <p data-testid="item-price">Price: $ {item.price}</p>
        {!item.isEditable && (
          <button type="button" onClick={() => handleAddClick(item)}>
            Add to cart
          </button>
        )}
      </div>
    </>
  );
};

export default ItemInfo;
