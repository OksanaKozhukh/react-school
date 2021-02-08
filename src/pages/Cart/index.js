import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BOOK } from "book";
import CartItem from "pages/CartItem";
import { selectCartProducts, selectTotalPrice } from "bus/cart/selectors";

import "./styles.scss";

const Cart = () => {
  const total = useSelector(selectTotalPrice);
  const cartProducts = useSelector(selectCartProducts);

  return cartProducts.length > 0 ? (
    <div className="cartWrapper">
      {cartProducts.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
      <div className="blockWrapper">
        <Link to={BOOK.PRODUCT_LIST}>
          <button className="">Back to purchase</button>
        </Link>
        <p>Total price: {total} $</p>
      </div>
    </div>
  ) : (
    <p className="empty">Your cart is empty. Please, choose any product.</p>
  );
};

export default Cart;
