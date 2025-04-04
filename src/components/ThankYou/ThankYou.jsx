import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './ThankYou.module.css';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <div className='layout'>
            <Header />
            <div className={styles.layout}>
                <div className={styles.section}>
                    <h1 className={styles.thankYou}>
                        Thank you for your order!
                        <i style={{ marginLeft: '10px' }} className="fa-solid fa-check"></i>
                    </h1>
                    <p className={styles.moreInfo}>For more information, please visit the <Link to='/faq'>FAQ section.</Link></p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ThankYou;