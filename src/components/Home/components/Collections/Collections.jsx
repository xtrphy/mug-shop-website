import React from 'react';
import styles from './Collections.module.css';
import mugs from '../../../../assets/goods';

const filteredArray = mugs.slice(0, 4);

const Collections = () => {
    return (
        <div className={styles.section}>
            <h2 className={styles.collections}>Collection</h2>
            <div className={styles.mugs}>
                {filteredArray.map((mug) => (
                    <div key={mug.id} className={styles.mug}>
                        <a href="/">
                            <img src={mug.image} />
                        </a>
                        <div className={styles.info}>
                            <p>{mug.title}</p>
                            <button className={styles.btn}>
                                Add to Cart
                                <input className={styles.quantity} type="number" aria-valuemin={1} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collections;