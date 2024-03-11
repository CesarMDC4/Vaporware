import React, { useState, useContext, useEffect } from "react"; 
import '/src/pages/5.Training/CourseCatalog.css';
import { CatalogContext } from "../../context/catalog-context";

export const Product = (props) => {
    // console.log(props);
    
    const { uid, id, productName, price, productImage, productDescription } = props.data;
    const [showDescription, setShowDescription] = useState(false);
    const { addToCart, cartItems } = useContext(CatalogContext);

    // const cartItemCount = cartItems[uid];

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };
    

    return ( 
        <div className="product">
            <div>
                <p style={{ textAlign: 'center' }}><b>{productName}</b></p>
            </div>
            <img src={productImage} alt={productName} onClick={toggleDescription} />
            {showDescription && (
                <div className="description">
                    <p>{productDescription}</p>
                </div>
            )}
            <div>
                <p style={{ textAlign: 'left' }}><b>${price}</b></p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(uid)}>
                Add To Cart
            </button>
        </div>
    );
};