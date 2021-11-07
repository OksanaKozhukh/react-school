import { useFormik } from 'formik';
import { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from 'components/Input';
import Select from 'components/Select';
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
      const product: IProduct = { product: { name, price, origin } };
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
            name="price"
            type="number"
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
            onBlur={() => formik.setFieldTouched('origin')}
          />
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
