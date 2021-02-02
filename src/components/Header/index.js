import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BOOK } from "book";
import { BiCart } from "react-icons/bi";
import { getTotalPrice } from "bus/cart/helpers";
import { selectCartProducts } from "bus/cart/selectors";

import "./styles.scss";

const Header = () => {
  const cartProducts = useSelector(selectCartProducts);

  return (
    <div className="header">
      <span>Total: {getTotalPrice(cartProducts)} $</span>
      <Link to={BOOK.CART}>
        <BiCart size={32} className='icon'/>
      </Link>
    </div>
  );
};

export default Header;
