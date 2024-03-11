import React, { useState } from 'react';
import { Products } from '../8.Products/products.js';

const Cart = () => {
    const [cart, setCart] = useState(Products.map(product => ({ ...product, quantity: 1 })));

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
        return cart.reduce((total, product) => {
            if(product.checked){
                return total + product.price * product.quantity;
            }
            return total;
        }, 0);
    };

    const handleChange = (productId) => {
        setCart(currentCart => {
            const index = currentCart.findIndex(item => item.id === productId);
            const newCart = [...currentCart];
            newCart[index] = {...newCart[index], checked: !newCart[index].checked};
            return newCart
        })
    }

    const handleRegister = () => {
        // Construct prefilled Google form URLs based on checkbox state
        const checkedProducts = cart.filter(product => product.checked);
        const queryParams = checkedProducts.map(product => `entry.1851047480=${(product.productName.replace(/ /g, '+'))}+-+$${product.price}`).join('&');
        const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLScmhWg3VhS-WoDCA0bGS9-1Qmmhs45N9_G-TQyel19KKIcJMw/viewform?usp=pp_url&${queryParams}`;
        
        // Open the constructed form URL in a new tab
        window.open(formUrl, '_blank');
    };
    

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center pt-4 pb-4">Shopping Cart</h1>
            {/* Register button */}
            <div className="flex justify-end w-full">
                <button
                    onClick={handleRegister}
                    className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Register
                </button>
            </div>
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
                    <label>
                        <input type ="checkbox" checked={product.checked} onChange ={() =>handleChange(product.id)}/>
                        -Add
                    </label>
                    {/*<button onClick={() => addToCart(product)}
                        className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
                        +</button>
                        <span className="text-lg">{product.quantity}</span>
                    <button 
                        onClick={() => removeFromCart(product.id)}
                        className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
            -</button>*/}
                    </div>
                    </div>
                </div>
            ))}
    
    <div className="pt-12 flex justify-between items-center">
        <h2 className="font-bold text-2xl">Total: ${calculateTotal()}</h2>
    </div>
    
</div>
    );
};

export default Cart;