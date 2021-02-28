import { useSelector } from "react-redux";

import {
  selectProductList,
  selectProductListLoading,
  selectFilteredProductList,
  selectFilteredProductListLoading,
} from "bus/product/selectors";
import { useMemo } from "react";

export const useListInfo = () => {
  const productlist = useSelector(selectProductList);
  const loadingList = useSelector(selectProductListLoading);
  const filteredList = useSelector(selectFilteredProductList);
  const loadingFilteredList = useSelector(selectFilteredProductListLoading);

  const loading = loadingList || loadingFilteredList;
  const list = filteredList.length > 0 ? filteredList : productlist;

  return useMemo(
    () => ({
      loading,
      list,
    }),
    [loading, list]
  );
};
