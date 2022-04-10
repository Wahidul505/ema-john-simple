import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const deleteItem = item =>{
        const rest = cart.filter(element => element.id !== item.id);
        setCart(rest);
        removeFromCart(item.id);
    }
    return (
        <div className='orders-container'>
            <div className='review-items-container'>
                {
                    cart.map(item => <ReviewItem 
                        key={item.id} 
                        item={item}
                        deleteItem={deleteItem}
                        ></ReviewItem>)
                }
            </div>
            <div className="cart-container orders-cart-container">
                <Cart cart={cart}>
                    <Link to='/shipment'>Proceed Shipping <FontAwesomeIcon icon={faCreditCard}/></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;