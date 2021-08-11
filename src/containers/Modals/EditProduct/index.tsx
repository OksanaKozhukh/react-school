import { useEffect } from 'react';
import Select from 'react-select';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { IProduct } from 'interfaces';
import Button from 'components/Button';
import { GrFormClose } from 'react-icons/gr';
import { modalsActions } from 'bus/modals/actions';
import { productActions } from 'bus/product/actions';
import {
  selectCurrentProduct,
  selectEditStateLoading,
  selectOrigins,
} from 'bus/product/selectors';

import { editProduct } from './shape';

import styles from './styles.module.scss';

const EditProduct = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectEditStateLoading);
  const currentProduct = useSelector(selectCurrentProduct);

  // @ts-expect-error ts-migrate(2322) FIXME: Type '{ payload: undefined; type: string; }' is no... Remove this comment to see the full error message
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
      const product: IProduct = { name, price, origin };
      dispatch(
        productActions.editProduct.request({ product, id: currentProduct.id }),
      );
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
          <div className={styles.title}>
            <label htmlFor="name">Name:</label>
          </div>
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
          <div className={styles.title}>
            <label htmlFor="price">Price:</label>
          </div>
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
          <div className={styles.title}>
            <label htmlFor="origin">Origin:</label>
          </div>
          <Select
            name="origin"
            options={options}
            data-testid="product-origin"
            placeholder="Select country"
            value={formik.values.origins}
            onChange={(value) => formik.setFieldValue('origin', value.value)}
            defaultValue={
              options.filter(
                (option) => option.value === formik.initialValues.origin,
              )[0]
            }
          />
          <div className={styles.error}>{formik.errors.origins}</div>
        </div>
        <div className={styles.btn}>
          <Button
            title="Reset"
            onClick={formik.handleReset}
            extraClass={styles.extraClass}
          />
          <Button
            title="Edit"
            loading={loading}
            extraClass={styles.extraClass}
            disabled={!formik.dirty || !formik.isValid}
          />
        </div>
      </div>
    </form>
  );
};

export default EditProduct;
