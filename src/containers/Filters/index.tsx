/* eslint-disable indent */
import { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import { IOption } from 'interfaces';
import Input from 'components/Input';
import Select from 'components/Select';
import Button from 'components/Button';
import { productActions } from 'bus/product/actions';
import { clearUrlQuery, formUrlQuery } from 'bus/product/helpers/formUrlQuery';
import { useGetOriginOptions } from 'bus/product/hooks/useGetOriginOptions';

import { filters } from './shape';
import styles from './styles.module.scss';

const perPageOptions: Array<IOption> = [
  { value: '10', label: '10' },
  { value: '25', label: '25' },
  { value: '50', label: '50' },
];

const Filters: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const originOptions = useGetOriginOptions();

  const formik = useFormik({
    initialValues: filters.shape(),
    validationSchema: filters.schema,
    onSubmit: (_, { resetForm }) => {
      resetForm();
      clearUrlQuery();
      dispatch(productActions.fetchProductList.request());
    },
  });

  const handleChangeFilter = (params) => {
    formUrlQuery(params);
    dispatch(productActions.fetchProductList.request());
  };

  const handlePerPageFilter = (value) => {
    formik.setFieldValue('perPage', value);
    const params = { perPage: value };
    handleChangeFilter(params);
  };

  const handleMinPriceFilter = (ev) => {
    formik.handleChange(ev);
    const params = { minPrice: ev.target.value };
    handleChangeFilter(params);
  };

  const handleMaxPriceFilter = (ev) => {
    formik.handleChange(ev);
    const params = { maxPrice: ev.target.value };
    handleChangeFilter(params);
  };

  const handleOriginFilter = (value) => {
    formik.setFieldValue('origins', value);
    const params = {
      origins: value.join(','),
    };
    handleChangeFilter(params);
  };

  return (
    <form onSubmit={formik.handleSubmit} className={styles.filter}>
      <div className={styles.pageFilter}>
        <Select
          name="perPage"
          options={perPageOptions}
          placeholder="Products per page"
          onChange={(_, value) => handlePerPageFilter(value)}
          value={formik.values.perPage || ''}
        />
      </div>
      <div className={styles.priceFilter}>
        <Input
          {...formik.getFieldProps('minPrice')}
          id="minPrice"
          type="number"
          name="minPrice"
          placeholder="Min price"
          onChange={(ev) => handleMinPriceFilter(ev)}
        />
      </div>
      <div className={styles.priceFilter}>
        <Input
          {...formik.getFieldProps('maxPrice')}
          type="number"
          id="maxPrice"
          name="maxPrice"
          placeholder="Max price"
          onChange={(ev) => handleMaxPriceFilter(ev)}
        />
      </div>
      <div className={styles.originFilter}>
        <Select
          isMulti
          name="origins"
          options={originOptions}
          placeholder="Country filter"
          value={formik.values.origins || []}
          onChange={(_, value) => handleOriginFilter(value)}
        />
      </div>
      <Button title="Clear filters" extraClass={styles.clearFiltersClass} />
    </form>
  );
};

export default Filters;
