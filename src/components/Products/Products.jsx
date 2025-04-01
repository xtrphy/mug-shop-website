import React from 'react';
import styles from './Products.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import mugs from '../../assets/goods';

const Products = () => {
    return (
        <div className='layout'>
            <Header />
            <div className={styles.layout}>
                <div className={styles.section}>
                    <h1 className={styles.allProducts}>All products</h1>
                    <div className={styles.mugs}>
                        {mugs.map((mug) => (
                            <div key={mug.id} className={styles.mug}>
                                <a href="/">
                                    <img src={mug.image} />
                                </a>
                                <div className={styles.info}>
                                    <a href='#'>
                                        <p>{mug.title}</p>
                                        <p>{mug.price}₸</p>
                                    </a>
                                    <button className={styles.btn}>
                                        Add to Cart
                                        <input className={styles.quantity} type="number" aria-valuemin={1} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;