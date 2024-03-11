import { createContext, useEffect, useState } from "react";
import { Products } from '/src/pages/8.Products/products';


export const CatalogContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Products.length + 1; i++) {
        cart[i] = 0;
    }

    return cart;
};

export const CatalogContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [addedToCart, setAddedToCart] = useState({}); 


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = Products.find((product) => product.uid === Number(item));
            totalAmount += itemInfo.price;
          }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: true })); // Set addedToCart to true for the selected item
        setAddedToCart((prev) => ({ ...prev, [itemId]: true }));

    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: false })); // Set addedToCart to false for the selected item
        setAddedToCart((prev) => ({ ...prev, [itemId]: false }));
    };

      
    const contextValue = {
        cartItems,
        addToCart,
        getTotalCartAmount,
        removeFromCart,
        addedToCart,

    };
    
    console.log("in cart",cartItems);
    console.log("added", addedToCart);
    return (
        <CatalogContext.Provider value={contextValue}>
            {props.children}
        </CatalogContext.Provider>
    );
};