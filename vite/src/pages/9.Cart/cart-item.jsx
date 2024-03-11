import React, { useContext, useState } from "react";
import { CatalogContext } from "../../context/catalog-context";

export const CartItem = (props) => {
    const { uid, productName, price, productImage, productDescription } = props.data;
    const { cartItems, addToCart, removeFromCart, getTotalCartAmount, addedToCart } = useContext(CatalogContext);
    
    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            addToCart(uid);
        } else {
            removeFromCart(uid);
        }
    };

    return (
      <div key={uid} className="flex space-x-4 p-4">
        <img 
            src={productImage}
            alt={productName}
            className="w-80 h-40 object-cover"

        />
        <div>
            <h2 className="font-bold text-xl">{productName}</h2>
            <p>{productDescription}</p>
            <p>${price}</p>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        checked={addedToCart[uid] || false} // Set checked based on addedToCart state
                        onChange={handleCheckboxChange}
                    />
                    -Add
                </label>
            </div>
        </div>
      </div>
    );
  };