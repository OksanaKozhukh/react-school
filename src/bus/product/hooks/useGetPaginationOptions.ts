import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectTotalItems } from 'bus/product/selectors';
import { getParams } from 'bus/product/helpers/formUrlQuery';

export const useGetPaginationOptions = () => {
  const total = useSelector(selectTotalItems);
  const options = getParams();

  const pageNumbers: number[] = [];
  const perPage = options.perPage || 50;
  const currentPage = options.page || 1;

  for (let i = 1; i <= Math.ceil(total / +perPage); i++) {
    pageNumbers.push(i);
  }

  return useMemo(
    () => ({ pageNumbers, currentPage }),
    [pageNumbers, currentPage],
  );
};
