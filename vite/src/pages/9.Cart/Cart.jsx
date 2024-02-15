import React, { useState } from 'react';
import { Products } from '../8.Products/products.js';

const Cart = () => {
    const [cart, setCart] = useState(Products.map(product => ({ ...product, quantity: 0 })));

    const addToCart = (product) => {
        setCart(currentCart => {
            const index = currentCart.findIndex(item => item.id === product.id);
            const newCart = [...currentCart];
            newCart[index] = { ...newCart[index], quantity: newCart[index].quantity + 1 };
            return newCart;
        });
    };
    
    const removeFromCart = (productId) => {
        setCart(currentCart => {
            const index = currentCart.findIndex(item => item.id === productId);
            const newCart = [...currentCart];
            if (newCart[index].quantity > 0) {
                newCart[index] = { ...newCart[index], quantity: newCart[index].quantity - 1 };
            }
            return newCart;
        });
    };
    
    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center pt-4 pb-4">Shopping Cart</h1>
            {cart.map(product => (
                <div key={product.id} className="flex space-x-4 p-4">
                    <img
                    src={product.productImage} 
                    alt={product.productName} 
                    className="w-80 h-40 object-cover" 
                    />
                    <div>
                    <h2 className="font-bold text-xl">{product.productName}</h2>
                    <p>{product.productDescription}</p>
                    <p>${product.price}</p>
                    <div>
                    <button onClick={() => addToCart(product)}
                        className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
                        +</button>
                        <span className="text-lg">{product.quantity}</span>
                    <button 
                        onClick={() => removeFromCart(product.id)}
                        className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
                        -</button>
                    </div>
                    </div>
                </div>
            ))}
    
            <div className="pt-12 pl-64">
                <h2 className="font-bold text-2xl">Total: ${calculateTotal()}</h2>
            </div>
        </div>
    );
};

export default Cart;