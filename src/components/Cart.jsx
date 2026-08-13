import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      <p>Total Items: {cart.length}</p>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              {item.name} is in your cart.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;