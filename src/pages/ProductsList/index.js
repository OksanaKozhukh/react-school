import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "components/Header";
import ProductItem from "pages/ProductItem";
import { productActions } from "bus/product/actions";
import { selectProductList } from "bus/product/selectors";

import "./styles.scss";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(productActions.fetchProductList.request()), [dispatch]);

  const list = useSelector(selectProductList);

  return (
    <>
      <Header />
      <div className="productsWrapper">
        {list.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
