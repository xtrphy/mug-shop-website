import React from 'react';
import { useCart } from '../../../../utils/CartContext';
import styles from './Collections.module.css';
import mugs from '../../../../assets/goods';

const filteredArray = mugs.slice(0, 4);

const Collections = () => {
    const { addToCart } = useCart();

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
                            <button onClick={() => addToCart(mug)} className={styles.btn}>
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