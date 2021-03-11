import { useDispatch, useSelector } from "react-redux";

import Button from "components/Button";
import { modalsActions } from "bus/modals/actions";
import { productActions } from "bus/product/actions";
import {
  selectProductId,
  selectDeleteStateLoading,
} from "bus/product/selectors";

import styles from "./styles.module.scss";

const DeleteProduct = () => {
  const dispatch = useDispatch();
  const id = useSelector(selectProductId);
  const loading = useSelector(selectDeleteStateLoading);

  const handleCancel = () => dispatch(modalsActions.closeModal());

  const handleDelete = () => {
    dispatch(productActions.deleteProduct.request({ id }));
  };

  return (
    <div className={styles.wrapper}>
      <h1>Delete the product?</h1>
      <div className={styles.btn}>
        <Button
          title="Cancel"
          onClick={handleCancel}
          extraClass={styles.extraClass}
        />
        <Button
          title="Delete"
          loading={loading}
          extraClass={styles.extraClass}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default DeleteProduct;
