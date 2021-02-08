import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "components/Header";
import Loader from "components/Loader";
import ProductItem from "pages/ProductItem";
import Pagination from "components/Pagination";
import { productActions } from "bus/product/actions";
import {
  selectProductList,
  selectProductListLoading,
  selectFilteredProductList,
  selectFilteredProductListLoading,
} from "bus/product/selectors";

import "./styles.scss";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(productActions.fetchProductList.request()), [
    dispatch,
  ]);

  const productlist = useSelector(selectProductList);
  const loadingList = useSelector(selectProductListLoading);
  const filteredList = useSelector(selectFilteredProductList);
  const loadingFilteredList = useSelector(selectFilteredProductListLoading);

  const loading = loadingList || loadingFilteredList;
  const list = filteredList.length > 0 ? filteredList : productlist;

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="productsWrapper">
            {list.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
          <Pagination />
        </>
      )}
    </>
  );
};

export default ProductList;
