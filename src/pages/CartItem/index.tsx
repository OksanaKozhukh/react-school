import Button from 'components/Button';
import { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from 'bus/cart/actions';
import { IItemWithQuantity } from 'interfaces';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

import styles from './styles.module.scss';

type Props = {
  item: IItemWithQuantity;
};

const CartItem: FC<Props> = ({ item }: Props): ReactElement => {
  const dispatch = useDispatch();

  const handleDecrease = (id: string) => dispatch(cartActions.decreaseItem(id));

  const handleIncrease = (id: string) => dispatch(cartActions.increaseItem(id));

  const handleDelete = (id: string) => dispatch(cartActions.deleteFromCart(id));

  return (
    <div className={styles.cartItemWrapper}>
      <p className={styles.nameWrapper}> {item.name}</p>

      <div className={styles.quantityWrapper}>
        <Button
          testId="minus-button"
          extraClass={styles.extraClass}
          onClick={() => handleDecrease(item.id)}
        >
          <AiOutlineMinusSquare size={22} />
        </Button>

        <p data-testid="product-quantity">{item.quantity}</p>

        <Button
          testId="plus-button"
          extraClass={styles.extraClass}
          onClick={() => handleIncrease(item.id)}
        >
          <AiOutlinePlusSquare size={22} />
        </Button>
      </div>

      <p className={styles.priceWrapper} data-testid="product-total-price">
        {item.totalPrice}
      </p>

      <Button
        testId="delete-button"
        extraClass={styles.extraClass}
        onClick={() => handleDelete(item.id)}
      >
        <RiDeleteBinLine size={22} />
      </Button>
    </div>
  );
};

export default CartItem;
