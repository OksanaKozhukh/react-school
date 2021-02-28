import { useEffect } from "react";
import Select from "react-select";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { GrFormClose } from "react-icons/gr";
import { modalsActions } from "bus/modals/actions";
import { productActions } from "bus/product/actions";
import { selectCurrentProduct, selectOrigins } from "bus/product/selectors";

import { editProduct } from "./shape";

import styles from "./styles.module.scss";

const EditProduct = () => {
  const dispatch = useDispatch();
  const currentProduct = useSelector(selectCurrentProduct);

  useEffect(() => dispatch(productActions.fetchOrigins.request()), [dispatch]);

  const handleCloseModal = () => dispatch(modalsActions.closeModal());

  const options = useSelector(selectOrigins).map((el) => ({
    value: el.value,
    label: el.displayName,
  }));

  const formik = useFormik({
    initialValues: currentProduct,
    validationSchema: editProduct.shema,
    onSubmit: ({ name, price, origin }) => {
      const product = { name, price, origin };
      dispatch(
        productActions.editProduct.request({ product, id: currentProduct.id })
      );
      handleCloseModal();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p>Edit Product</p>
          <GrFormClose
            size={25}
            className={styles.icon}
            onClick={handleCloseModal}
          />
        </div>
        <div className={styles.field}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <div className={styles.error}>{formik.errors.name}</div>
        </div>
        <div className={styles.field}>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          <div className={styles.error}>{formik.errors.price}</div>
        </div>
        <div className={styles.field}>
          <Select
            name="origin"
            options={options}
            placeholder="Select country"
            value={formik.values.origins}
            onChange={(value) => formik.setFieldValue("origin", value.value)}
            defaultValue={
              options.filter(
                (option) => option.value === formik.initialValues.origin
              )[0]
            }
          />
          <div className={styles.error}>{formik.errors.origins}</div>
        </div>
        <div className={styles.btn}>
          <button onClick={formik.handleReset}>Reset</button>
          <button type="submit" disabled={!formik.dirty || !formik.isValid}>
            Edit
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditProduct;
