import React from 'react';
import Icon from '../../assets/Icon.png';
import styles from './Header.module.css';

const Header = ({ quantity = 0 }) => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a className={styles.link} href="/">Home</a>
                <a className={styles.link} href="/">All products</a>
                <a className={styles.link} href="/">About Us</a>
                <a className={styles.link} href="/">Contacts</a>
            </nav>

            <a className={styles.logo} href="/"><img src={Icon} /></a>

            <div className={styles.userPanel}>
                <a className={styles.exit} href="/">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </a>
                <a className={styles.btn} href="/">
                    <span className={styles.cart}>Cart</span>
                    <i className="fa-solid fa-box"></i>
                    <span>{quantity}</span>
                </a>
            </div>

        </header>
    );
};

export default Header;