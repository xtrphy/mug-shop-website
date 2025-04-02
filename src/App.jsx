import React from 'react';
import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';

const App = () => {
    let [cartQuantity, setCartQuantity] = useState(null);
    let [products, setProducts] = useState([]);

    return (
        <div className='layout'>
            <Header cartQuantity={cartQuantity} />
            <Home setCartQuantity={setCartQuantity} cartQuantity={cartQuantity} products={products} setProducts={setProducts} />
            <Footer />
        </div>
    );
};

export default App;