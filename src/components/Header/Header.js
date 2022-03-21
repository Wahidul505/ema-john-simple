import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
             <img src={logo} alt="" />
             <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/description">Description</a>
                <a href="/about">About</a>
             </div>
            </nav>
        </div>
    );
};

export default Header;