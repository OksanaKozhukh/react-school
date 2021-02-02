import uniq from "lodash/uniq";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BOOK } from "book";
import CartItem from "pages/CartItem";
import { getTotalPrice } from "bus/cart/helpers";
import { selectCartProducts } from "bus/cart/selectors";

import "./styles.scss";

const Cart = () => {
  const cartProducts = useSelector(selectCartProducts);

  const displayList = uniq(cartProducts);

  return displayList.length > 0 ? (
    <div className="cartWrapper">
      {displayList.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          quantity={cartProducts.filter((i) => i.id === item.id).length}
        />
      ))}
      <div className='blockWrapper'>
      <Link to={BOOK.PRODUCT_LIST}>
        <button className=''>Back to purchase</button>
      </Link>
      <p>Total price: {getTotalPrice(cartProducts)} $</p>
      </div>
    </div>
  ) : (
    <p className="empty">Your cart is empty. Please, choose any product.</p>
  );
};

export default Cart;
