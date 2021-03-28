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
    <div className={styles.wrapper} data-testid="product-item">
      {item.isEditable && (
        <GrFormClose
          size={25}
          className={styles.icon}
          data-testid="delete-icon"
          onClick={() => handleDeleteClick(item.id)}
        />
      )}
      <h3 className={item.isEditable ? styles.nameWrapper : null}>
        {item.name}
      </h3>

      <div>
        <p data-testid="item-origin">Origin: {getOriginName(item.origin)}</p>
        <p data-testid="item-price"> Price: $ {item.price}</p>
      </div>
      <div className={styles.btn}>
        <Link to={BOOK.PRODUCT_ITEM.replace(":id", item.id)}>
          <button>Details</button>
        </Link>
        {item.isEditable ? (
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
