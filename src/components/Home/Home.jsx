import React from 'react';
import General from './components/General/General';
import Collections from './components/Collections/Collections';

const Home = ({ setCartQuantity }) => {
    return (
        <>
            <General />
            <Collections setCartQuantity={setCartQuantity} />
        </>
    );
};

export default Home;