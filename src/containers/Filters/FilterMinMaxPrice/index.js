import { useDispatch } from "react-redux";

import { productActions } from "bus/product/actions";

import styles from "./styles.module.scss";

const MinMaxPcice = () => {
  const dispatch = useDispatch();
  const handleChange = (ev) => {
    const data = { [ev.target.name]: ev.target.value };
    dispatch(productActions.filterOptions(data));
    dispatch(productActions.filterProductList.request());
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
