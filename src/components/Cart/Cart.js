import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for (const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.05).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <p style={{textAlign:'center',fontSize:'25px',marginTop:'0'}}>Order summary</p>
                <div>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${total}</p>
                    <p>Shipping Charge: ${shipping}</p>
                    <p>Tax: ${tax}</p>
                    <p style={{fontSize:'22px'}}>Grand Total: ${grandTotal}</p>
                </div>
                <button className='clear-btn'>Clear Cart <span style={{marginLeft:'5px'}}><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></span></button>
                <br />
                <button className='review-btn'>Review Order <span style={{marginLeft:'5px'}}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default Cart;