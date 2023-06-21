import React, { createContext, useState } from 'react';

// Create a new context for the cart
export const CartContext = createContext();

// Create a provider component for the cart context
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = item => {
        setCartItems(prevItems => [...prevItems, item]);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Create a new context for the total price
export const PriceContext = createContext();

// Create a provider component for the price context
export const PriceProvider = ({ children }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalPrice = price => {
        setTotalPrice(prevPrice => prevPrice + price);
    };

    return (
        <PriceContext.Provider value={{ totalPrice, updateTotalPrice }}>
            {children}
        </PriceContext.Provider>
    );
};
