import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        const keys = Object.keys(storedCart);
        fetch('http://localhost:5000/productByKey', {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                for (const id in storedCart) {
                    const storedProduct = products.find(product => product._id === id);
                    if (storedProduct) {
                        storedProduct.quantity = storedCart[id];
                        savedCart.push(storedProduct);
                    }
                }
                setCart(savedCart);
            })
    }, []);
    return [cart, setCart];
}
export default useCart;