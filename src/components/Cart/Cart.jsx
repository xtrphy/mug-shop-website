import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Cart.module.css';
import { useCart } from '../../utils/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { deleteFromCart, addToCart, products, setProducts } = useCart();

    function calculateTotalPrice(products) {
        if (products.length === 0) {
            return 0;
        }

        let totalPrice = products.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);

        return totalPrice;
    }

    function clearCart() {
        setProducts([]);
        localStorage.setItem('products', JSON.stringify([]));
        console.log(products);
    }

    return (
        <div className='layout'>
            <Header />
            <div className={styles.layout}>
                <div className={styles.section}>
                    <h1>
                        Cart
                        <span className={styles.cartCircle}>
                            {products.length}
                        </span>
                    </h1>
                    <div className={styles.products}>
                        {products.length === 0 ? (
                            <h3 className={styles.noProduct}>You have not added any product yet.</h3>
                        ) : (
                            products.map((product) => (
                                <div key={product.id} className={styles.product}>
                                    <a href="#">
                                        <img src={product.image} />
                                    </a>
                                    <div className={styles.info}>
                                        <div className={styles.links}>
                                            <a href='#'>
                                                {product.title}
                                            </a>
                                            <a href='#'>
                                                {product.price}₸
                                            </a>
                                        </div>

                                        <div className={styles.btnContainer}>
                                            <button onClick={() => addToCart(product)} className={styles.btn}><i className="fa-solid fa-plus"></i></button>
                                            <span>{product.quantity}</span>
                                            <button onClick={() => deleteFromCart(product)} className={styles.btn}><i className="fa-solid fa-minus"></i></button>
                                        </div>
                                    </div>

                                </div>
                            ))
                        )}
                    </div>
                    {products.length > 0
                        ? (
                            <div className={styles.order}>
                                <h3>Total: {calculateTotalPrice(products)} ₸</h3>
                                <Link to='/thank-you' onClick={clearCart} className={styles.orderBtn}>Order</Link>
                            </div>
                        )
                        : null}

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;