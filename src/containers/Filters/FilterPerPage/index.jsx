import Select from 'react-select';
import { useDispatch } from 'react-redux';

import { productActions } from 'bus/product/actions';
import { formUrlQuery } from 'bus/product/helpers/formUrlQuery';

const options = [
  { value: '10', label: '10' },
  { value: '25', label: '25' },
  { value: '50', label: '50' },
];

const FilterPerPage = () => {
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    const data = { perPage: ev.value };
    formUrlQuery(data);
    dispatch(productActions.fetchProductList.request());
  };

  return (
    <div>
      <Select
        options={options}
        placeholder="Products per page"
        onChange={(ev) => handleChange(ev)}
      />
    </div>
  );
};

export default FilterPerPage;
