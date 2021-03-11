import qs from "query-string";
import { useDispatch, useSelector } from "react-redux";

import { productActions } from "bus/product/actions";
import { formUrlQuery } from "bus/product/helpers/formUrlQuery";
import { selectTotalItems } from "bus/product/selectors";

import styles from "./styles.module.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  const total = useSelector(selectTotalItems);
  const options = qs.parse(window.location.search.substr(1));

  const perPage = options.perPage || 50;
  const currentPage = options.page || 1;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  const changeCurrentPage = (num) => {
    const data = { 'page': num };
    formUrlQuery(data);
    dispatch(productActions.fetchProductList.request());
  };

  return (
    <ul className={styles.pageNumbers}>
      {pageNumbers.includes(currentPage - 1) && (
        <li onClick={() => changeCurrentPage(currentPage - 1)}>Prev</li>
      )}
      {pageNumbers.map((number) => {
        return (
          <li
            key={number}
            id={number}
            onClick={() => changeCurrentPage(number)}
          >
            {number}
          </li>
        );
      })}
      {pageNumbers.includes(currentPage + 1) && (
        <li onClick={() => changeCurrentPage(currentPage + 1)}>Next</li>
      )}
    </ul>
  );
};

export default Pagination;
