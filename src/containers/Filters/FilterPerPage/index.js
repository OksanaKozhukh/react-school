import Select from "react-select";
import { useDispatch } from "react-redux";
import { productActions } from "bus/product/actions";

const options = [
  { value: "10", label: "10" },
  { value: "25", label: "25" },
  { value: "50", label: "50" },
];

const FilterPerPage = () => {
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    const data = { 'perPage': ev.value };
    dispatch(productActions.filterOptions(data));
    dispatch(productActions.filterProductList.request());
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
