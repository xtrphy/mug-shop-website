import React from 'react';
import styles from './Collections.module.css';
import mugs from '../../../../assets/goods';

const filteredArray = mugs.slice(0, 4);

const Collections = ({ cartQuantity, setCartQuantity, products, setProducts }) => {

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
                            <a href='#'>
                                <p>{mug.title}</p>
                                <p>{mug.price}₸</p>
                            </a>
                            <button onClick={() => setCartQuantity(prevQuantity => prevQuantity + 1)} className={styles.btn}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collections;