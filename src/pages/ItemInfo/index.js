import { useDispatch, useSelector } from "react-redux";

import { selectProductItem } from "bus/product/selectors";
import Header from "components/Header";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { cartActions } from "bus/cart/actions";
import { productActions } from "bus/product/actions";

import styles from "./styles.module.scss";

const ItemInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => dispatch(productActions.fetchProductItem.request({ id })), [
    id,
    dispatch,
  ]);

  const item = useSelector(selectProductItem);

  const handleAddClick = (item) => dispatch(cartActions.addToCart(item));

  return (
    <>
      <Header />

      <div className={styles.infoWrapper}>
        <h2> {item.name}</h2>
        <p data-testid="item-origin">Origin: {item.origin}</p>
        <p data-testid="item-price">Price: $ {item.price}</p>
        {!item.isEditable && (
          <button onClick={() => handleAddClick(item)}>Add to cart</button>
        )}
      </div>
    </>
  );
};

export default ItemInfo;
