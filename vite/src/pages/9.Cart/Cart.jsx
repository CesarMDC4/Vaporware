import React, { useState, useContext } from 'react';
import { Products } from '../8.Products/products.js';
import { CatalogContext } from "../../context/catalog-context";
import { Product } from '/src/pages/8.Products/product.jsx';
import { CartItem } from "/src/pages/9.Cart/cart-item.jsx";



const Cart = () => {
    const [cart, setCart] = useState(Products.map(product => ({ ...product, quantity: 1 })));
    const { cartItems, getTotalCartAmount } = useContext(CatalogContext);
    const totalAmount = getTotalCartAmount();
    
    
     // const addToCart = (product) => {
    //     setCart(currentCart => {
    //         const updatedCart = currentCart.map(item => {
    //             if (item.id === product.id) {
    //                 return { ...item, checked: true };
    //             }
    //             return item;
    //         });
    //         return updatedCart;
    //     });
    // };
    
    // const addToCart = (product) => {
    //     setCart(currentCart => {
    //         const index = currentCart.findIndex(item => item.id === product.id);
    //         const newCart = [...currentCart];
    //         newCart[index] = { ...newCart[index], quantity: newCart[index].quantity + 1 };
    //         return newCart;
    //     });
    // };
    
    // const removeFromCart = (productId) => {
    //     setCart(currentCart => {
    //         const index = currentCart.findIndex(item => item.id === productId);
    //         const newCart = [...currentCart];
    //         if (newCart[index].quantity > 0) {
    //             newCart[index] = { ...newCart[index], quantity: newCart[index].quantity - 1 };
    //         }
    //         return newCart;
    //     });
    // };
    
    // const calculateTotal = () => {
    //     return cart.reduce((total, product) => {
    //         if(product.checked){
    //             return total + product.price;
    //         }
    //         return total;
    //     }, 0);
    // };

    // const handleChange = (productId) => {
    //     setCart(currentCart => {
    //         const index = currentCart.findIndex(item => item.id === productId);
    //         const newCart = [...currentCart];
    //         newCart[index] = {...newCart[index], checked: !newCart[index].checked};
    //         return newCart
    //     })
    // }


    const handleRegister = () => {
        // Construct prefilled Google form URLs based on checkbox state
              
                //const checkedProducts = Products.filter(product => product.uid && cartItems > 0);
                //const queryParams = checkedProducts.map(product => `entry.1851047480=${(product.productName.replace(/ /g, '+'))}+-+$${product.price}`).join('&');
                
               //console.log("Checked Products:", checkedProducts);
               //console.log("Query Params:", queryParams);
        
        // Filter out cart items with quantity greater than 0
        const selectedItems = Object.entries(cartItems)
        .filter(([itemId, quantity]) => quantity > 0)
        .map(([itemId, quantity]) => {
            const itemInfo = Products.find(product => product.uid === Number(itemId));
            const queryParams = `entry.1851047480=${(itemInfo.productName.replace(/ /g, '+'))}+-+$${itemInfo.price}`;
            //console.log("Query Params:", queryParams);
            return queryParams;
        });

        console.log("Selected Items:", selectedItems);

        // Join the selected items' query parameters
        const queryParams = selectedItems.join('&');
        console.log("Query Params:", queryParams);

        //const checkedProducts = cart.filter(product => product.quantity > 0);
        //const queryParams = checkedProducts.map(product => `entry.1851047480=${(product.productName.replace(/ /g, '+'))}+-+$${product.price}`).join('&');
        //console.log("I'm a test " + cart.filter(product => product.productName).map(product => product.addedToCart));
        
        const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLScmhWg3VhS-WoDCA0bGS9-1Qmmhs45N9_G-TQyel19KKIcJMw/viewform?usp=pp_url&${queryParams}`;
        //console.log('queryParams');
        // Open the constructed form URL in a new tab
        //console.log(formUrl);
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
            {Products.map((cartItems) => {
                if (cartItems[cartItems.uid] !== 0) {
                    return <CartItem key={cartItems.uid} data={cartItems} addedToCart={cartItems.quantity > 0} />;
                }
            })}
    
            <div className="pt-12 pl-64">
                <h2 className="font-bold text-2xl">Total: ${totalAmount}</h2>
            </div>
        </div>
    );
};

export default Cart;
