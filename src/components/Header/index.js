import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BOOK } from "book";
import { BiCart } from "react-icons/bi";
import { selectTotalPrice } from "bus/cart/selectors";
import FilterPerPage from "containers/Filters/FilterPerPage";
import MinMaxPcice from "containers/Filters/FilterMinMaxPrice";
import FilterByCountry from "containers/Filters/FilterByCountry";

import "./styles.scss";

const Header = () => {
  const total = useSelector(selectTotalPrice);

  return (
    <div className="header">
      <div className="pageFilter">
        <FilterPerPage />
      </div>
      <div className="priceFilter">
        <MinMaxPcice />
      </div>
      <div className="countryFilter">
        <FilterByCountry />
      </div>
      <span className="total">Total: {total} $</span>
      <Link to={BOOK.CART}>
        <BiCart size={32} className="icon" />
      </Link>
    </div>
  );
};

export default Header;
