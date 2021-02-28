import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "components/Header";
import Loader from "components/Loader";
import ProductItem from "pages/ProductItem";
import Pagination from "components/Pagination";
import { useListInfo } from "bus/product/hooks";
import { productActions } from "bus/product/actions";
import { defineListActions } from "bus/list/actions";

import styles from "./styles.module.scss";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(defineListActions.setGeneralList());
    dispatch(productActions.fetchProductList.request());
    return () => dispatch(defineListActions.clearGeneralList());
  }, [dispatch]);

  const { loading, list } = useListInfo();

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.productsWrapper}>
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
