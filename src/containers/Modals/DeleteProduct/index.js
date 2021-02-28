import { useDispatch, useSelector } from "react-redux";

import { modalsActions } from "bus/modals/actions";
import { productActions } from "bus/product/actions";
import { selectProductId } from "bus/product/selectors";

import styles from "./styles.module.scss";

const DeleteProduct = () => {
  const dispatch = useDispatch();
  const id = useSelector(selectProductId);

  const handleCancel = () => dispatch(modalsActions.closeModal());

  const handleDelete = () => {
    dispatch(productActions.deleteProduct.request({ id }));
    dispatch(modalsActions.closeModal());
  };

  return (
    <div className={styles.wrapper}>
      <h1>Delete the product?</h1>
      <div className={styles.btn}>
        <button onClick={handleCancel}>Cancel</button>
        <button type="submit" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteProduct;
