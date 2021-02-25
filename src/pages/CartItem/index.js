import { useDispatch } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";

import { cartActions } from "bus/cart/actions";

import styles from "./styles.module.scss";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDecrease = (id) => dispatch(cartActions.decreaseItem(id));

  const handleIncrease = (id) => dispatch(cartActions.increaseItem(id));

  const handleDelete = (id) => dispatch(cartActions.deleteFromCart(id));

  return (
    <div className={styles.cartItemWrapper}>
      <p className={styles.nameWrapper}> {item.name}</p>
      <div className={styles.quantityWrapper}>
        <button onClick={() => handleDecrease(item.id)}>
          <AiOutlineMinusSquare size={22} />
        </button>
        <p>{item.quantity}</p>
        <button onClick={() => handleIncrease(item.id)}>
          <AiOutlinePlusSquare size={22} />
        </button>
      </div>

      <p className={styles.priceWrapper}> {item.price}</p>
      <button onClick={() => handleDelete(item.id)}>
        <RiDeleteBinLine size={22} />
      </button>
    </div>
  );
};

export default CartItem;
