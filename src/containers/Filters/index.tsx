/* eslint-disable indent */
import { FC, ReactElement, ChangeEvent, useState } from 'react';
import qs from 'query-string';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { IOption } from 'interfaces';
import Button from 'components/Button';
import { productActions } from 'bus/product/actions';
import { selectOrigins } from 'bus/product/selectors';
import { formUrlQuery, clearUrlQuery } from 'bus/product/helpers/formUrlQuery';

import styles from './styles.module.scss';

const perPageOptions: Array<IOption> = [
  { value: '10', label: '10' },
  { value: '25', label: '25' },
  { value: '50', label: '50' },
];

const Filters: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const originsList = useSelector(selectOrigins);
  const queryParams = qs.parse(window.location.search.substr(1));

  const [origin, setOrigin] = useState(queryParams.origins || '');
  const [perPage, setPerPage] = useState(queryParams.perPage || '');
  const [minPrice, setMinPrice] = useState(queryParams.minPrice || '');
  const [maxPrice, setMaxPrice] = useState(queryParams.maxPrice || '');

  const originOptions =
    originsList &&
    originsList.map((el) => ({
      value: el.value,
      label: el.displayName,
    }));

  const handleChangeFilter = (params, setStateFunc, data) => {
    setStateFunc(data);
    formUrlQuery(params);
    dispatch(productActions.fetchProductList.request());
  };

  const handlePerPageFilter = (ev) => {
    const params = { perPage: ev.value };
    handleChangeFilter(params, setPerPage, ev.value);
  };

  const handleMinPriceFilter = (ev: ChangeEvent<HTMLInputElement>) => {
    const params = { minPrice: ev.target.value };
    handleChangeFilter(params, setMinPrice, ev.target.value);
  };

  const handleMaxPriceFilter = (ev: ChangeEvent<HTMLInputElement>) => {
    const params = { maxPrice: ev.target.value };
    handleChangeFilter(params, setMaxPrice, ev.target.value);
  };

  const handleOriginFilter = (ev) => {
    const params = {
      origins: ev.map((el: IOption) => el.value).join(','),
    };
    const data = ev.map((el: IOption) => el.value).join(',');
    handleChangeFilter(params, setOrigin, data);
  };

  const clearAllFilters = () => {
    setOrigin('');
    setPerPage('');
    setMinPrice('');
    setMaxPrice('');
    clearUrlQuery();
    dispatch(productActions.fetchProductList.request());
  };

  return (
    <>
      <div className={styles.filter}>
        <div className={styles.pageFilter}>
          <Select
            name="perPage"
            options={perPageOptions}
            placeholder="Products per page"
            onChange={(ev) => handlePerPageFilter(ev)}
            value={perPageOptions.find((el) => el.value === perPage) || ''}
          />
        </div>
        <div className={styles.priceFilter}>
          <input
            type="number"
            name="minPrice"
            value={minPrice}
            placeholder="Min price"
            onChange={(ev) => handleMinPriceFilter(ev)}
          />
        </div>
        <div className={styles.priceFilter}>
          <input
            type="number"
            name="maxPrice"
            value={maxPrice}
            placeholder="Max price"
            onChange={(ev) => handleMaxPriceFilter(ev)}
          />
        </div>
        <div className={styles.originFilter}>
          <Select
            isMulti
            type="text"
            name="originFilter"
            options={originOptions}
            placeholder="Country filter"
            onChange={(ev) => handleOriginFilter(ev)}
            value={
              origin && typeof origin === 'string'
                ? originOptions.filter((el) =>
                    origin.split(',').includes(el.value),
                  )
                : ''
            }
          />
        </div>
        <Button
          title="Clear filters"
          onClick={clearAllFilters}
          extraClass={styles.clearFiltersClass}
        />
      </div>
    </>
  );
};

export default Filters;
