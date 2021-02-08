import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";

import { cartActions } from "bus/cart/actions";

import "./styles.scss";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDecrease = (id) => dispatch(cartActions.decreaseItem(id));

  const handleIncrease = (id) => dispatch(cartActions.increaseItem(id));

  const handleDelete = (id) => dispatch(cartActions.deleteFromCart(id));

  return (
    <div className="cartItemWrapper">
      <p className="nameWrapper"> {item.name}</p>
      <div className="quantityWrapper">
        <button onClick={() => handleDecrease(item.id)}>
          <AiOutlineMinusSquare size={22} />
        </button>
        <p>{item.quantity}</p>
        <button onClick={() => handleIncrease(item.id)}>
          <AiOutlinePlusSquare size={22} />
        </button>
      </div>

      <p className="priceWrapper"> {item.price}</p>
      <button onClick={() => handleDelete(item.id)}>
        <RiDeleteBinLine size={22} />
      </button>
    </div>
  );
};

export default CartItem;
