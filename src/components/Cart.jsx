import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import styles from './Cart.module.css'; // Import CSS module

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  const shippingCost = totalAmount >= 1000 ? 0 : 20; // Free shipping if total is $1000 or more
  const finalAmount = totalAmount + shippingCost;

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.title}>Shopping Cart</h2>
      <div className={styles.cartSummary}>
        <p>Total Items: <strong>{totalQuantity}</strong></p>
        <p>Subtotal: <strong>${totalAmount.toFixed(2)}</strong></p>
        <p>Shipping: <strong>${shippingCost}</strong></p>
        <p>Total Amount: <strong>${finalAmount.toFixed(2)}</strong></p>
      </div>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCartMessage}>Your cart is empty.</p>
      ) : (
        <div className={styles.cartItems}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.cartItemDetails}>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.totalPrice.toFixed(2)}</p>
              </div>
              <div className={styles.cartItemControls}>
                <button className={styles.controlButton} onClick={() => handleIncrease(item)}>+</button>
                <button className={styles.controlButton} onClick={() => handleDecrease(item.id)}>-</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
