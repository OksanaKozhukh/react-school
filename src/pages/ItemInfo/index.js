import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { ProductContext } from "../../App";
import Header from "../../components/Header";

import "./styles.scss";

const ItemInfo = () => {
  const [item, setItem] = useState({});
  const [origin, setOrigin] =useState(null);
  const { id } = useParams();
  const { cartList, setCartList, setTotalPrice } = useContext(ProductContext);
  
  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get(
        `https://yalantis-react-school-api.yalantis.com/api/v1/products/${id}`
      );
      setItem(response.data);
      setOrigin(response.data.origin[0].toUpperCase() + response.data.origin.slice(1))
    };
    fetchItem();
  }, [id]);

  const handleAddClick = (item) => {
    setTotalPrice((prev) => prev + item.price);
    setCartList([...cartList, item]);
  };

  return (
    <>
      <Header />

      <div className='infoWrapper'>
        <h2> {item.name}</h2>
        <p>Origin: {origin}</p>
        <p>Price: $ {item.price}</p>
        <button onClick={() => handleAddClick(item)}>Add to cart</button>
      </div>
    </>
  );
};

export default ItemInfo;
