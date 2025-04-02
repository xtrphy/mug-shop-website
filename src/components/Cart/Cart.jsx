import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Cart.module.css';
import { useCart } from '../../utils/CartContext';

const Cart = () => {
    const { deleteFromCart, addToCart, cartItems, products, productQuantity } = useCart();

    return (
        <div className='layout'>
            <Header />
            <div className={styles.layout}>
                <div className={styles.section}>
                    <h1>
                        Cart
                        <span className={styles.cartCircle}>
                            {cartItems}
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
                                            <span>{productQuantity}</span>
                                            <button onClick={() => deleteFromCart(product)} className={styles.btn}><i className="fa-solid fa-minus"></i></button>
                                        </div>
                                    </div>

                                </div>
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