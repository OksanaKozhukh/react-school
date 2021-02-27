import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { BOOK } from "book";
import { MODALS_NAMES } from "constants/index";
import { cartActions } from "bus/cart/actions";
import { modalsActions } from "bus/modals/actions";
import { selectGeneralList } from "bus/list/selector";

import styles from "./styles.module.scss";
import { productActions } from "bus/product/actions";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const isGeneralList = useSelector(selectGeneralList);

  const getOriginName = (el) => el[0].toUpperCase() + el.slice(1);

  const handleAddClick = (item) =>
    dispatch(cartActions.addToCart({ ...item, quantity: 0 }));

  const handleEditClick = (item) => {
    dispatch(modalsActions.openModal(MODALS_NAMES.EDIT_PRODUCT));
    dispatch(productActions.selectProductForEdit(item));
  };

  return (
    <div className={styles.wrapper}>
      <h3>{item.name}</h3>
      <div>
        <p>Origin: {getOriginName(item.origin)}</p>
        <p>Price: $ {item.price}</p>
      </div>
      <div className={styles.btn}>
        <Link to={BOOK.PRODUCT_ITEM.replace(":id", item.id)}>
          <button>Details</button>
        </Link>
        {isGeneralList ? (
          <button onClick={() => handleAddClick(item)}>Add to cart</button>
        ) : (
          <button onClick={() => handleEditClick(item)}>Edit</button>
        )}
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object,
};

export default ProductItem;
