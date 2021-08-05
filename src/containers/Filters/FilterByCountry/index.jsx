import Select from 'react-select';
import { useDispatch } from 'react-redux';

import { productActions } from 'bus/product/actions';
import { formUrlQuery } from 'bus/product/helpers/formUrlQuery';

const options = [
  { value: 'europe', label: 'Europe' },
  { value: 'usa', label: 'Usa' },
  { value: 'africa', label: 'Africa' },
  { value: 'asia', label: 'Asia' },
];

const FilterByCountry = () => {
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    const data = { origins: ev.map((el) => el.value).join(',') };
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
