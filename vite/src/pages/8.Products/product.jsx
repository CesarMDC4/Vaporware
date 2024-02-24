import React from "react"; 
import { useState } from 'react';
export const Product = (props) => {
    const { id, productName, price, productImage, productDescription } = props.data;
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };
    

    return( 
        <div className="product">
            <div>
                <p style = {{ textAlign: 'center'}}><b>{productName}</b></p>
            </div>
            <img src = {productImage} alt={productName} onClick={toggleDescription} />
            {showDescription && (
            <div className="description">
                <p>{productDescription}</p>
            </div>
            )}
            <div>
                <p style={{ textAlign: 'left' }}><b>${price}</b></p>
            </div>
        </div>
    );
};