import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(0);
    const [products, setProducts] = useState([]);
    const [productQuantity, setProductQuantity] = useState(1);

    const addToCart = (product) => {
        setProducts([...products, product]);
        setCartItems(prev => prev + 1);
    };

    const deleteFromCart = (product) => {
        setProducts(prevProducts => prevProducts.filter(item => item.id !== product.id));
        setCartItems(prev => prev - 1);
    };

    return (
        <CartContext.Provider value={{ cartItems, products, productQuantity, addToCart, deleteFromCart }}>
            {children}
        </CartContext.Provider>
    );
}