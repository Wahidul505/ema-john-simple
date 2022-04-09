import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({item, deleteItem}) => {
    const {name, img, price, shipping, quantity} = item;
    return (
        <div className='review-item'>
            <div>
            <img src={img} alt="" />
            </div>
            <div className='review-item-info'>
                <div>
                    <p title={name}>{name.length > 20 ? name.slice(0, 20) + '...': name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <button onClick={()=>deleteItem(item)}>
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;