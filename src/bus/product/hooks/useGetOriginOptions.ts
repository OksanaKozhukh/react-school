import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { IOption } from 'interfaces';
import { selectOrigins } from 'bus/product/selectors';

export const useGetOriginOptions = (): Array<IOption> => {
  const origins = useSelector(selectOrigins);
  return useMemo(
    () =>
      origins.map((el) => ({
        value: el.value,
        label: el.displayName,
      })),
    [origins],
  );
};
