import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../utils/CartContext';
import Icon from '../../assets/Icon.png';
import styles from './Header.module.css';

const Header = () => {
    const { products } = useCart();

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to='/' className={styles.link}>Home</Link>
                <Link to='/products' className={styles.link}>All products</Link>
                <Link to='/contacts' className={styles.link}>Contacts</Link>
                <Link to='/faq' className={styles.link}>FAQ</Link>
            </nav>

            <Link to='/' className={styles.logo} href="/">
                <img src={Icon} />
            </Link>

            <div className={styles.userPanel}>
                <a className={styles.exit} href="/">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </a>
                <Link to='/cart' className={styles.btn}>
                    <span className={styles.cart}>Cart</span>
                    <i className="fa-solid fa-box"></i>
                    <span>{products.length}</span>
                </Link>
            </div>

        </header>
    );
};

export default Header;