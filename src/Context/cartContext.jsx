// CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/order')
            .then(response => response.json())
            .then(data => setCartItems(data))
            .catch(error => console.error('Error fetching cart items:', error));
    }, []);

    return (
        <CartContext.Provider value={{ cartItems }} key={"cartItem" + cartItems.id}>
            {children}
        </CartContext.Provider>
    );
};
