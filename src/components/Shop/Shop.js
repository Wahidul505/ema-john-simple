import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useCart from '../../hooks/useCart';

const Shop = () => {
    const [cart, setCart] = useCart([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
        fetch(`https://mysterious-bayou-13531.herokuapp.com/product?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [page, size]);

    useEffect(() => {
        fetch('https://mysterious-bayou-13531.herokuapp.com/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / size);
                setPageCount(pages);
            })
    }, [size])
    const addToCart = (product) => {
        let newCart = [];
        const exist = cart.find(element => element._id === product._id);
        if (exist) {
            const rest = cart.filter(element => element._id !== exist._id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product._id);
    }
    return (
        <div className='shop-container'>
            <div>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            addToCart={addToCart}
                        ></Product>)
                    }
                </div>
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={page === number ? 'selected-page' : ''}
                                onClick={() => setPage(number)}
                                key={number}>{number}</button>)
                    }
                    <select onChange={e => setSize(e.target.value)} defaultValue={10}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>Review Orders <FontAwesomeIcon icon={faArrowRight} /></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;