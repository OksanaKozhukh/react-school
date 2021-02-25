import { useDispatch, useSelector } from "react-redux";

import { selectFilterOptions, selectTotalItems } from "bus/product/selectors";
import { productActions } from "bus/product/actions";

import styles from "./styles.module.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  const total = useSelector(selectTotalItems);
  const options = useSelector(selectFilterOptions);

  const perPage = options.perPage;
  const currentPage = options.page;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    if (i >= currentPage - 2 && i <= currentPage + 2)
    pageNumbers.push(i);
  }

  const changeCurrentPage = (num) => {
    dispatch(productActions.filterOptions({ 'page': num }));
    dispatch(productActions.filterProductList.request());
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
