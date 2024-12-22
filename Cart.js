import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 && <p className="empty-cart">Your cart is empty.</p>}
            {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
            <h3 className="cart-total">
                Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
            </h3>
        </div>
    );
};

export default Cart;
