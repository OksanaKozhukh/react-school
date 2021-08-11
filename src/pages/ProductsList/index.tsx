import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'components/Header';
import ProductItem from 'pages/ProductItem';
import Pagination from 'components/Pagination';
import MainLoader from 'components/MainLoader';
import { productActions } from 'bus/product/actions';
import {
  selectProductList,
  selectProductListLoading,
} from 'bus/product/selectors';

import styles from './styles.module.scss';

const ProductList = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectProductList);
  const loading = useSelector(selectProductListLoading);

  useEffect(() => {
    dispatch(productActions.fetchProductList.request());
  }, [dispatch]);

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

export default ProductList;