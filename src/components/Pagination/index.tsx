/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import qs from 'query-string';
import { useDispatch, useSelector } from 'react-redux';

import { productActions } from 'bus/product/actions';
import { formUrlQuery } from 'bus/product/helpers/formUrlQuery';
import { selectTotalItems } from 'bus/product/selectors';

import styles from './styles.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const total = useSelector(selectTotalItems);
  // eslint-disable-next-line no-undef
  const options = qs.parse(window.location.search.substr(1));

  const perPage = options.perPage || 50;
  const currentPage = options.page || 1;

  const pageNumbers = [];
  // @ts-expect-error ts-migrate(2363) FIXME: The right-hand side of an arithmetic operation mus... Remove this comment to see the full error message
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'number' is not assignable to par... Remove this comment to see the full error message
    pageNumbers.push(i);
  }

  const changeCurrentPage = (num) => {
    const data = { page: num };
    formUrlQuery(data);
    dispatch(productActions.fetchProductList.request());
  };

  return (
    <ul className={styles.pageNumbers}>
      {/* @ts-expect-error ts-migrate(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message */}
      {pageNumbers.includes(currentPage - 1) && (
        // @ts-expect-error ts-migrate(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        <li onClick={() => changeCurrentPage(currentPage - 1)}>Prev</li>
      )}
      {pageNumbers.map((number) => (
        <li key={number} id={number} onClick={() => changeCurrentPage(number)}>
          {number}
        </li>
      ))}
      {/* @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'any' is not assignable to parame... Remove this comment to see the full error message */}
      {pageNumbers.includes(currentPage + 1) && (
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '+' cannot be applied to types 'string | ... Remove this comment to see the full error message
        <li onClick={() => changeCurrentPage(currentPage + 1)}>Next</li>
      )}
    </ul>
  );
};

export default Pagination;
