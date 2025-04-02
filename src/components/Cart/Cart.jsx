import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Cart.module.css';

const Cart = () => {
    const [cartQuantity, setCartQuantity] = useState(0);
    const [products, setProducts] = useState([]);

    return (
        <div className='layout'>
            <Header />
            <div className={styles.layout}>
                <div className={styles.section}>
                    <h1>
                        Cart
                        <span className={styles.cartCircle}>
                            {cartQuantity}
                        </span>
                    </h1>
                    <div className={styles.products}>
                        {products.length === 0 ? (
                            <h3 className={styles.noProduct}>You have not added any product yet.</h3>
                        ) : (
                            products.map((product) => (
                                <p key={product}>Привет</p>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;