import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();
    const handleGetName = e =>{
        setName(e.target.value);
    };
    const handleGetAddress = e =>{
        setAddress(e.target.value);
    };
    const handleGetPhone = e =>{
        setPhone(e.target.value);
    };
    const handleAddShipping = e =>{
        e.preventDefault();
        console.log(name, address, phone)
    }
    return (
        <div className='form-container'>
               <h1 className='form-title'>Shipping Details</h1> 
               <form onSubmit={handleAddShipping}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" readOnly value={user? user.email :''} required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleGetName} type="text" name="name" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleGetAddress} type="text" name="address" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handleGetPhone} type="text" name="phone" required/>
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='submit-btn' type="submit" value="Add Shipping" />
               </form>
        </div>
    );
};

export default Shipment;