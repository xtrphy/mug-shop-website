import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../assets/Icon.png';
import styles from './Header.module.css';

const Header = ({ quantity = 0 }) => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to='/' className={styles.link}>Home</Link>
                <Link to='/products' className={styles.link}>All products</Link>
                <Link to='/contacts' className={styles.link}>Contacts</Link>
                <a className={styles.link} href="/">About Us</a>
                {/* <Link to='contacts' className={styles.link}>About Us</Link> */}
            </nav>

            <a className={styles.logo} href="/">
                <img src={Icon} />
            </a>

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