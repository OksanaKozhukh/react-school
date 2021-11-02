import { useEffect, FC, ReactElement } from 'react';
import qs from 'query-string';
import isEmpty from 'lodash/isEmpty';
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

const ProductList: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const list = useSelector(selectProductList);
  const loading = useSelector(selectProductListLoading);

  const queryParams = qs.parse(window.location.search.substr(1));

  useEffect(() => {
    dispatch(productActions.fetchOrigins.request());
    dispatch(productActions.fetchProductList.request());
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <MainLoader />
      ) : (
        <>
          {list && list.length > 0 && (
            <div className={styles.productsWrapper}>
              {list &&
                list.map((item) => <ProductItem key={item.id} item={item} />)}
            </div>
          )}

          {list && list.length === 0 && isEmpty(queryParams) && (
            <div className={styles.empty}>
              <p>
                Your product list is empty. Please, tap + Add above to add new
                product
              </p>
            </div>
          )}

          {list && list.length === 0 && !isEmpty(queryParams) && (
            <div className={styles.empty}>
              <p>
                No products matching your filter, please try other filtering
                criteria
              </p>
            </div>
          )}
        </>
      )}
      <Pagination />
    </>
  );
};

export default ProductList;
