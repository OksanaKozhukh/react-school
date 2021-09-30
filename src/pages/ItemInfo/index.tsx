import { useEffect, FC, ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'components/Header';
import { cartActions } from 'bus/cart/actions';
import { productActions } from 'bus/product/actions';
import { selectProductItem } from 'bus/product/selectors';

import styles from './styles.module.scss';

const ItemInfo: FC = (): ReactElement => {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.fetchProductItem.request({ id }));
  }, [id, dispatch]);
  const item = useSelector(selectProductItem);

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
