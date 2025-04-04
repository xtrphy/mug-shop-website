import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
            setProducts(JSON.parse(savedProducts));
        }
    }, []);

    const addToCart = (product) => {
        setProducts(prevProducts => {
            const updatedCart = [];
            let found = false;

            for (let item of prevProducts) {
                if (item.id === product.id) {
                    updatedCart.push({ ...item, quantity: item.quantity + 1 });
                    found = true;
                } else {
                    updatedCart.push(item);
                }
            }

            if (!found) {
                updatedCart.push({ ...product, quantity: 1 });
            }

            localStorage.setItem('products', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const deleteFromCart = (product) => {
        setProducts(prevProducts => {
            const updatedCart = [];

            for (let item of prevProducts) {
                if (item.id === product.id) {
                    if (item.quantity > 1) {
                        updatedCart.push({ ...item, quantity: item.quantity - 1 });
                    }
                } else {
                    updatedCart.push(item);
                }
            }
            localStorage.setItem('products', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{ products, setProducts, addToCart, deleteFromCart }}>
            {children}
        </CartContext.Provider>
    );
}