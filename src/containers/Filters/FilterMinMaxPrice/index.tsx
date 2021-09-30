import { FC, ReactElement, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { productActions } from 'bus/product/actions';
import { formUrlQuery } from 'bus/product/helpers/formUrlQuery';

import styles from './styles.module.scss';

const MinMaxPcice: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const data = { [ev.target.name]: ev.target.value };
    formUrlQuery(data);
    dispatch(productActions.fetchProductList.request());
  };
  return (
    <div className={styles.priceRange}>
      <input
        type="text"
        name="minPrice"
        placeholder="Min price"
        onChange={(ev) => handleChange(ev)}
      />
      <input
        type="text"
        name="maxPrice"
        placeholder="Max price"
        onChange={(ev) => handleChange(ev)}
      />
    </div>
  );
};

export default MinMaxPcice;
