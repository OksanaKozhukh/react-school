import { useContext } from "react";

import { BiCart } from "react-icons/bi";
import { ProductContext } from "../../App";
import { useHistory } from "react-router-dom";

import "./styles.scss";

const Header = () => {
  const history = useHistory();
  const { totalPrice  } = useContext(ProductContext);
  
  return (
    <div className="header">
      <span>Total: {totalPrice} $</span>
      <div><BiCart size={32} onClick={() => history.push("/cart")} /></div>
    </div>
  );
};

export default Header;
