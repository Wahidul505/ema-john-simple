import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart,setCart] = useState([]);
    const addToCart = (product)=>{
        let newCart = [];
        const exist = cart.find(element => element.id === product.id);
        if(exist){
            const rest = cart.filter(element => element.id !== exist.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        else{
            product.quantity = 1;
            newCart = [...cart,product];
        }
        setCart(newCart);
        addToDb(product.id);
    }
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product = {product}
                        addToCart = {addToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>Review Orders <FontAwesomeIcon icon={faArrowRight}/></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;