import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GrFormClose } from "react-icons/gr";

import { BOOK } from "book";
import { MODALS_NAMES } from "constants/index";
import { cartActions } from "bus/cart/actions";
import { modalsActions } from "bus/modals/actions";

import styles from "./styles.module.scss";
import { productActions } from "bus/product/actions";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const pathname = window.location.pathname;
  const getOriginName = (el) => el[0].toUpperCase() + el.slice(1);

  const handleAddClick = (item) =>
    dispatch(cartActions.addToCart({ ...item, quantity: 0 }));

  const handleEditClick = (item) => {
    dispatch(modalsActions.openModal(MODALS_NAMES.EDIT_PRODUCT));
    dispatch(productActions.selectProductForEdit(item));
  };

  const handleDeleteClick = (id) => {
    dispatch(modalsActions.openModal(MODALS_NAMES.DELETE_PRODUCT));
    dispatch(productActions.selectProductForDelete(id));
  };

  return (
    <div className={styles.wrapper}>
      {pathname === BOOK.MY_PRODUCT_LIST && (
        <GrFormClose
          size={25}
          className={styles.icon}
          onClick={() => handleDeleteClick(item.id)}
        />
      )}
      <h3
        className={
          pathname === BOOK.MY_PRODUCT_LIST ? styles.nameWrapper : null
        }
      >
        {item.name}
      </h3>

      <div>
        <p>Origin: {getOriginName(item.origin)}</p>
        <p>Price: $ {item.price}</p>
      </div>
      <div className={styles.btn}>
        <Link to={BOOK.PRODUCT_ITEM.replace(":id", item.id)}>
          <button>Details</button>
        </Link>
        {pathname === BOOK.MY_PRODUCT_LIST ? (
          <button onClick={() => handleEditClick(item)}>Edit</button>
        ) : (
          <button onClick={() => handleAddClick(item)}>Add to cart</button>
        )}
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object,
};

export default ProductItem;
