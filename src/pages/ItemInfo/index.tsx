import { useDispatch, useSelector } from 'react-redux';

import { selectProductItem } from 'bus/product/selectors';
import Header from 'components/Header';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { cartActions } from 'bus/cart/actions';
import { productActions } from 'bus/product/actions';

import styles from './styles.module.scss';

const ItemInfo = () => {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type '{}'.
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ payload: undefined; type: string; }' is no... Remove this comment to see the full error message
    () => dispatch(productActions.fetchProductItem.request({ id })),
    [id, dispatch],
  );

  const item = useSelector(selectProductItem);

  // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
  const handleAddClick = (el) => dispatch(cartActions.addToCart(el));

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
