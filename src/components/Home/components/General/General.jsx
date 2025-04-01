import React from 'react';
import styles from './General.module.css';
import backgroundMug from '../../../../assets/backgroundMug.jpg';

const General = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.blurContainer}>
                <img className={styles.backgroundMug} src={backgroundMug} />
            </div>
            <div className={styles.about}>
                <h1 className={styles.heading}>
                    Best <br />
                    Mug Shop
                </h1>
                <button className={styles.btn}>All products</button>
            </div>
        </div>
    );
};

export default General;