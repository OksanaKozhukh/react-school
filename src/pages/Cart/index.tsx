import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { BOOK } from 'book';
import { IItemWithQuantity } from 'interfaces';
import CartItem from 'pages/CartItem';
import { selectCartProducts, selectTotalPrice } from 'bus/cart/selectors';

import styles from './styles.module.scss';

const Cart = () => {
  const total: number = useSelector(selectTotalPrice);
  const cartProducts: Array<IItemWithQuantity> =
    useSelector(selectCartProducts);

  return cartProducts.length > 0 ? (
    <div className={styles.cartWrapper}>
      {cartProducts.map((item: IItemWithQuantity) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className={styles.blockWrapper}>
        <Link to={BOOK.PRODUCT_LIST}>
          <button type="button" className="">
            Back to purchase
          </button>
        </Link>
        <p data-testid="cart-total-price">Total price: {total} $</p>
      </div>
    </div>
  ) : (
    <div className={styles.empty}>
      <p>Your cart is empty</p>
    </div>
  );
};

export default Cart;
