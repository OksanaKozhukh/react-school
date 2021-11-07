import { FC, ReactElement } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import Input from 'components/Input';
import Select from 'components/Select';
import Button from 'components/Button';
import { GrFormClose } from 'react-icons/gr';
import { IOption, IProduct } from 'interfaces';
import { modalsActions } from 'bus/modals/actions';
import { productActions } from 'bus/product/actions';
import {
  selectOrigins,
  selectCurrentProduct,
  selectEditStateLoading,
} from 'bus/product/selectors';

import { editProduct } from './shape';

import styles from './styles.module.scss';

const EditProduct: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const loading = useSelector(selectEditStateLoading);
  const currentProduct = useSelector(selectCurrentProduct);

  const options: Array<IOption> = useSelector(selectOrigins).map((el) => ({
    value: el.value,
    label: el.displayName,
  }));

  const handleCloseModal = () => dispatch(modalsActions.closeModal());

  const formik = useFormik({
    initialValues: currentProduct,
    validationSchema: editProduct.shema,
    onSubmit: ({ name, price, origin }) => {
      const product: IProduct = { product: { name, price, origin } };
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
          <Input
            {...formik.getFieldProps('name')}
            id="name"
            type="text"
            name="name"
            label="Name:"
            placeholder="Enter name"
            error={formik.errors.name}
            touched={formik.touched.name}
          />
        </div>
        <div className={styles.field}>
          <Input
            {...formik.getFieldProps('price')}
            id="price"
            type="number"
            name="price"
            label="Price:"
            placeholder="Enter price"
            error={formik.errors.price}
            touched={formik.touched.price}
          />
        </div>
        <div className={styles.field}>
          <Select
            {...formik.getFieldProps('origin')}
            id="origin"
            name="origin"
            label="Origin:"
            options={options}
            labelStyles={styles.title}
            placeholder="Select country"
            error={formik.errors.origin}
            touched={formik.touched.origin}
            onChange={formik.setFieldValue}
            defaultValue={currentProduct.origin}
            onBlur={() => formik.setFieldTouched('origin')}
          />
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
