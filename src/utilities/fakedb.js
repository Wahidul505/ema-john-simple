const addToDb=(id)=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    const quantity = cart[id];
    if(quantity){
        cart[id] = quantity + 1;
    }
    else{
        cart[id] = 1;
    }
    localStorage.setItem('cart',JSON.stringify(cart));
}
const getStoredCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const removeFromCart = (id) =>{
    const cart = getStoredCart();
    delete cart[id];
    localStorage.setItem('cart',JSON.stringify(cart));
}
export {addToDb, removeFromCart, getStoredCart}