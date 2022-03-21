import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,price,seller,ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Product;