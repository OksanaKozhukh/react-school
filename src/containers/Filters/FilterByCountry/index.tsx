import { FC, ReactElement } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { IOption } from 'interfaces';
import { productActions } from 'bus/product/actions';
import { selectOrigins } from 'bus/product/selectors';
import { formUrlQuery } from 'bus/product/helpers/formUrlQuery';

const FilterByCountry: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const origins = useSelector(selectOrigins);

  const options =
    origins &&
    origins.map((el) => ({
      value: el.value,
      label: el.displayName,
    }));

  const handleChange = (ev) => {
    const data = {
      origins: ev.map((el: IOption) => el.value).join(','),
    };
    formUrlQuery(data);
    dispatch(productActions.fetchProductList.request());
  };

  return (
    <div>
      <Select
        isMulti
        options={options}
        placeholder="Country filter"
        onChange={(ev) => handleChange(ev)}
      />
    </div>
  );
};

export default FilterByCountry;
