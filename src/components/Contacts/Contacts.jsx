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
                    <div className={styles.socialMedias}>
                        <a target='_blank' href='https://vk.com/xtrphyo' className={styles.email}>
                            <i className="fa-brands fa-vk"></i>
                            <h2>VK</h2>
                            <p>Vlad Perepechkin</p>
                        </a>
                        <a target='_blank' href="https://t.me/xtrphy1" className={styles.telegram}>
                            <i className="fa-brands fa-telegram"></i>
                            <h2>Telegram</h2>
                            <p>https://t.me/xtrphy1</p>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contacts;