/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { productActions } from 'bus/product/actions';
import { formUrlQuery } from 'bus/product/helpers/formUrlQuery';
import { useGetPaginationOptions } from 'bus/product/hooks/useGetPaginationOptions';

import styles from './styles.module.scss';

const Pagination: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { pageNumbers, currentPage } = useGetPaginationOptions();

  const changeCurrentPage = (num: number) => {
    const data = { page: num };
    formUrlQuery(data);
    dispatch(productActions.fetchProductList.request());
  };

  const liElems = document.querySelectorAll('li');
  liElems.forEach((elem) => {
    if (elem.innerText === currentPage) {
      elem.setAttribute('style', 'color: black');
    } else {
      elem.removeAttribute('style');
    }
  });

  return (
    <ul className={styles.pageNumbers}>
      {pageNumbers.includes(+currentPage - 1) && (
        <li onClick={() => changeCurrentPage(+currentPage - 1)}>Prev</li>
      )}
      {pageNumbers.map((number) => (
        <li
          key={number}
          id={String(number)}
          onClick={() => changeCurrentPage(number)}
        >
          {number}
        </li>
      ))}
      {pageNumbers.includes(+currentPage + 1) && (
        <li onClick={() => changeCurrentPage(+currentPage + 1)}>Next</li>
      )}
    </ul>
  );
};

export default Pagination;
