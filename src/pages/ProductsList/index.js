import { useContext } from "react";

import ProductItem from "../ProductItem";
import { ProductContext } from "../../App";
import Header from "../../components/Header";

import "./styles.scss";

const ProductList = () => {
  const { list } = useContext(ProductContext);

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
