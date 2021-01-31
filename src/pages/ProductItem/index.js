import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { ProductContext } from "../../App";

import "./styles.scss";

const ProductItem = ({ item }) => {
  const history = useHistory();
  const { setTotalPrice, setCartList, cartList } = useContext(ProductContext);

  const origin = item.origin[0].toUpperCase() + item.origin.slice(1);

  const handleDetailClick = (id) => {
    history.push(`/product-info/${id}`);
  };

  const handleAddClick = (item) => {
    setTotalPrice((prev) => prev + item.price);
    setCartList([...cartList, item]);
  };

  return (
    <div className="wrapper">
      <h3>{item.name}</h3>
      <div>
        <p>Origin: {origin}</p>
        <p>Price: $ {item.price}</p>
      </div>
      <div className="btn">
        <button onClick={() => handleDetailClick(item.id)}>Details</button>
        <button onClick={() => handleAddClick(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
