import Select from 'react-select';
import { useFormik } from 'formik';
import { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/Button';
import { GrFormClose } from 'react-icons/gr';
import { IOption, IProduct } from 'interfaces';
import { modalsActions } from 'bus/modals/actions';
import { productActions } from 'bus/product/actions';
import { selectOrigins, selectAddStateLoading } from 'bus/product/selectors';

import { addProduct } from './shape';

import styles from './styles.module.scss';

const AddProduct: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const loading: boolean = useSelector(selectAddStateLoading);

  const handleCloseModal = () => dispatch(modalsActions.closeModal());

  const options: Array<IOption> = useSelector(selectOrigins).map((el) => ({
    value: el.value,
    label: el.displayName,
  }));

  const formik = useFormik({
    initialValues: addProduct.shape,
    validationSchema: addProduct.schema,
    onSubmit: ({ name, price, origin }) => {
      const product: IProduct = { name, price, origin };
      dispatch(productActions.addNewProduct.request({ product }));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p>Add Product</p>
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
            required
            id="name"
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
            required
            id="price"
            name="price"
            type="number"
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
          <div data-testid="select-origin">
            <Select
              required
              id="origin"
              name="origin"
              options={options}
              placeholder="Select country"
              value={formik.values.origins}
              onChange={(value) => formik.setFieldValue('origin', value.value)}
            />
          </div>
          <div className={styles.error}>{formik.errors.origins}</div>
        </div>
        <Button
          title="Add"
          loading={loading}
          disabled={!formik.dirty || !formik.isValid}
        />
      </div>
    </form>
  );
};

export default AddProduct;
