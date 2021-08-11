import { useDispatch } from 'react-redux';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

import { cartActions } from 'bus/cart/actions';

import styles from './styles.module.scss';

type Props = {
  item?: any;
};

const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch();

  const handleDecrease = (id: string) => dispatch(cartActions.decreaseItem(id));

  const handleIncrease = (id: string) => dispatch(cartActions.increaseItem(id));

  const handleDelete = (id: string) => dispatch(cartActions.deleteFromCart(id));

  return (
    <div className={styles.cartItemWrapper}>
      <p className={styles.nameWrapper}> {item.name}</p>
      <div className={styles.quantityWrapper}>
        <button
          type="button"
          onClick={() => handleDecrease(item.id)}
          data-testid="minus-button"
        >
          <AiOutlineMinusSquare size={22} />
        </button>
        <p data-testid="product-quantity">{item.quantity}</p>
        <button
          type="button"
          onClick={() => handleIncrease(item.id)}
          data-testid="plus-button"
        >
          <AiOutlinePlusSquare size={22} />
        </button>
      </div>

      <p className={styles.priceWrapper} data-testid="product-price">
        {' '}
        {item.price}
      </p>
      <button
        type="button"
        onClick={() => handleDelete(item.id)}
        data-testid="delete-button"
      >
        <RiDeleteBinLine size={22} />
      </button>
    </div>
  );
};

export default CartItem;
