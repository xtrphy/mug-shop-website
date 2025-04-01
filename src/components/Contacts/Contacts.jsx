import React from 'react';
import styles from './Contacts.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Contacts = () => {
    return (
        <div className='layout'>
            <Header />
            <div className={styles.layout}>
                <div className={styles.section}>
                    <a className={styles.socialMedias}>
                        <a target='_blank' href='https://vk.com/xtrphyo' className={styles.email}>
                            <i className="fa-brands fa-vk"></i>
                            <h2>Email</h2>
                            <a >Vlad Perepechkin</a>
                        </a>
                        <a target='_blank' href="https://t.me/xtrphy1" className={styles.telegram}>
                            <i className="fa-brands fa-telegram"></i>
                            <h2>Telegram</h2>
                            <a>https://t.me/xtrphy1</a>
                        </a>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contacts;