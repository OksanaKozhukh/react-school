import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import CartItem from 'pages/CartItem';
import { IItemWithQuantity } from 'interfaces';
import { selectCartProducts, selectTotalPrice } from 'bus/cart/selectors';

import styles from './styles.module.scss';

const Cart: FC = (): ReactElement => {
  const total: number = useSelector(selectTotalPrice);
  const cartProducts: Array<IItemWithQuantity> =
    useSelector(selectCartProducts);

  return (
    <>
      {cartProducts.length > 0 ? (
        <div className={styles.cartWrapper}>
          {cartProducts.map((item: IItemWithQuantity) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className={styles.blockWrapper}>
            <p data-testid="cart-total-price">Total price: {total} $</p>
          </div>
        </div>
      ) : (
        <div className={styles.empty}>
          <p>Your cart is empty. Please, add products</p>
        </div>
      )}
    </>
  );
};

export default Cart;
