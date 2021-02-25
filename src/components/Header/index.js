import { Link } from "react-router-dom";
import { CgAddR } from "react-icons/cg";
import { BiCart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

import { BOOK } from "book";
import { MODALS_NAMES } from "constants/index";
import { modalsActions } from "bus/modals/actions";
import { selectTotalPrice } from "bus/cart/selectors";
import FilterPerPage from "containers/Filters/FilterPerPage";
import MinMaxPcice from "containers/Filters/FilterMinMaxPrice";
import FilterByCountry from "containers/Filters/FilterByCountry";

import styles from "./styles.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const total = useSelector(selectTotalPrice);

  const addProduct = () =>
    dispatch(modalsActions.openModal(MODALS_NAMES.ADD_PRODUCT));

  return (
    <div className={styles.header}>
      <button onClick={addProduct}>
        <CgAddR size={32} className={styles.icon} />
      </button>
      <div className={styles.filter}>
        <div className={styles.pageFilter}>
          <FilterPerPage />
        </div>
        <div className={styles.priceFilter}>
          <MinMaxPcice />
        </div>
        <div className={styles.countryFilter}>
          <FilterByCountry />
        </div>
      </div>
      <div className={styles.cart}>
        <span className={styles.total}>Total: {total} $</span>
        <Link to={BOOK.CART}>
          <BiCart size={32} className={styles.icon} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
