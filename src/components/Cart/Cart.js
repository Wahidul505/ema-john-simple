import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
const Cart = ({cart, children}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart){
        quantity = quantity + product.quantity;
        total = total + (product.price * product.quantity);
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.05).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <p className='cart-heading'>Order summary</p>
                <div>
                    <p>Selected Items: {quantity}</p>
                    <p>Total Price: ${total}</p>
                    <p>Shipping Charge: ${shipping}</p>
                    <p>Tax: ${tax}</p>
                    <p className='grand-total'>Grand Total: ${grandTotal}</p>
                </div>
                <button className='clear-btn'>Clear Cart <span style={{marginLeft:'5px'}}><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></span></button>
                <br />
                <button className='review-btn'> 
                {children}
                </button>
        </div>
    );
};

export default Cart;