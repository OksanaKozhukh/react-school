import "./styles.scss";

const CartItem = ({ item, quantity }) => (
  <div className='cartItemWrapper'>
    <p><span>{item.name}</span> - quantity: {quantity}</p>
  </div>
);

export default CartItem;
