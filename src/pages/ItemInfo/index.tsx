import { useEffect, FC, ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import upperFirst from 'lodash/upperFirst';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'components/Header';
import { cartActions } from 'bus/cart/actions';
import MainLoader from 'components/MainLoader';
import { productActions } from 'bus/product/actions';
import { IItem, IItemWithQuantity } from 'interfaces';
import {
  selectProductItem,
  selectProductItemLoading,
} from 'bus/product/selectors';

import styles from './styles.module.scss';

const ItemInfo: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { id }: { id: string } = useParams();
  const item = useSelector(selectProductItem);
  const loading = useSelector(selectProductItemLoading);

  const handleAddClick = (el: IItem) =>
    dispatch(
      cartActions.addToCart({ ...el, quantity: 0 } as IItemWithQuantity),
    );

  useEffect(() => {
    dispatch(productActions.fetchProductItem.request({ id }));
  }, [id]);

  return (
    <>
      <Header />

      {loading ? (
        <MainLoader />
      ) : (
        <div className={styles.infoWrapper}>
          <h2> {item.name}</h2>
          <p data-testid="item-origin">Origin: {upperFirst(item.origin)}</p>
          <p data-testid="item-price">Price: $ {item.price}</p>
          {!item.isEditable && (
            <button type="button" onClick={() => handleAddClick(item)}>
              Add to cart
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ItemInfo;
