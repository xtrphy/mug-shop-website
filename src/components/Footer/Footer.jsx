import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInfo}>
                <span>© 2025 Vlad Perepechkin</span>
                <ul className={styles.footerNav}>
                    <a href="#">Payment</a>
                    <a href="#">Delivery</a>
                    <a href="#">Refund</a>
                    <a href="#">Safety</a>
                    <a href="#">Privacy</a>
                </ul>
            </div>
            <div className="address">
                11000, Random Street 38, Belgrad, Serbia
            </div>
        </footer>
    );
};

export default Footer;