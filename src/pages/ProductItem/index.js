import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { BOOK } from "book";
import { cartActions } from "bus/cart/actions";

import "./styles.scss";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddClick = (item) =>
    dispatch(cartActions.addToCart({ ...item, quantity: 0 }));

  return (
    <div className="wrapper">
      <h3>{item.name}</h3>
      <div>
        <p>Origin: {item.origin}</p>
        <p>Price: $ {item.price}</p>
      </div>
      <div className="btn">
        <Link to={BOOK.PRODUCT_ITEM.replace(":id", item.id)}>
          <button>Details</button>
        </Link>
        <button onClick={() => handleAddClick(item)}>Add to cart</button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object,
};

export default ProductItem;
