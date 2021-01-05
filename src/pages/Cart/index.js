import { useContext } from "react";

import CartItem from "../CartItem";
import { ProductContext } from "../../App";

import "./styles.scss";

const Cart = () => {
  const { totalPrice, cartList } = useContext(ProductContext);

  const displayList = Array.from(new Set(cartList));

  return displayList.length > 0 ? (
    <div className='cartWrapper'>
      {displayList.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          quantity={cartList.filter((i) => i.id === item.id).length}
        />
      ))}
      <p>Total price: {totalPrice} $</p>
    </div>
  ) : (
    <p className='empty'>Your cart is empty. Please, choose any product.</p>
  );
};

export default Cart;
