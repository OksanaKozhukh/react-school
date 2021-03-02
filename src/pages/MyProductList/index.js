import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Pagination from "components/Pagination";
import ProductItem from "pages/ProductItem";

import Header from "components/Header";
import MainLoader from "components/MainLoader";
import { useListInfo } from "bus/product/hooks";
import { productActions } from "bus/product/actions";

import styles from "./styles.module.scss";

const MyProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(productActions.fetchProductList.request()), [
    dispatch,
  ]);
  const { loading, list } = useListInfo();

  return (
    <>
      <Header />
      {loading ? (
        <MainLoader />
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

export default MyProductList;
