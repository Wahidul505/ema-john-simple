import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {addToCart,product} = props;
    const {img,name,price,seller,ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="info">
            <div>
                <p className='name-info'>{name}</p>
                <p className='price-info'>Price: ${price}</p>
            </div>
            <div className='extra-info'>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            </div>
            <button onClick={()=>addToCart(product)}>Add to Cart <span style={{marginLeft:'5px'}}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default Product;