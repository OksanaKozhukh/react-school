import { useDispatch, useSelector } from "react-redux";

import { selectProductItem } from "bus/product/selectors";
import Header from "components/Header";

import "./styles.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { cartActions } from "bus/cart/actions";
import { productActions } from "bus/product/actions";

const ItemInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => dispatch(productActions.fetchProductItem.request({ id })), [id, dispatch]);

  const item = useSelector(selectProductItem);

  const handleAddClick = (item) => dispatch(cartActions.addToCart(item));;

  // const origin = item.origin[0].toUpperCase() + item.origin.slice(1);

  return (
    <>
      <Header />

      <div className="infoWrapper">
        <h2> {item.name}</h2>
        <p>Origin: {item.origin}</p>
        <p>Price: $ {item.price}</p>
        <button onClick={() => handleAddClick(item)}>Add to cart</button>
      </div>
    </>
  );
};

export default ItemInfo;
